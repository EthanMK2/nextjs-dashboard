import { NextResponse } from "next/server"
import { fetchCustomers } from "@/app/lib/data";

export async function GET() {
  const res = fetchCustomers();
  

  return NextResponse.json(res);
}
