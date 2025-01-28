import { EnterpriseController } from "@/server/controllers";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  return EnterpriseController.getSectors(req);
}

export const runtime = "nodejs";
