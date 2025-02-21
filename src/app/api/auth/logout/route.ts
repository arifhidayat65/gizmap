import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const dynamic = 'force-static';
export const revalidate = false;

export async function POST(request: NextRequest) {
  try {
    // Since we're doing static export, we'll just return success
    // The actual logout handling (clearing tokens etc) will be done client-side
    return NextResponse.json({
      success: true,
      message: 'Logged out successfully'
    });
  } catch (error) {
    console.error('Logout error:', error);
    
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to logout'
      },
      { status: 500 }
    );
  }
}
