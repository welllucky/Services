import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { appMonitoringServer } from "./implementations/server";
import { createSession } from "./utils/functions/createSession";
import { getUserByToken } from "./utils/functions/getUserByToken";

const companyEmail = process.env.SERVICES_COMPANY_EMAIL_DOMAIN
  ? `@${process.env.SERVICES_COMPANY_EMAIL_DOMAIN}`
  : "";

export const { handlers, signIn, signOut, auth } = NextAuth({
  debug: process.env.HOST_ENV === "development",
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
      authorize: async (credentials, request) => {
        const { accessToken } = await createSession(
          String(credentials.email),
          String(credentials.password),
        );

        if (!accessToken) {
          return null;
        }

        const { userData } = await getUserByToken(accessToken);

        if (!userData) {
          return null;
        }

        // return user object with their profile data
        return {
          ...userData,
          accessToken,
        };
      },
    }),
  ],
  pages: {
    signIn: "/login",
    newUser: "/register",
    error: "/login",
  },
  session: {
    maxAge: 6 * 24 * 60 * 60,
    updateAge: 1 * 24 * 60 * 60,
  },
  jwt: {
    maxAge: 6 * 24 * 60 * 60,
  },
  // useSecureCookies: process.env.NODE_ENV !== "development",
  callbacks: {
    jwt({ token, user }) {
      return {
        ...token,
        ...user,
        ...(user && { id: user?.id ?? user.register }),
      };
    },
    session({ session, token, user }) {
      // eslint-disable-next-line no-param-reassign
      session.user.id = token?.id ?? user?.id ?? "";
      appMonitoringServer.setUser({
        id: token?.register,
        email: token?.email ?? "",
        username: token?.name ?? "",
      });
      return {
        ...session,
        user: {
          ...session.user,
          id: token?.id,
          canCreateTicket: token?.canCreateTicket,
          canResolveTicket: token?.canResolveTicket,
          isBanned: token?.isBanned,
          register: token?.register,
          lastConnection: token?.lastConnection,
          email: token?.email,
          name: token?.name,
          image: token?.picture,
          role: token?.role,
          sector: token?.sector,
          systemRole: token?.systemRole,
        },
        accessToken: token?.accessToken,
      };
    },
    signIn({ user, profile, credentials }) {
      const userEmail =
        user.email ?? profile?.email ?? String(credentials?.email);

      if (!companyEmail) return true;

      return Boolean(userEmail?.endsWith(companyEmail));
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
