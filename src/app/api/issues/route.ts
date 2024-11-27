import { IssueController } from "@/server";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  return IssueController.getAllIssues(req);
}

export async function POST(req: NextRequest) {
  return IssueController.createIssue(req);
}

export const runtime = "nodejs";
