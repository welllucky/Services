import { TicketController } from "@/server/controllers";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  return TicketController.getTicketsInProgress(req);
}

export const runtime = "nodejs";
