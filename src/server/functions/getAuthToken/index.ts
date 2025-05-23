import { CS_KEY_ACCESS_TOKEN } from "@/constraints";
import { appMonitoringServer } from "@/implementations/server";
import { IUser } from "@/types";
import { verify } from "jsonwebtoken";
import { NextRequest } from "next/server";

// skipcq: JS-0116
const getAuthToken = async (req: NextRequest) => {
  "use server";

  try {
    const { cookies, headers } = req;
    const accessToken =
      cookies.get(CS_KEY_ACCESS_TOKEN)?.value ??
      headers.get("Authorization")?.replace("Bearer ", "");

    if (!accessToken) {
      appMonitoringServer.addBreadcrumb({
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

    const userData = verify(accessToken, process.env.AUTH_SECRET ?? "", {
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
