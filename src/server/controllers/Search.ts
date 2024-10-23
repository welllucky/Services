import { getAuthToken } from "@/server/functions/getAuthToken";
import { SearchServices } from "@/server/services";
import { NextRequest, NextResponse } from "next/server";

export class SearchController {
  static async searchTickets(req: NextRequest) {
    try {
      const searchTerm = req.nextUrl.searchParams.get("searchTerm");

      const { userId, isAuthenticated } = await getAuthToken(req);

      if (!isAuthenticated) {
        return NextResponse.json(
          { error: { message: "User not authenticated" } },
          {
            status: 401,
          },
        );
      }

      if (!searchTerm || searchTerm.length < 3) {
        return NextResponse.json(
          {
            error: {
              message: !searchTerm
                ? "Search term is required"
                : "Search term should be at least 3 characters",
            },
          },
          {
            status: 400,
          },
        );
      }

      const tickets = await SearchServices.searchTickets(userId, searchTerm);

      if (!tickets.length) {
        return NextResponse.json(
          { error: { message: "No tickets found" }, status: 204 },
          {
            status: 200,
          },
        );
      }

      return NextResponse.json(
        { result: tickets },
        {
          status: 200,
        },
      );
    } catch (error) {
      return NextResponse.json({ error });
    }
  }
}
