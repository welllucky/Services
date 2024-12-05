import { SessionService } from "@/server/services/Session";
import { IUser } from "@/types";
import { CS_KEY_ACCESS_TOKEN } from "@/utils/alias";
import { addBreadcrumb } from "@sentry/nextjs";
import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

const getAuthToken = async (req: NextRequest) => {
  "use server";

  try {
    const { cookies, headers } = req;
    const accessToken =
      cookies.get(CS_KEY_ACCESS_TOKEN)?.value ??
      headers.get("Authorization")?.replace("Bearer ", "");

    if (!accessToken) {
      addBreadcrumb({
        category: "auth",
        level: "warning",
        message: "No access token found",
        data: {
          cookies,
          headers,
        },
      });
      throw new Error("No access token found");
    }

    const userData = jwt.verify(accessToken, process.env.AUTH_SECRET ?? "", {
      algorithms: ["HS256"],
    }) as unknown as IUser;

    const session = await SessionService.getSession(userData.register);

    if (!session) {
      addBreadcrumb({
        category: "auth",
        level: "warning",
        message: "Session passed by access token not found in user database",
        data: {
          userData,
        },
      });
      throw new Error("User could not access this resource");
    }

    const isTokenValid = session.expiresAt.getTime() > Date.now();

    if (!isTokenValid) {
      addBreadcrumb({
        category: "auth",
        level: "warning",
        message: "Session passed by access token is expired",
        data: {
          session,
          actualData: Date.now(),
        },
      });

      await SessionService.closeSession(userData.register);

      addBreadcrumb({
        category: "auth",
        level: "log",
        message: `Session ${session.id} was closed`,
        data: {
          session,
          actualData: Date.now(),
        },
      });
    }

    const isAuthenticated = session.isActive && isTokenValid;

    return {
      accessToken,
      isAuthenticated,
      userId: String(userData.register),
      sessionId: String(session.id),
    };
  } catch {
    return {
      accessToken: "",
      isAuthenticated: false,
      userId: "",
    };
  }
};

export { getAuthToken };
