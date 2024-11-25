import { startDBConnection } from "@/database";
import { getAuthToken } from "@/server/functions/getAuthToken";
import { AuthErrorMessage } from "@/types/Interfaces/Auth";
import { CS_KEY_ACCESS_TOKEN } from "@/utils/alias";
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

      await userModel.init({
        email,
      });

      if (!userModel.exists({ safe: true })) {
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

      const sessionModel = new SessionModel({
        userModel,
      });

      const { accessToken, expiresAt } = await sessionModel.createAccessToken({
        password,
      });

      const session = await SessionService.createSession(
        password,
        userModel,
        expiresAt,
      );

      if (!session) throw new Error("Session not created");

      cookiesStore.set(CS_KEY_ACCESS_TOKEN, accessToken, {
        // secure: process.env.NODE_ENV !== "development",
        // path: "/",
        // sameSite: "lax",
        expires: expiresAt,
      });

      return NextResponse.json(
        { accessToken, expiresAt },
        {
          status: 201,
        },
      );
    } catch (error) {
      const err = error as Error;

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
          error: { message: AuthErrorMessage.InvalidLoginError },
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
        return NextResponse.json(
          { error: { message: "User not authenticated" } },
          {
            status: 401,
          },
        );
      }

      if (!sessionId) {
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

      cookiesStore.delete(CS_KEY_ACCESS_TOKEN);

      return NextResponse.redirect(new URL("/login", req.nextUrl.clone()));
    } catch (error) {
      const err = error as Error;

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
