import { NextRequest, NextResponse } from "next/server";
import { issueUrl } from "../url";

export async function GET() {
  try {
    // const { nextUrl } = req;
    // const {} = nextUrl;
    const response = await fetch(issueUrl, {
      next: {
        revalidate: 60 * 3,
        tags: ["ticket"],
      },
    });

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({
      error,
    });
  }
}

export async function POST(req: NextRequest) {
  const { body } = req;
  try {
    const response = await fetch(issueUrl, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
    });

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({
      error,
    });
  }
}
