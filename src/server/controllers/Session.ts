import { AuthErrorMessage } from "@/types/Interfaces/Auth";
import { CS_KEY_ACCESS_TOKEN } from "@/utils/alias";
import * as jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import { getFormattedBody } from "../functions/getFormattedBody";
import { SessionRepository } from "../repository/Session";
import { UserServices } from "../services";
import { UserView } from "../views";

interface SessionProps {
  email: string;
  password: string;
}

export class SessionController {
  static async create(req: NextRequest) {
    try {
      const { email, password } = await getFormattedBody<SessionProps>(req);

      if (!email || !password) {
        return NextResponse.json(
          {
            error: {
              message:
                "Email Password is empty. Please insert this information to auth user",
            },
          },
          {
            status: 400,
          },
        );
      }

      const user = await UserServices.findByEmail(email);

      if (!user) {
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

      //   const isPasswordValid = await bcrypt.compare(password, user.hash);

      //   if (!isPasswordValid) {
      //     return NextResponse.json(
      //       { error: { message: "Invalid password" } },
      //       {
      //         status: 401,
      //       },
      //     );
      //   }

      console.log({ user });

      const expiresAt = new Date();
      expiresAt.setDate(expiresAt.getDate() + 7);

      const accessToken = jwt.sign(
        { ...user.dataValues, exp: expiresAt.getTime() },
        process.env.AUTH_SECRET ?? "",
        {
          algorithm: "HS256",
        },
      );

      await SessionRepository.create({
        userId: user.register,
        token: accessToken,
        expiresAt,
      });

      return NextResponse.json(
        { accessToken },
        {
          headers: {
            "Set-Cookie": `${CS_KEY_ACCESS_TOKEN}=${accessToken}; HttpOnly; Secure; SameSite=Strict; Expires=${expiresAt.toUTCString()}`,
          },
          status: 200,
        },
      );
    } catch {
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
}
