import { SessionController } from "@/server/controllers/Access.controller";
import { NextRequest } from "next/server";

export async function PUT(req: NextRequest) {
  return SessionController.close(req);
}

export const runtime = "nodejs";
