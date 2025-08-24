import { verify } from "jsonwebtoken";

import { appMonitoringServer } from "@/implementations/server";
import { IUser } from "@/types";

export const getUserByToken = async (token: string) => {
  const accessToken = token?.replace("Bearer", "").trimStart().trimEnd();
  const authToken = process.env.AUTH_SECRET ?? "";

  appMonitoringServer.addBreadcrumb({
    message: "User token verification started",
    category: "auth.token",
    level: "info",
    data: {
      hasToken: !!token,
      tokenLength: accessToken?.length || 0,
      hasAuthSecret: !!authToken,
    },
  });

  if (!accessToken) {
    appMonitoringServer.addBreadcrumb({
      message: "No access token provided",
      category: "auth.token.validation",
      level: "warning",
    });

    appMonitoringServer.captureException("Token verification failed: No access token", {
      tags: {
        source: "getUserByToken",
        reason: "no_token",
      },
    });

    return { userData: null, accessToken: null };
  }

  try {
    const userData = verify(accessToken, authToken, {
      algorithms: ["HS256"],
    }) as unknown as IUser;

    appMonitoringServer.addBreadcrumb({
      message: "Token verified successfully",
      category: "auth.token.success",
      level: "info",
      data: {
        userId: userData?.register,
        email: userData?.email ? `${userData.email.substring(0, 3)}***` : "unknown",
        hasRole: !!userData?.role,
      },
    });

    return { userData, accessToken };
  } catch (error) {
    appMonitoringServer.addBreadcrumb({
      message: "Token verification failed",
      category: "auth.token.error",
      level: "error",
      data: {
        errorMessage: (error as Error).message,
        tokenLength: accessToken.length,
      },
    });

    appMonitoringServer.captureException(error, {
      tags: {
        source: "getUserByToken",
        tokenLength: accessToken.length,
        hasAuthSecret: !!authToken,
      },
    });

    return { userData: null, accessToken: null };
  }
};
