import { TicketController } from "@/server/controllers";
import { NextRequest } from "next/server";

type TicketParamProps = {
  id: string;
};

export async function POST(
  req: NextRequest,
  { params }: { params: TicketParamProps },
) {
  return TicketController.closeTicket(req, params);
}

export const runtime = "nodejs";
