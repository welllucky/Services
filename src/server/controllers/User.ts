import { startDBConnection } from "@/database";
import { UserView } from "@/server/views";
import { IRegisterUser, RegisterUserSchema } from "@/types";
import { AuthErrorMessage } from "@/types/Interfaces/Auth";
import { captureException } from "@sentry/nextjs";
import { NextRequest, NextResponse } from "next/server";
import { getAuthToken } from "../functions/getAuthToken";
import { userModel } from "../models";
import { UserServices } from "../services";

export class UserController {
  static async authUser(req: NextRequest) {
    try {
      await startDBConnection();
      const { isAuthenticated, userId } = await getAuthToken(req);

      if (!isAuthenticated || !userId) {
        return NextResponse.json(
          { error: { message: "User not authenticated" } },
          {
            status: 401,
          },
        );
      }

      await userModel.init({
        register: userId,
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

      const userData = userModel.getData();

      return NextResponse.json(
        UserView.getUser({ user: userData, status: 200 }),
        {
          status: 200,
        },
      );
    } catch (error) {
      captureException(error, {
        tags: {
          controller: "UserController",
          method: "authUser",
        },
      });
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

  static async createUser(req: NextRequest) {
    try {
      await startDBConnection();
      const data: IRegisterUser = await req.json();
      const { email, password, register } = data;

      RegisterUserSchema.parse(data);

      if (!email || !password) {
        return NextResponse.json(
          {
            error: {
              message: `${!email ? "Email" : "Password"} is empty. Please insert this information to create user`,
            },
          },
          {
            status: 400,
          },
        );
      }

      const existingUser = await UserServices.exits(register, email);

      if (existingUser) {
        return NextResponse.json(
          {
            error: {
              message: "User already exists",
            },
          },
          {
            status: 409,
          },
        );
      }

      const { user } = await userModel.createUser(data);

      return NextResponse.json(UserView.getUser({ user, status: 201 }), {
        status: 201,
      });
    } catch (error) {
      captureException(error, {
        tags: {
          controller: "UserController",
          method: "createUser",
        },
      });
      return NextResponse.json(
        UserView.getUser({
          error: { message: error || AuthErrorMessage.InvalidLoginError },
          status: 500,
        }),
        {
          status: 500,
        },
      );
    }
  }

  // static async createUserSession(req: NextRequest) {
  //   try {
  //     const { userToken, isAuthenticated } = await getAuthToken(req);

  //     const body = (await req.json()) as {
  //       email: string;
  //     };

  //     if (!body) {
  //       return NextResponse.json(
  //         {
  //           error: {
  //             message:
  //               "Request body is empty. Please insert this information to auth user",
  //           },
  //         },
  //         {
  //           status: 400,
  //         },
  //       );
  //     }

  //     if (!isAuthenticated) {
  //       return NextResponse.json(
  //         { error: { message: "User not authenticated" } },
  //         {
  //           status: 401,
  //         },
  //       );
  //     }

  //     const userData = await UserServices.linkSessionToUser(
  //       userToken,
  //       body.email,
  //     );

  //     if (!userData) {
  //       return NextResponse.json(
  //         UserView.getUser({
  //           user: null,
  //           error: { message: AuthErrorMessage.UserNotExist },
  //           status: 404,
  //         }),
  //         {
  //           status: 404,
  //         },
  //       );
  //     }

  //     return NextResponse.json(UserView.getUser({ status: 200 }), {
  //       status: 200,
  //     });
  //   } catch {
  //     return NextResponse.json(
  //       UserView.getUser({
  //         error: { message: AuthErrorMessage.InvalidLoginError },
  //         status: 500,
  //       }),
  //       {
  //         status: 500,
  //       },
  //     );
  //   }
  // }
}
