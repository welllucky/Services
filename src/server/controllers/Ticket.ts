import { getAuthToken } from "@/server/functions/getAuthToken";
import { getFormattedBody } from "@/server/functions/getFormattedBody";
import { TicketView } from "@/server/views/Ticket";
import { IOpenTicketForm } from "@/types";
import { NextRequest, NextResponse } from "next/server";
import { TicketServices } from "../services";

export class TicketController {
  static async getAllTickets(req: NextRequest) {
    try {
      const { isAuthenticated, userId } = await getAuthToken(req);

      if (!isAuthenticated || !userId) {
        return NextResponse.json(
          { error: { message: "User not authenticated" } },
          {
            status: 401,
          },
        );
      }

      // const params = req.nextUrl.searchParams;
      // const statuses = params.getAll("status");

      const tickets = await TicketServices.getAllTickets(userId);

      if (!tickets.length) {
        return NextResponse.json(
          { error: { message: "No tickets found" } },
          {
            status: 204,
          },
        );
      }

      return NextResponse.json(tickets, {
        status: 200,
      });
    } catch (error) {
      return NextResponse.json({ error });
    }
  }

  static async getTicketById(req: NextRequest, params: { id: string }) {
    try {
      const ticketId = params.id;
      const { userId, isAuthenticated } = await getAuthToken(req);

      if (!isAuthenticated || !userId) {
        return NextResponse.json(
          { error: { message: "User not authenticated" } },
          {
            status: 401,
          },
        );
      }

      const ticket = await TicketServices.getTicketById(userId, ticketId);

      if (!ticket.length) {
        return NextResponse.json(
          { error: { message: "Ticket not found" } },
          {
            status: 204,
          },
        );
      }

      return NextResponse.json(TicketView.getTicket(ticket[0].dataValues), {
        status: 200,
      });
    } catch (error) {
      return NextResponse.json({ error });
    }
  }

  static async createTicket(req: NextRequest) {
    try {
      const body = await getFormattedBody<IOpenTicketForm>(req);
      const { userId, isAuthenticated } = await getAuthToken(req);

      if (!isAuthenticated || !userId) {
        return NextResponse.json(
          { error: { message: "User not authenticated" } },
          {
            status: 401,
          },
        );
      }

      const tickets = await TicketServices.createTicket(userId, body);

      return NextResponse.json(TicketView.getTicketId(tickets), {
        status: 201,
      });
    } catch (error) {
      return NextResponse.json(
        { error },
        {
          status: 400,
        },
      );
    }
  }

  static async getInProgressTickets(req: NextRequest) {
    try {
      const { userId, isAuthenticated } = await getAuthToken(req);

      if (!isAuthenticated || !userId) {
        return NextResponse.json(
          { error: { message: "User not authenticated" } },
          {
            status: 401,
          },
        );
      }

      const tickets = await TicketServices.getInProgressTickets(userId);

      if (!tickets?.length) {
        return NextResponse.json(
          { error: { message: "No tickets found" } },
          {
            status: 200,
          },
        );
      }

      return NextResponse.json(tickets, {
        status: 200,
      });
    } catch (error) {
      return NextResponse.json(
        { error },
        {
          status: 500,
        },
      );
    }
  }

  static async closeTicket(req: NextRequest, params: { id: string }) {
    try {
      const ticketId = params.id;
      const { userId, isAuthenticated } = await getAuthToken(req);

      if (!isAuthenticated || !userId) {
        return NextResponse.json(
          { error: { message: "User not authenticated" } },
          {
            status: 401,
          },
        );
      }

      if (!ticketId) {
        return NextResponse.json(
          { error: { message: "Ticket ID not provided" } },
          {
            status: 400,
          },
        );
      }

      const ticket = await TicketServices.closeTicket(userId, ticketId);

      if (!ticket) {
        return NextResponse.json(
          { error: { message: "Ticket not found" } },
          {
            status: 204,
          },
        );
      }

      return NextResponse.json("", {
        status: 200,
      });
    } catch (error) {
      return NextResponse.json(
        {
          error,
        },
        {
          status: 500,
        },
      );
    }
  }

  static async startTicket(req: NextRequest, params: { id: string }) {
    try {
      const ticketId = params.id;
      const { userId, isAuthenticated } = await getAuthToken(req);

      if (!isAuthenticated || !userId) {
        return NextResponse.json(
          { error: { message: "User not authenticated" } },
          {
            status: 401,
          },
        );
      }

      if (!ticketId) {
        return NextResponse.json(
          { error: { message: "Ticket ID not provided" } },
          {
            status: 400,
          },
        );
      }

      const ticket = await TicketServices.startTicket(userId, ticketId);

      if (!ticket) {
        return NextResponse.json(
          { error: { message: "Ticket not found" } },
          {
            status: 204,
          },
        );
      }

      return NextResponse.json("", {
        status: 200,
      });
    } catch (error) {
      return NextResponse.json(
        {
          error,
        },
        {
          status: 500,
        },
      );
    }
  }

  static async reopenTicket(req: NextRequest, params: { id: string }) {
    try {
      const ticketId = params.id;
      const { userId, isAuthenticated } = await getAuthToken(req);

      if (!isAuthenticated || !userId) {
        return NextResponse.json(
          { error: { message: "User not authenticated" } },
          {
            status: 401,
          },
        );
      }

      if (!ticketId) {
        return NextResponse.json(
          { error: { message: "Ticket ID not provided" } },
          {
            status: 400,
          },
        );
      }

      const ticket = await TicketServices.reopenTicket(userId, ticketId);

      if (!ticket) {
        return NextResponse.json(
          { error: { message: "Ticket not found" } },
          {
            status: 204,
          },
        );
      }

      return NextResponse.json("", {
        status: 200,
      });
    } catch (error) {
      return NextResponse.json(
        {
          error,
        },
        {
          status: 500,
        },
      );
    }
  }
}
