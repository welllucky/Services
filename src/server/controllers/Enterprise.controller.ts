import { sectorUrl } from "@/app/api/urls";
import { defaultHeaders } from "@/constraints";
import { captureException } from "@sentry/nextjs";
import { NextResponse } from "next/server";

export class EnterpriseController {
  static async getSectors() {
    try {
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
    } catch (error) {
      captureException(error);
      return NextResponse.json({ error }, { status: 500 });
    }
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
