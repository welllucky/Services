import { NextRequest } from "next/server";

import { EnterpriseController } from "@/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ name: string; sectorId: string }> },
) {
  const { sectorId } = await params;
  return EnterpriseController.getRolesBySector(sectorId);
}

export const runtime = "nodejs";
