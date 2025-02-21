import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    const response = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { message: data.message || 'Authentication failed' },
        { status: response.status }
      );
    }

    // Create response with data
    const jsonResponse = NextResponse.json({
      success: true,
      data: {
        access_token: data.access_token,
        refresh_token: data.refresh_token,
      },
    });

    // Set cookies in the response
    jsonResponse.cookies.set('access_token', data.access_token, {
      path: '/',
      maxAge: 86400, // 24 hours
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
    });

    jsonResponse.cookies.set('refresh_token', data.refresh_token, {
      path: '/',
      maxAge: 604800, // 7 days
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
    });

    return jsonResponse;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
