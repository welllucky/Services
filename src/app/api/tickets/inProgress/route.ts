import { NextRequest } from "next/server";

import { TicketController } from "@/server/controllers";

export async function GET(req: NextRequest) {
  return TicketController.getTicketsInProgress(req);
}

export const runtime = "nodejs";
