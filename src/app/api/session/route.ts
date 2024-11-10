import { SessionController } from "@/server/controllers/Session";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  return SessionController.create(req);
}

export const runtime = "nodejs";
