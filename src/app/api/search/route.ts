import { NextRequest } from "next/server";

import { SearchController } from "@/server";

// skipcq: JS-0116
export async function GET(req: NextRequest) {
  return SearchController.searchTickets(req);
}

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
