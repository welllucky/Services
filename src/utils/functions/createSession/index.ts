import { defaultHeaders } from "@/constraints";
import { appMonitoringServer } from "@/implementations/server";
import { IAccessResponse, IHttpResponse, SignInSchema } from "@/types";

export const createSession = async (email: string, password: string) => {
  const maskedEmail = email ? `${email.substring(0, 3)}***` : "empty";

  appMonitoringServer.addBreadcrumb({
    message: "Session creation started",
    category: "auth.session",
    level: "info",
    data: {
      email: maskedEmail,
      hasPassword: !!password,
    },
  });

  try {
    const { email: reliableEmail, password: reliablePassword } =
      SignInSchema.parse({ email, password });

    appMonitoringServer.addBreadcrumb({
      message: "Session credentials validated",
      category: "auth.session.validation",
      level: "info",
      data: {
        email: maskedEmail,
      },
    });

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/public/session`,
      {
        method: "POST",
        headers: {
          ...defaultHeaders,
        },
        body: JSON.stringify({
          email: reliableEmail,
          password: reliablePassword,
        }),
      },
    );

    appMonitoringServer.addBreadcrumb({
      message: "Session API call completed",
      category: "auth.session.api",
      level: "info",
      data: {
        email: maskedEmail,
        statusCode: res.status,
        statusText: res.statusText,
      },
    });

    const { data, error } = (await res.json()) as IHttpResponse<
      IAccessResponse,
      { message?: string; title?: string }
    >;

    if (!data?.accessToken || error?.message) {
      appMonitoringServer.addBreadcrumb({
        message: "Session creation failed",
        category: "auth.session.error",
        level: "error",
        data: {
          email: maskedEmail,
          hasAccessToken: !!data?.accessToken,
          errorMessage: error?.message,
        },
      });

      appMonitoringServer.captureException("Session creation failed for user", {
        tags: {
          source: "createSession",
          email: maskedEmail,
          statusCode: res.status,
          ...(error?.message && { errorMessage: error?.message }),
        },
      });

      throw new Error(error?.message ?? "Error creating session");
    }

    appMonitoringServer.addBreadcrumb({
      message: "Session created successfully",
      category: "auth.session.success",
      level: "info",
      data: {
        email: maskedEmail,
        hasAccessToken: true,
      },
    });

    return { accessToken: data.accessToken };
  } catch (error) {
    appMonitoringServer.addBreadcrumb({
      message: "Session creation exception",
      category: "auth.session.error",
      level: "error",
      data: {
        email: maskedEmail,
        errorMessage: (error as Error).message,
      },
    });

    appMonitoringServer.captureException(error, {
      tags: {
        source: "createSession",
        email: maskedEmail,
      },
    });

    return {
      error: {
        message: (error as Error).message,
      },
    };
  }
};
