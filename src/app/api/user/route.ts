import { UserController } from "@/server/controllers/User";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  return UserController.authUser(req);
}

export async function POST(req: NextRequest) {
  return UserController.createUser(req);
}

export const runtime = "nodejs";
