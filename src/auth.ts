import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { appMonitoringServer } from "./implementations/server";
import { createSession } from "./utils/functions/createSession";
import { getUserByToken } from "./utils/functions/getUserByToken";

const companyEmail = process.env.SERVICES_COMPANY_EMAIL_DOMAIN
  ? `@${process.env.SERVICES_COMPANY_EMAIL_DOMAIN}`
  : "";

const requiredEnvVars = ["AUTH_SECRET"];
// eslint-disable-next-line security/detect-object-injection
const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);

if (missingEnvVars.length > 0 && process.env.NODE_ENV === "production") {
  throw new Error(`Missing required environment variables: ${missingEnvVars.join(", ")}`);
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  debug: process.env.NODE_ENV === "development",
  secret: process.env.AUTH_SECRET || process.env.NEXTAUTH_SECRET,
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          if (!credentials?.email || !credentials?.password) {
            return null;
          }

          const { accessToken, error } = await createSession(
            String(credentials.email),
            String(credentials.password),
          );

          if (!accessToken || error) {
            return null;
          }

          const { userData } = await getUserByToken(accessToken);

          if (!userData) {
            return null;
          }

          // Transform user data to match the User type
          return {
            id: userData.register,
            register: userData.register,
            name: userData.name,
            email: userData.email,
            lastConnection: userData.lastConnection || null,
            isBanned: userData.isBanned || false,
            canCreateTicket: userData.canCreateTicket ?? true,
            canResolveTicket: userData.canResolveTicket ?? true,
            position: (userData as { position?: string }).position || "",
            sector: userData.sector || "",
            role: userData.role || "",
            accessToken,
          };
        } catch (error) {
          appMonitoringServer.captureException(error, {
            tags: {
              context: "NextAuth authorize",
              email: credentials?.email || "empty",
            },
          });
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
    newUser: "/register",
    error: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 6 * 24 * 60 * 60,
    updateAge: 1 * 24 * 60 * 60,
  },
  jwt: {
    maxAge: 6 * 24 * 60 * 60,
  },
  cookies: {
    sessionToken: {
      name: `${process.env.NODE_ENV === "production" ? "__Secure-" : ""}next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
      },
    },
  },
  callbacks: {
    jwt({ token, user }) {
      try {
        if (user) {
          const newToken = { ...token };
          newToken.id = user.id;
          newToken.register = user.register;
          newToken.email = user.email;
          newToken.name = user.name;
          newToken.picture = user.image;
          newToken.canCreateTicket = user.canCreateTicket;
          newToken.canResolveTicket = user.canResolveTicket;
          newToken.isBanned = user.isBanned;
          newToken.lastConnection = user.lastConnection;
          newToken.position = user.position;
          newToken.sector = user.sector;
          newToken.role = user.role;
          newToken.accessToken = user.accessToken;
          return newToken;
        }
        return token;
      } catch (error) {
        appMonitoringServer.captureException(error, {
          tags: {
            context: "NextAuth JWT callback",
          },
        });
        return token;
      }
    },
    session({ session, token }) {
      try {
        appMonitoringServer.setUser({
          id: token?.register as string,
          email: token?.email as string ?? "",
          username: token?.name as string ?? "",
          canCreateTicket: token?.canCreateTicket as boolean,
          canResolveTicket: token?.canResolveTicket as boolean,
          isBanned: token?.isBanned as boolean,
        });
        return {
          ...session,
          user: {
            ...session.user,
            id: token?.id as string ?? "",
            canCreateTicket: token?.canCreateTicket as boolean,
            canResolveTicket: token?.canResolveTicket as boolean,
            isBanned: token?.isBanned as boolean,
            register: token?.register as string,
            lastConnection: token?.lastConnection as string,
            email: token?.email as string,
            name: token?.name as string,
            image: token?.picture as string,
            role: token?.role as string,
            sector: token?.sector as string,
            systemRole: token?.systemRole as string,
          },
          accessToken: token?.accessToken as string,
        };
      } catch (error) {
        appMonitoringServer.captureException(error, {
          tags: {
            context: "NextAuth Session callback",
          },
        });
        return session;
      }
    },
    signIn({ user, profile, credentials }) {
      try {
        const userEmail =
          user.email ?? profile?.email ?? String(credentials?.email);

        if (!companyEmail) return true;

        return Boolean(userEmail?.endsWith(companyEmail));
      } catch (error) {
        appMonitoringServer.captureException(error, {
          tags: {
            context: "NextAuth SignIn callback",
          },
        });
        return false;
      }
    },
  },

  logger: {
    error: (error) => {
      // eslint-disable-next-line no-console
      console.error({ error });
      appMonitoringServer.captureException(error);
    },
    warn: (code) => {
      // eslint-disable-next-line no-console
      console.warn(code);
    },
    // eslint-disable-next-line no-console
    info: console.log,
    debug: (message, metadata) => {
      // eslint-disable-next-line no-console
      console.debug({ message, metadata });
    },
  },
});
