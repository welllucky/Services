import { AccountController } from "@/server";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  return AccountController.create(req);
}

export const runtime = "nodejs";
