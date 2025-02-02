import { EnterpriseController } from "@/server/controllers";

export async function GET() {
  return EnterpriseController.getSectors();
}

export const runtime = "nodejs";
