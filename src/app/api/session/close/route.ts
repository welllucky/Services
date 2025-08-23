import { AccessController } from "@/server/controllers/Access.controller";
import { NextRequest } from "next/server";

export async function PUT(req: NextRequest) {
  return AccessController.close(req);
}

export const runtime = "nodejs";
