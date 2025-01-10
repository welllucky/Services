import { getAuthToken } from "@/server/functions/getAuthToken";
import { NextRequest, NextResponse } from "next/server";

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
