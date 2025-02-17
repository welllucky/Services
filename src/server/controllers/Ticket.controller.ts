import { ticketUrl } from "@/app/api/urls";
import { defaultHeaders } from "@/constraints";
import { getAuthToken } from "@/server/functions/getAuthToken";
import {
  CreatedTicketDto,
  IHttpError,
  IHttpResponse,
  IOpenTicketForm,
  TicketDto,
} from "@/types";
import { captureException } from "@sentry/nextjs";
import { NextRequest, NextResponse } from "next/server";
import { getFormattedBody } from "../functions/getFormattedBody";

class TicketController {
  static async getAllTickets(req: NextRequest) {
    try {
      const { userId, isAuthenticated, accessToken } = await getAuthToken(req);

      if (!isAuthenticated || !userId) {
        return NextResponse.json(
          { error: { message: "User not authenticated" } },
          {
            status: 401,
          },
        );
      }

      const res = await fetch(ticketUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          ...defaultHeaders,
        },
      });

      const resBody = (await res.json()) as IHttpResponse<
        TicketDto[],
        IHttpError
      >;

      if (!resBody.data?.length) {
        return NextResponse.json(
          { error: { message: "No issues found" } },
          {
            status: 204,
          },
        );
      }

      return NextResponse.json(resBody, {
        ...res,
      });
    } catch (error) {
      captureException(error, {
        tags: {
          controller: "TicketController",
          method: "getAllTickets",
        },
      });
      return NextResponse.json({ error });
    }
  }

  static async getTicketById(req: NextRequest, params: { id: string }) {
    try {
      const issueId = params.id;
      const { userId, isAuthenticated, accessToken } = await getAuthToken(req);

      if (!isAuthenticated || !userId) {
        return NextResponse.json(
          { error: { message: "User not authenticated" } },
          {
            status: 401,
          },
        );
      }

      const res = await fetch(`${ticketUrl}/${issueId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          ...defaultHeaders,
        },
      });

      const resBody = (await res.json()) as IHttpResponse<
        TicketDto,
        { message?: string; title?: string }
      >;

      return NextResponse.json(resBody, {
        ...res,
      });
    } catch (error) {
      captureException(error, {
        tags: {
          controller: "TicketController",
          method: "getTicketById",
        },
      });
      return NextResponse.json({ error });
    }
  }

  static async createTicket(req: NextRequest) {
    try {
      const { userId, isAuthenticated, accessToken } = await getAuthToken(req);
      const newTicketData = await getFormattedBody<IOpenTicketForm>(req);

      if (!isAuthenticated || !userId) {
        return NextResponse.json(
          { error: { message: "User not authenticated" } },
          {
            status: 401,
          },
        );
      }

      const res = await fetch(`${ticketUrl}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          ...defaultHeaders,
        },
        body: JSON.stringify(newTicketData),
      });

      const resBody = (await res.json()) as IHttpResponse<
        CreatedTicketDto,
        IHttpError
      >;

      if (resBody.error) {
        return NextResponse.json({ ...resBody.error });
      }

      return NextResponse.json(resBody, {
        status: resBody.status,
      });
    } catch (error) {
      return NextResponse.json({ error });
    }
  }

  // static async initializeTicket(req: NextRequest, params: { id: string }) {
  //   try {
  //     const issueId = params.id;
  //     const { userId, isAuthenticated } = await getAuthToken(req);

  //     if (!isAuthenticated || !userId) {
  //       return NextResponse.json(
  //         { error: { message: "User not authenticated" } },
  //         {
  //           status: 401,
  //         },
  //       );
  //     }

  //     if (!issueId) {
  //       return NextResponse.json(
  //         { error: { message: "Ticket ID not provided" } },
  //         {
  //           status: 400,
  //         },
  //       );
  //     }

  //     // @todo call the api
  //     const ticket = {};

  //     if (!ticket) {
  //       return NextResponse.json(
  //         { error: { message: "Ticket not found" } },
  //         {
  //           status: 204,
  //         },
  //       );
  //     }

  //     return NextResponse.json("", {
  //       status: 200,
  //     });
  //   } catch (error) {
  //     captureException(error, {
  //       tags: {
  //         controller: "TicketController",
  //         method: "initializeTicket",
  //       },
  //     });
  //     return NextResponse.json(
  //       {
  //         error,
  //       },
  //       {
  //         status: 500,
  //       },
  //     );
  //   }
  // }
}

export { TicketController };
