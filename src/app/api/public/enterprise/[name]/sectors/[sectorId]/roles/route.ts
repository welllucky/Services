import { EnterpriseController } from "@/server";
import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ name: string; sectorId: string }> },
) {
  const { sectorId } = await params;
  return EnterpriseController.getRolesBySector(req, sectorId);
}

export const runtime = "nodejs";
