import { NextRequest, NextResponse } from "next/server";
import { ticketUrl } from "../../url";

type Ticket = {
  id: string;
};

export async function GET(_req: NextRequest, { params }: { params: Ticket }) {
  try {
    const { id } = params;
    const ticketIdUrl = `${ticketUrl}${id}`;

    const response = await fetch(ticketIdUrl, {
      next: {
        revalidate: 60 * 3,
        tags: ["ticket"],
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
