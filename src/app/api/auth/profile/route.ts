import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { escuelajsServerApi } from '../../../../services/escuelajs.server';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('access_token')?.value;
    
    if (!token) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Not authenticated' 
        }, 
        { status: 401 }
      );
    }

    const profile = await escuelajsServerApi.getProfile();
    
    return NextResponse.json({
      success: true,
      data: profile
    });
  } catch (error) {
    console.error('Profile fetch error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to fetch profile' 
      }, 
      { status: 500 }
    );
  }
}
