import { TicketController } from "@/server/controllers";
import { NextRequest } from "next/server";

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export async function GET(req: NextRequest) {
  return TicketController.getAllTickets(req);
}

export const runtime = "nodejs";
