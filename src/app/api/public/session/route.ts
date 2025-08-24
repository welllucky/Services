import { NextRequest } from "next/server";

import { AccessController } from "@/server/controllers/Access.controller";

export async function POST(req: NextRequest) {
  return AccessController.create(req);
}

export const runtime = "nodejs";
