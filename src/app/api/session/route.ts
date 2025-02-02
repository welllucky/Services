import { SessionController } from "@/server/controllers/Session.controller";
import { NextRequest } from "next/server";

export async function DELETE(req: NextRequest) {
  return SessionController.close(req);
}

export const runtime = "nodejs";
