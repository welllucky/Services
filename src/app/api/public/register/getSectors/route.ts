import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    return SearchController.searchTickets(req);
    }