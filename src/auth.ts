import * as Sentry from "@sentry/nextjs";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
// import {
//   CS_KEY_CALLBACK_URL,
//   CS_KEY_CSRF_TOKEN,
//   CS_KEY_SESSION_TOKEN,
// } from "./utils/alias";
import { createSession } from "./utils/functions/createSession";
import { getUserByToken } from "./utils/functions/getUserByToken";

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

        console.log({ accessToken });

        if (!accessToken) {
          return null;
        }

        console.log("Well vai da bom");

        const { userData } = await getUserByToken(accessToken);

        console.log({ userData });

        if (!userData) {
          console.log("Well deu ruim");
          // No user found, so this is their first attempt to login
          // Optionally, this is also the place you could do a user registration
          return null;
        }

        console.log("Well passow");

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
    async jwt({ token, user }) {
      return {
        ...token,
        ...user,
        ...(user && { id: user?.id ?? user.register }),
      };
    },
    session({ session, token, user }) {
      const scope = Sentry.getCurrentScope();
      // eslint-disable-next-line no-param-reassign
      session.user.id = token?.id ?? user?.id ?? "";
      scope.setUser({
        id: token?.register,
        ...(token?.email && { email: token?.email }),
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
      };
    },
  },
  // cookies: {
  //   sessionToken: {
  //     name: CS_KEY_SESSION_TOKEN,
  //     options: {
  //       httpOnly: process.env.NODE_ENV !== "development",
  //     },
  //   },
  //   callbackUrl: {
  //     name: CS_KEY_CALLBACK_URL,
  //     options: {
  //       httpOnly: process.env.NODE_ENV !== "development",
  //     },
  //   },
  //   csrfToken: {
  //     name: CS_KEY_CSRF_TOKEN,
  //     options: {
  //       httpOnly: process.env.NODE_ENV !== "development",
  //     },
  //   },
  // },
  logger: {
    error: (error) => {
      console.error({ error });
      Sentry.captureException(error);
    },
    warn: (code) => {
      console.log(code);
    },
    info: console.log,
    debug: (message, metadata) => {
      console.log({ message, metadata });
    },
  },
});
