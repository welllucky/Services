import { ticketUrl } from "@/app/api/urls";
import { defaultHeaders } from "@/constraints";
import { appMonitoringServer } from "@/implementations/server";
import { getAuthToken } from "@/server/functions/getAuthToken";
import { IHttpResponse, TicketDto } from "@/types";
import { NextRequest, NextResponse } from "next/server";

const SearchController = {
  async searchTickets(req: NextRequest) {
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

      const res = await fetch(`${ticketUrl}/search?term=${searchTerm}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          ...defaultHeaders,
        },
      });

      if (res.status === 204) {
        return new NextResponse(undefined, { status: 204 });
      }

      const resBody = (await res.json()) as IHttpResponse<
        TicketDto,
        { message: string }
      >;

      return NextResponse.json(resBody, {
        ...res,
        status: res.status,
      });
    } catch (error) {
      appMonitoringServer.captureException(error, {
        tags: {
          controller: "SearchController",
          method: "searchTickets",
        },
      });

      return NextResponse.json(
        { error },
        {
          status: 500,
        },
      );
    }
  },
};

export { SearchController };
