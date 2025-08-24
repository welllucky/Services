import { NextRequest } from "next/server";

import { AccessController } from "@/server/controllers/Access.controller";

export async function PUT(req: NextRequest) {
  return AccessController.close(req);
}

export const runtime = "nodejs";
