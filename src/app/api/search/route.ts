import { SearchController } from "@/server";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  return SearchController.searchTickets(req);
}

export const runtime = "nodejs";
