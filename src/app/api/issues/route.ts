import { IssueController } from "@/server";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  return IssueController.getAllIssues(req);
}

export const runtime = "nodejs";
