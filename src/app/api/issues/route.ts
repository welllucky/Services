import { IssueController } from "@/server/controllers/Issue";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  return IssueController.getAllIssues(req);
}

export const runtime = "nodejs";
