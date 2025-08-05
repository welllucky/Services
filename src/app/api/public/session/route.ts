import { AccessController } from "@/server/controllers/Access.controller";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  return AccessController.create(req);
}

export const runtime = "nodejs";
