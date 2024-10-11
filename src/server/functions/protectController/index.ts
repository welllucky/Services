import { NextRequest, NextResponse } from "next/server";
import { getAuthToken } from "../getAuthToken";

// eslint-disable-next-line consistent-return
export const protectController = async (req: NextRequest) => {
  "use server";

  const { isAuthenticated } = await getAuthToken(req);

  if (!isAuthenticated) {
    return NextResponse.json(
      { error: { message: "User not authenticated" } },
      {
        status: 401,
      },
    );
  }
};
