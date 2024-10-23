import { IssueController } from "@/server/controllers";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  return IssueController.createIssue(req);
}

export const runtime = "nodejs";
