import { TicketController } from "@/server/controllers";
import { Ticket } from "@/server/models";
import { NextRequest, NextResponse } from "next/server";
import { ticketUrl } from "../../url";

type TicketParamProps = {
  id: string;
};

export async function GET(
  req: NextRequest,
  { params }: { params: TicketParamProps },
) {
  return TicketController.getTicketById(req, params);
}

export async function POST(req: NextRequest) {
  try {
    const ticketIdUrl = `${ticketUrl}`;

    const response = await fetch(ticketIdUrl, {
      method: "POST",
      body: JSON.stringify(req.body),
      headers: {
        "Content-Type": "application/json",
        ...req.headers,
      },
      mode: "cors",
    });

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({
      error,
    });
  }
}

export async function PUT(req: NextRequest, { params }: { params: Ticket }) {
  try {
    const { id } = params;
    const ticketIdUrl = `${ticketUrl}${id}`;

    const response = await fetch(ticketIdUrl, {
      method: "PUT",
      body: JSON.stringify(req.body),
      headers: {
        "Content-Type": "application/json",
        ...req.headers,
      },
      mode: "cors",
    });

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({
      error,
    });
  }
}

export const runtime = "nodejs";
