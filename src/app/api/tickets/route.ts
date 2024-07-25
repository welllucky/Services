import { TicketController } from "@/server/controllers";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  return TicketController.getAllTickets(req);
}

export const runtime = "nodejs";
