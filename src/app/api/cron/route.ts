import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json(
    { message: "Desburocratizando os processos! ✅" },
    {
      status: 200,
    },
  );
}
