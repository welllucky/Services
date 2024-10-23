import { getAuthToken } from "@/server/functions/getAuthToken";
import { NextRequest, NextResponse } from "next/server";
import { TicketServices } from "../services";

class TicketController {
  static async getAllTickets(req: NextRequest) {
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

      const issues = await TicketServices.getAllTickets(userId);

      if (!issues?.length) {
        return NextResponse.json(
          { error: { message: "No issues found" } },
          {
            status: 204,
          },
        );
      }

      return NextResponse.json(issues, {
        status: 200,
      });
    } catch (error) {
      return NextResponse.json({ error });
    }
  }

  static async getTicketById(req: NextRequest, params: { id: string }) {
    try {
      const issueId = params.id;
       const { userId, isAuthenticated } = await getAuthToken(req);

       if (!isAuthenticated || !userId) {
         return NextResponse.json(
           { error: { message: "User not authenticated" } },
           {
             status: 401,
           },
         );
       }

      const issue = await TicketServices.getTicketById(userId, issueId);

      if (!issue?.length) {
        return NextResponse.json(
          { error: { message: "No issue found" } },
          {
            status: 204,
          },
        );
      }

      return NextResponse.json(issue, {
        status: 200,
      });
    } catch (error) {
      return NextResponse.json({ error });
    }
  }

  static async initializeTicket(req: NextRequest, params: { id: string }) {
    try {
      const issueId = params.id;
       const { userId, isAuthenticated } = await getAuthToken(req);

       if (!isAuthenticated || !userId) {
         return NextResponse.json(
           { error: { message: "User not authenticated" } },
           {
             status: 401,
           },
         );
       }

      if (!issueId) {
        return NextResponse.json(
          { error: { message: "Ticket ID not provided" } },
          {
            status: 400,
          },
        );
      }

      const ticket = await TicketServices.startTicket(userId, issueId);

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

export { TicketController };
