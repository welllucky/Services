import { SessionController } from "@/server/controllers/Session.controller";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  return SessionController.create(req);
}

export const runtime = "nodejs";
