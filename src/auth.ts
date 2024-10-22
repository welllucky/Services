import * as Sentry from "@sentry/nextjs";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { InvalidLoginError, UserNotExist } from "./server/models/Errors";
import { IHttpError } from "./types";
import { AuthErrorMessage } from "./types/Interfaces/Auth";
import {
  CS_KEY_CALLBACK_URL,
  CS_KEY_CSRF_TOKEN,
  CS_KEY_SESSION_TOKEN,
} from "./utils/alias";
import { getUserFromDb } from "./utils/functions/getUserFromDb";
import { linkUserSession } from "./utils/functions/linkUserSession";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        // const { email, password } = await SignInSchema.parseAsync(credentials);

        const { email, password } = credentials;

        const { error, user } = await getUserFromDb(
          String(email),
          String(password),
        );

        if (!user?.isBanned) {
          await linkUserSession(String(email), String(password));
        }

        if (!user || error || user?.isBanned) {
          const errorMessage =
            (error as IHttpError).message ?? AuthErrorMessage.UserNotExist;

          if (errorMessage === AuthErrorMessage.UserNotExist) {
            throw new UserNotExist();
          }

          throw new InvalidLoginError();
        }

        return { ...user };
      },
    }),
  ],
  pages: {
    signIn: "/login",
    newUser: "/register",
    error: "/login",
  },
  session: {
    maxAge: 5 * 24 * 60 * 60,
    updateAge: 1 * 24 * 60 * 60,
  },
  jwt: {
    maxAge: 5 * 24 * 60 * 60,
  },
  useSecureCookies: process.env.NODE_ENV !== "development",
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
        },
      };
    },
  },
  cookies: {
    sessionToken: {
      name: CS_KEY_SESSION_TOKEN,
      options: {
        httpOnly: process.env.NODE_ENV !== "development",
      },
    },
    callbackUrl: {
      name: CS_KEY_CALLBACK_URL,
      options: {
        httpOnly: process.env.NODE_ENV !== "development",
      },
    },
    csrfToken: {
      name: CS_KEY_CSRF_TOKEN,
      options: {
        httpOnly: process.env.NODE_ENV !== "development",
      },
    },
  },
});
