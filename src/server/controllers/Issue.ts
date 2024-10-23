import { getAuthToken } from "@/server/functions/getAuthToken";
import { getFormattedBody } from "@/server/functions/getFormattedBody";
import { TicketView } from "@/server";
import { IOpenIssueForm } from "@/types";
import { NextRequest, NextResponse } from "next/server";
import { IssueServices } from "../services";

export class IssueController {
  static async getAllIssues(req: NextRequest) {
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

      const tickets = await IssueServices.getAllIssues(userId);

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

  static async getIssueById(req: NextRequest, params: { id: string }) {
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

      const ticket = await IssueServices.getIssueById(userId, ticketId);

      if (!ticket.length) {
        return NextResponse.json(
          { error: { message: "Issue not found" } },
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

  static async createIssue(req: NextRequest) {
    try {
      const body = await getFormattedBody<IOpenIssueForm>(req);
      const { userId, isAuthenticated } = await getAuthToken(req);

      if (!isAuthenticated || !userId) {
        return NextResponse.json(
          { error: { message: "User not authenticated" } },
          {
            status: 401,
          },
        );
      }

      const tickets = await IssueServices.createIssue(userId, body);

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

  static async getInProgressIssues(req: NextRequest) {
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

      const tickets = await IssueServices.getInProgressIssues(userId);

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

  static async closeIssue(req: NextRequest, params: { id: string }) {
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
          { error: { message: "Issue ID not provided" } },
          {
            status: 400,
          },
        );
      }

      const ticket = await IssueServices.closeIssue(userId, ticketId);

      if (!ticket) {
        return NextResponse.json(
          { error: { message: "Issue not found" } },
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

  static async startIssue(req: NextRequest, params: { id: string }) {
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
          { error: { message: "Issue ID not provided" } },
          {
            status: 400,
          },
        );
      }

      const ticket = await IssueServices.startIssue(userId, ticketId);

      if (!ticket) {
        return NextResponse.json(
          { error: { message: "Issue not found" } },
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

  static async reopenIssue(req: NextRequest, params: { id: string }) {
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
          { error: { message: "Issue ID not provided" } },
          {
            status: 400,
          },
        );
      }

      const ticket = await IssueServices.reopenIssue(userId, ticketId);

      if (!ticket) {
        return NextResponse.json(
          { error: { message: "Issue not found" } },
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
