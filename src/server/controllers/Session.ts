// import { getAuthToken } from "@/server/functions/getAuthToken";
import { IHttpResponse, ISessionResponse } from "@/types";
// import { CS_KEY_ACCESS_TOKEN } from "@/utils/alias";
import { addBreadcrumb, captureException } from "@sentry/nextjs";
// import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { getAuthToken } from "../functions/getAuthToken";
import { getFormattedBody } from "../functions/getFormattedBody";
import { UserView } from "../views";

interface SessionProps {
  email: string;
  password: string;
}

const sessionApiUrl = `${process.env.APIS_BASE_URL}sessions`;

export class SessionController {
  static async create(req: NextRequest) {
    try {
      // const cookiesStore = cookies();
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

      const res = await fetch(sessionApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const resBody = await res.json();

      const { data, error, status } = resBody as IHttpResponse<
        ISessionResponse,
        { message?: string; title?: string }
      >;

      if (!data?.token || error?.message) {
        return NextResponse.json(
          {
            error: {
              message: error?.message ?? "Error creating session",
              title: error?.title ?? "Error",
            },
          },
          {
            status,
          },
        );
      }

      return NextResponse.json(
        { ...resBody },
        {
          status,
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
      const { userId } = await getAuthToken(req);

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

      const res = await fetch(`${sessionApiUrl}/close`, {
        method: "POST",
        headers: {
          Authorization: req.headers.get("Authorization") ?? "",
        },
      });

      if (res.ok) {
        addBreadcrumb({
          category: "api",
          level: "log",
          message: "Session was closed successfully",
        });

        return NextResponse.redirect(new URL("/login", req.nextUrl.clone()));
      }

      return NextResponse.json(
        { error: { message: "Error closing session" } },
        {
          status: 500,
        },
      );
    } catch (error) {
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
