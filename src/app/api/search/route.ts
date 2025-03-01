import { SearchController } from "@/server";
import { NextRequest } from "next/server";

// skipcq: JS-0116
export async function GET(req: NextRequest) {
  return SearchController.searchTickets(req);
}

export const runtime = "nodejs";
