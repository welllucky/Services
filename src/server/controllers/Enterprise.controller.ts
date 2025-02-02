import { sectorUrl } from "@/app/api/urls";
import { defaultHeaders } from "@/constraints";
import { NextResponse } from "next/server";

export class EnterpriseController {
  static async getSectors() {
    const res = await fetch(sectorUrl, {
      method: "GET",
      headers: {
        ...defaultHeaders,
      },
    });

    const resBody = await res.json();

    return NextResponse.json(resBody, {
      ...res,
    });
  }

  static async getRolesBySector(sectorId: string) {
    const res = await fetch(`${sectorUrl}/${sectorId}/roles`, {
      method: "GET",
      headers: {
        ...defaultHeaders,
      },
    });

    const resBody = await res.json();

    return NextResponse.json(resBody, {
      ...res,
    });
  }
}
