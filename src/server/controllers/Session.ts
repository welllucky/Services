import { startDBConnection } from "@/database";
import { getAuthToken } from "@/server/functions/getAuthToken";
import { AuthErrorMessage } from "@/types/Interfaces/Auth";
import { CS_KEY_ACCESS_TOKEN } from "@/utils/alias";
import { addBreadcrumb, captureException } from "@sentry/nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { getFormattedBody } from "../functions/getFormattedBody";
import { SessionModel, userModel } from "../models";
import { SessionService } from "../services/Session";
import { UserView } from "../views";

interface SessionProps {
  email: string;
  password: string;
}

export class SessionController {
  static async create(req: NextRequest) {
    try {
      const cookiesStore = cookies();
      await startDBConnection();
      const { email, password } = await getFormattedBody<SessionProps>(req);

      if (!email || !password) {
        addBreadcrumb({
          category: "api",
          level: "warning",
          message: "Email or Password is empty.",
          data: {
            isEmailEmpty: email === "",
            isPasswordEmpty: password === "",
          },
        });

        return NextResponse.json(
          {
            error: {
              message:
                "Email or Password is empty. Please insert this information to auth user",
            },
          },
          {
            status: 400,
          },
        );
      }

      addBreadcrumb({
        category: "api",
        level: "log",
        message: "Email and password received",
        data: {
          email,
          password: "***********",
        },
      });

      await userModel.init({
        email,
      });

      if (!userModel.exists({ safe: true })) {
        addBreadcrumb({
          category: "api",
          level: "log",
          message: "User not exist",
          data: {
            email,
          },
        });
        return NextResponse.json(
          UserView.getUser({
            user: null,
            error: { message: AuthErrorMessage.UserNotExist },
            status: 404,
          }),
          {
            status: 404,
          },
        );
      }

      addBreadcrumb({
        category: "api",
        level: "log",
        message: "User exist",
        data: {
          email,
        },
      });

      const sessionModel = new SessionModel({
        userModel,
      });

      const { accessToken, expiresAt } = await sessionModel.createAccessToken({
        password,
      });

      addBreadcrumb({
        category: "api",
        level: "log",
        message: "Access Token is created",
        data: {
          expiresAt,
        },
      });

      const session = await SessionService.createSession(
        password,
        userModel,
        expiresAt,
      );

      if (!session) {
        addBreadcrumb({
          category: "api",
          level: "log",
          message: "Session not created",
        });

        throw new Error("Session not created");
      }

      addBreadcrumb({
        category: "api",
        level: "log",
        message: "Session created",
        data: {
          ...session,
        },
      });

      cookiesStore.set(CS_KEY_ACCESS_TOKEN, accessToken, {
        // secure: process.env.NODE_ENV !== "development",
        // path: "/",
        // sameSite: "lax",
        expires: expiresAt,
      });

      addBreadcrumb({
        category: "api",
        level: "log",
        message: "Access Token is set in cookies",
      });

      return NextResponse.json(
        { accessToken, expiresAt },
        {
          status: 201,
        },
      );
    } catch (error) {
      const err = error as Error;

      captureException(error, {
        tags: {
          module: "api",
          controller: "SessionController",
          method: "create",
        },
      });

      if (err.message.includes("Invalid password")) {
        return NextResponse.json(
          { error: { message: err.message } },
          {
            status: 401,
          },
        );
      }

      return NextResponse.json(
        UserView.getUser({
          error,
          status: 500,
        }),
        {
          status: 500,
        },
      );
    }
  }

  static async close(req: NextRequest) {
    try {
      await startDBConnection();
      const cookiesStore = await cookies();
      const { userId, sessionId } = await getAuthToken(req);

      if (!userId) {
        addBreadcrumb({
          category: "api",
          level: "warning",
          message: "User not authenticated",
        });
        return NextResponse.json(
          { error: { message: "User not authenticated" } },
          {
            status: 401,
          },
        );
      }

      if (!sessionId) {
        addBreadcrumb({
          category: "api",
          level: "warning",
          message: "Session not authenticated",
          data: {
            userId,
            sessionId,
          },
        });
        return NextResponse.json(
          { error: { message: "Section not exists" } },
          {
            status: 404,
          },
        );
      }

      await userModel.init({
        register: userId,
      });

      const sessionModel = new SessionModel({
        userModel,
      });

      await sessionModel.close(sessionId);

      addBreadcrumb({
        category: "api",
        level: "log",
        message: "Session was closed successfully",
      });

      cookiesStore.delete(CS_KEY_ACCESS_TOKEN);

      addBreadcrumb({
        category: "api",
        level: "info",
        message: "Access Token is deleted from cookies",
      });

      return NextResponse.redirect(new URL("/login", req.nextUrl.clone()));
    } catch (error) {
      console.log({ error });
      const err = error as Error;

      captureException(error, {
        tags: {
          module: "api",
          controller: "SessionController",
          method: "close",
        },
      });

      return NextResponse.json(
        UserView.getUser({
          error: { message: err.message },
          status: 400,
        }),
        {
          status: 400,
        },
      );
    }
  }
}
