import { TicketServices } from "@/server/services/Ticket";
import { NextRequest, NextResponse } from "next/server";

export class TicketController {
  static async getAllTickets(req: NextRequest) {
    try {
      const { cookies } = req;
      const userToken = cookies.get("token")?.value;

      if (!userToken) {
        return NextResponse.json(
          { error: "User not authenticated" },
          {
            status: 401,
          },
        );
      }

      const tickets = await TicketServices.getAllTickets(userToken);
      return NextResponse.json(tickets, {
        status: 200,
      });
    } catch (error) {
      return NextResponse.json({ error });
    }
  }

  static async getTicketById(req: NextRequest, params: { id: string }) {
    try {
      const { cookies } = req;
      const userToken = cookies.get("token")?.value;
      const ticketId = params.id;

      console.log({ userToken, ticketId });

      if (!userToken) {
        return NextResponse.json(
          { error: "User not authenticated" },
          {
            status: 401,
          },
        );
      }

      const tickets = await TicketServices.getTicketById(userToken, ticketId);
      return NextResponse.json(tickets, {
        status: 200,
      });
    } catch (error) {
      return NextResponse.json({ error });
    }
  }

  // async updateTicket(req: NextRequest, res: NextResponse) {
  //   // update a ticket
  // }

  // async deleteTicket(req: NextRequest, res: NextResponse) {
  //   // delete a ticket
  // }

  // async createTicket(req: NextRequest, res: NextResponse) {
  //   // get all tickets
  // }
}
