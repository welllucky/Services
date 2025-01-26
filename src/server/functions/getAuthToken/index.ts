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

    return {
      accessToken,
      userData,
      userId: String(userData.register),
      isAuthenticated: true,
    };
  } catch {
    return {
      accessToken: "",
      userData: null,
      userId: "",
      isAuthenticated: false,
    };
  }
};

export { getAuthToken };
