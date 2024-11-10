import { IUser } from "@/types";
import { verify } from "jsonwebtoken";

export const auth = async (accessToken: string) => {
  const userData = verify(accessToken, process.env.AUTH_SECRET ?? "", {
    algorithms: ["HS256"],
  }) as unknown as IUser;

  return { isAuthenticated: !!userData, user: userData };
};
