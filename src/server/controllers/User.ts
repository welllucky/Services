// import { getAuthToken } from "@/server/functions/getAuthToken";
import { UserServices } from "@/server/services";
import { UserView } from "@/server/views";
import { AuthErrorMessage } from "@/types/Interfaces/Auth";
import { NextRequest, NextResponse } from "next/server";

export class UserController {
  static async authUser(req: NextRequest) {
    try {
      const email = req.nextUrl.searchParams.get("username") ?? "";
      const password = req.nextUrl.searchParams.get("password") ?? "";

      if (!email || !password) {
        return NextResponse.json(
          {
            error: {
              message: `${!email ? "Email" : "Password"} is empty. Please insert this information to auth user`,
            },
          },
          {
            status: 400,
          },
        );
      }

      const userData = await UserServices.findByEmailAndPassword(
        email,
        password,
      );

      if (!userData) {
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

      return NextResponse.json(
        UserView.getUser({ user: userData, status: 200 }),
        {
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
