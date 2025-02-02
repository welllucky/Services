import { searchUrl } from "@/app/api/urls";
import { getAuthToken } from "@/server/functions/getAuthToken";
import { IHttpResponse, TicketDto } from "@/types";
import { defaultHeaders } from "@/constraints";
import { captureException } from "@sentry/nextjs";
import { NextRequest, NextResponse } from "next/server";

export class SearchController {
  static async searchTickets(req: NextRequest) {
    try {
      const searchTerm = req.nextUrl.searchParams.get("searchTerm");

      const { userId, isAuthenticated, accessToken } = await getAuthToken(req);

      if (!isAuthenticated || !userId) {
        return NextResponse.json(
          { error: { message: "User not authenticated" } },
          {
            status: 401,
          },
        );
      }

      const res = await fetch(`${searchUrl}?searchTerm=${searchTerm}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          ...defaultHeaders,
        },
      });

      const resBody = (await res.json()) as IHttpResponse<
        TicketDto,
        { message: string }
      >;

      if (!resBody.data?.id) {
        return NextResponse.json(
          { error: { message: "No tickets found" }, status: 204 },
          {
            status: 200,
          },
        );
      }

      return NextResponse.json(resBody, {
        ...res,
      });
    } catch (error) {
      captureException(error, {
        tags: {
          controller: "SearchController",
          method: "searchTickets",
        },
      });
      return NextResponse.json({ error });
    }
  }
}
