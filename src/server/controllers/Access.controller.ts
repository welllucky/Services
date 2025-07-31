import { CS_KEY_ACCESS_TOKEN, defaultHeaders } from "@/constraints";
import { appMonitoringServer } from "@/implementations/server";
import { IAccessResponse, IHttpResponse } from "@/types";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { getAuthToken } from "../functions/getAuthToken";
import { getFormattedBody } from "../functions/getFormattedBody";

interface AccessProps {
  email: string;
  password: string;
}

const accessApiUrl = `${process.env.APIS_BASE_URL}/v1/auth`;

export class AccessController {
  static async create(req: NextRequest) {
    try {
      const cookiesStore = cookies();
      const { email, password } = await getFormattedBody<AccessProps>(req);

      if (!email || !password) {
        appMonitoringServer.addBreadcrumb({
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

      appMonitoringServer.addBreadcrumb({
        category: "api",
        level: "log",
        message: "Email and password received",
      });

      const res = await fetch(`${accessApiUrl}/login`, {
        method: "POST",
        headers: {
          ...defaultHeaders,
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const resBody = await res.json();

      console.log({
        resBody,
        res,
      });

      const { data, error, status } = resBody as IHttpResponse<
        IAccessResponse,
        { message?: string; title?: string }
      >;

      if (!data?.accessToken || error?.message) {
        return NextResponse.json(
          {
            error: {
              message: error?.message ?? "Error creating Access",
              title: error?.title ?? "Error",
            },
          },
          {
            status,
          },
        );
      }

      cookiesStore.set(CS_KEY_ACCESS_TOKEN, data.accessToken, {
        expires: new Date(data.expiresAt),
        path: "/",
        sameSite: "strict",
        secure: true,
        httpOnly: true,
      });

      return NextResponse.json(
        { ...resBody },
        {
          status,
        },
      );
    } catch (error) {
      const err = error as Error;

      appMonitoringServer.captureException(error, {
        tags: {
          module: "api",
          controller: "AccessController",
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
        {
          error,
          status: 500,
        },
        {
          status: 500,
        },
      );
    }
  }

  static async close(req: NextRequest) {
    try {
      const { accessToken } = await getAuthToken(req);

      const res = await fetch(`${accessApiUrl}/close`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          ...defaultHeaders,
        },
      });

      if (res.ok) {
        appMonitoringServer.addBreadcrumb({
          category: "api",
          level: "log",
          message: "Access was closed successfully",
        });

        return NextResponse.redirect(new URL("/login", req.nextUrl.clone()));
      }

      return NextResponse.json(
        { error: { message: "Error closing Access" } },
        {
          status: 500,
        },
      );
    } catch (error) {
      const err = error as Error;

      appMonitoringServer.captureException(error, {
        tags: {
          module: "api",
          controller: "AccessController",
          method: "close",
        },
      });

      return NextResponse.json(
        {
          error: { message: err.message },
          status: 400,
        },
        {
          status: 400,
        },
      );
    }
  }
}
