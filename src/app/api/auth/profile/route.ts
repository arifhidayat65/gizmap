import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { escuelajsApi } from '../../../../services/escuelajs';

export const dynamic = 'force-static';
export const revalidate = false;

export async function GET(request: NextRequest) {
  try {
    const user = await escuelajsApi.getProfile();
    
    return NextResponse.json({
      success: true,
      data: user
    });
  } catch (error) {
    console.error('Profile fetch error:', error);
    
    // Check if the error is due to missing or invalid token
    if (error instanceof Error && error.message === 'No authentication token found') {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Authentication required' 
        },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to fetch profile' 
      },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Validate required fields
    if (!data.name || !data.email) {
      return NextResponse.json(
        {
          success: false,
          message: 'Name and email are required'
        },
        { status: 400 }
      );
    }

    const updatedUser = await escuelajsApi.updateProfile(data);
    
    return NextResponse.json({
      success: true,
      data: updatedUser
    });
  } catch (error) {
    console.error('Profile update error:', error);
    
    if (error instanceof Error && error.message === 'No authentication token found') {
      return NextResponse.json(
        {
          success: false,
          message: 'Authentication required'
        },
        { status: 401 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: 'Failed to update profile'
      },
      { status: 500 }
    );
  }
}
