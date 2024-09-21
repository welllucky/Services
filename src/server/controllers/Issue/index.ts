import { getAuthToken } from "@/server/functions/getAuthToken";
import { IssueServices } from "@/server/services/Issue";
import { NextRequest, NextResponse } from "next/server";

class IssueController {
  static async getAllIssues(req: NextRequest) {
    try {
      const { userToken, isAuthenticated } = await getAuthToken(req);

      if (!isAuthenticated) {
        return NextResponse.json(
          { error: { message: "User not authenticated" } },
          {
            status: 401,
          },
        );
      }

      const issues = await IssueServices.getAllIssues(userToken);

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

  static async getIssueById(req: NextRequest, params: { id: string }) {
    try {
      const issueId = params.id;
      const { userToken, isAuthenticated } = await getAuthToken(req);

      if (!isAuthenticated) {
        return NextResponse.json(
          { error: { message: "User not authenticated" } },
          {
            status: 401,
          },
        );
      }

      const issue = await IssueServices.getIssueById(userToken, issueId);

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

  static async initializeIssue(req: NextRequest, params: { id: string }) {
    try {
      const issueId = params.id;
      const { userToken, isAuthenticated } = await getAuthToken(req);

      if (!isAuthenticated) {
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

      const ticket = await IssueServices.startIssue(userToken, issueId);

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

export { IssueController };
