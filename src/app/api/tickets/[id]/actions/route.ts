import { NextRequest, NextResponse } from "next/server";
import { ticketUrl } from "../../../url";

type Ticket = {
  id: string;
};

export async function POST(req: NextRequest, { params }: { params: Ticket }) {
  try {
    const { id } = params;
    const ticketIdUrl = `${ticketUrl}${id}`;
    const { body } = req;

    const response = await fetch(ticketIdUrl, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
    });

    return NextResponse.json(response);
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
