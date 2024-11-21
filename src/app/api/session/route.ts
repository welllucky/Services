import { SessionController } from "@/server/controllers/Session";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  return SessionController.create(req);
}

export async function DELETE(req: NextRequest) {
  return SessionController.close(req);
}

export const runtime = "nodejs";
