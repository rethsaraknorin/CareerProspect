// /app/api/auth/login/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // Fake user for testing
  const fakeUser = {
    email: "test@example.com",
    password: "password123",
    name: "Test User",
  };

  if (email === fakeUser.email && password === fakeUser.password) {
    // Generate a fake token
    const fakeToken = "FAKE_TOKEN_123456";

    return NextResponse.json({
      token: fakeToken,
      user: {
        name: fakeUser.name,
        email: fakeUser.email,
      },
    }, { status: 200 });
  } else {
    return NextResponse.json({ message: "Invalid email or password" }, { status: 401 });
  }
}
