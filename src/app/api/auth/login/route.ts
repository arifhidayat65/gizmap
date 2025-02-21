import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { escuelajsApi } from '../../../../services/escuelajs';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Validate required fields
    if (!data.email || !data.password) {
      return NextResponse.json(
        {
          success: false,
          message: 'Email and password are required'
        },
        { status: 400 }
      );
    }

    const { access_token, refresh_token } = await escuelajsApi.login(data);
    
    const response = NextResponse.json({
      success: true,
      data: { access_token, refresh_token }
    });

    // Set the access token as an HTTP-only cookie
    response.cookies.set('access_token', access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/'
    });

    return response;
  } catch (error) {
    console.error('Login error:', error);
    
    return NextResponse.json(
      {
        success: false,
        message: 'Invalid credentials'
      },
      { status: 401 }
    );
  }
}
