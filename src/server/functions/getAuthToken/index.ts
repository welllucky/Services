import { NextRequest } from "next/server";

const getAuthToken = async (req: NextRequest) => {
  "use server";

  const { cookies, headers } = req;
  const userToken =
    cookies.get("token")?.value ??
    headers.get("authorization")?.replace("Bearer ", "") ??
    "";
  const isAuthenticated = !!userToken;

  return { userToken, isAuthenticated };
};

export { getAuthToken };
