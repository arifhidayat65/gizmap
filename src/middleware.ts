import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value
  const isAuthPage = request.nextUrl.pathname.startsWith('/(auth)')
  const isDashboardPage = request.nextUrl.pathname.startsWith('/(dashboard)')

  // If trying to access auth page while logged in, redirect to dashboard
  if (isAuthPage && token) {
    return NextResponse.redirect(new URL('/(dashboard)/dashboard', request.url))
  }

  // If trying to access protected route without being logged in, redirect to login
  if (isDashboardPage && !token) {
    return NextResponse.redirect(new URL('/(auth)/login', request.url))
  }

  return NextResponse.next()
}

// Configure the paths that should be handled by this middleware
export const config = {
  matcher: [
    // Match auth routes
    '/(auth)/:path*',
    // Match dashboard routes
    '/(dashboard)/:path*'
  ]
}
