import { removeSessionCookie } from "@/lib/actions/auth.action";
import { NextResponse } from "next/server";

export async function POST() {
  await removeSessionCookie();
  return NextResponse.json({ success: true });
}
