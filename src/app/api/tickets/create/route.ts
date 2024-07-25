import { TicketController } from "@/server/controllers";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  return TicketController.createTicket(req);
}

export const runtime = "nodejs";
