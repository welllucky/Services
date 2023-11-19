import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
	const authHeader = request.headers.get("authorization");
	if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
		return NextResponse.json("Unauthorized", {
			status: 401,
		});
	}

	return (
		NextResponse.json({ success: true }),
		{
			headers: {
				"Content-Type": "application/json",
			},
		}
	);
}
