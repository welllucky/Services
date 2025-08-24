import { NextRequest } from "next/server";

import { TicketController } from "@/server";

type Ticket = {
  id: string;
};

export async function GET(req: NextRequest, { params }: { params: Ticket }) {
  return TicketController.getTicketById(req, params);
}
export const runtime = "nodejs";
