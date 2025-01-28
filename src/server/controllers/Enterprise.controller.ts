import { sectorUrl } from "@/app/api/urls";
import { NextRequest, NextResponse } from "next/server";

export class EnterpriseController {
  static async getSectors(req: NextRequest) {
    const res = await fetch(sectorUrl, {
      method: "GET",
      headers: req.headers,
    });

    const resBody = await res.json();

    return NextResponse.json(resBody, {
      ...res,
    });
  }

  static async getRolesBySector(req: NextRequest, sectorId: string) {
    const res = await fetch(`${sectorUrl}/${sectorId}/roles`, {
      method: "GET",
      headers: req.headers,
    });

    const resBody = await res.json();

    return NextResponse.json(resBody, {
      ...res,
    });
  }
}
