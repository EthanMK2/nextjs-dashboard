import { NextResponse } from "next/server"

export async function GET() {
  const res = {
    message: "This is data from my API!"
  }

  return NextResponse.json(res);
}
