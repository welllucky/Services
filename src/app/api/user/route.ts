import { UserController } from "@/server";
import { SessionController } from "@/server/controllers/Session";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  return UserController.authUser(req);
}

export async function PUT(req: NextRequest) {
  return SessionController.create(req);
}

// export async function POST(req: NextRequest) {
//   return UserController.createUserSession(req);
// }

export const runtime = "nodejs";
