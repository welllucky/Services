import { userUrl } from "@/app/api/urls";
import { CreateAccountDto } from "@/types";
import { NextRequest, NextResponse } from "next/server";
import { getFormattedBody } from "../functions/getFormattedBody";

export class AccountController {
  static async create(req: NextRequest) {
    try {
      const { headers } = req;
      const data = await getFormattedBody<CreateAccountDto>(req);

      const res = await fetch(userUrl, {
        method: "POST",
        headers,
        body: JSON.stringify(data),
      });

      const resBody = await res.json();

      return NextResponse.json(resBody, {
        status: res.status,
        headers: res.headers,
      });
    } catch (error) {
      return NextResponse.json({ error }, { status: 500 });
    }
  }
}
