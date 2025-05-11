// /app/api/auth/register/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, password } = await req.json();

  // Normally you would save to DB, but here just fake success
  return NextResponse.json({
    message: "User registered successfully!",
    user: { name, email },
  }, { status: 201 });
}
