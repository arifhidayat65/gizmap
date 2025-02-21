import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Here you would typically validate credentials against a database
    // For now, we'll use a simple check
    if (email === 'admin@example.com' && password === 'password123') {
      return NextResponse.json({
        access_token: 'dummy_access_token',
        refresh_token: 'dummy_refresh_token'
      });
    }

    // If credentials are invalid
    return NextResponse.json(
      { message: 'Invalid credentials' },
      { status: 401 }
    );

  } catch (error) {
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
