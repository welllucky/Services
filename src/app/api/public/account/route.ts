import { NextRequest } from "next/server";

import { AccountController } from "@/server";

export async function POST(req: NextRequest) {
  return AccountController.create(req);
}

export const runtime = "nodejs";
