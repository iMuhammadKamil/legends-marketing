import { NextResponse } from "next/server";
import type { Lead } from "@/types/lead";

export async function POST(request: Request) {
  try {
    const lead = (await request.json()) as Lead;
    // Lead capture endpoint - CRM integration will be added in a later phase.
    console.log("New lead received:", lead);
    return NextResponse.json(
      { success: true, message: "Lead received" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request" },
      { status: 400 }
    );
  }
}
