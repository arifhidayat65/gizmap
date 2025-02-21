import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('access_token')?.value
  const isLoginPage = request.nextUrl.pathname === '/login'
  const isDashboardPage = request.nextUrl.pathname.startsWith('/dashboard')
  const isHomePage = request.nextUrl.pathname === '/'

  // If user is logged in and tries to access login page, redirect to dashboard
  if (isLoginPage && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  // If user is logged in and tries to access home page, redirect to dashboard
  if (isHomePage && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  // If user is not logged in and tries to access dashboard, redirect to login
  if (isDashboardPage && !token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Allow access to all other routes regardless of auth state
  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/login', '/dashboard/:path*']
}
