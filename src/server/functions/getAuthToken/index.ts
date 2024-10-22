import { SessionService } from "@/server/services/Session";
import { IUser } from "@/types";
import { CS_KEY_ACCESS_TOKEN } from "@/utils/alias";
import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

const getAuthToken = async (req: NextRequest) => {
  "use server";

  try {
    const { cookies, headers } = req;
    const accessToken =
      cookies.get(CS_KEY_ACCESS_TOKEN)?.value ??
      headers.get("authorization")?.replace("Bearer ", "");

    if (!accessToken) throw new Error("No access token found");

    const userData = jwt.verify(accessToken, process.env.AUTH_SECRET ?? "", {
      algorithms: ["HS256"],
    }) as unknown as IUser;

    const session = await SessionService.getSession(userData.register);

    const isAuthenticated = session?.userId === userData.register;

    return {
      accessToken,
      isAuthenticated,
      userId: String(userData.register),
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
