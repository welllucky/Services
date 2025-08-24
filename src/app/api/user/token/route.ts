import { NextRequest, NextResponse } from "next/server";

import { getAuthToken } from "@/server/functions/getAuthToken";

export const GET = async (req: NextRequest) => {
  const { userId, userData } = await getAuthToken(req);

  return NextResponse.json(
    {
      userId,
      userData,
    },
    {
      status: 200,
    },
  );
};

export const runtime = "nodejs";
