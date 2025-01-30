/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
// import { UserController } from "@/server/controllers/User.controller";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  // return UserController.authUser(req);

  return NextResponse.json(
    { message: "Hello from the user route!" },
    {
      status: 501,
    },
  );
}

export async function POST(req: NextRequest) {
  // return UserController.createUser(req);
  return NextResponse.json(
    { message: "Hello from the user route!" },
    {
      status: 501,
    },
  );
}

export const runtime = "nodejs";
