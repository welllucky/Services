import { NextRequest } from "next/server";

import { TicketController } from "@/server/controllers";

export async function GET(req: NextRequest) {
  return TicketController.getAllTickets(req);
}

export async function POST(req: NextRequest) {
  return TicketController.createTicket(req);
}

export const runtime = "nodejs";
