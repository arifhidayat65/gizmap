import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { escuelajsApi } from '../../../../services/escuelajs';

export const dynamic = 'force-static';
export const revalidate = false;

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
    
    return NextResponse.json({
      success: true,
      data: { access_token, refresh_token }
    });
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
