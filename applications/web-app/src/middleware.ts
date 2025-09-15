import { NextRequest, NextResponse } from 'next/server';

const AUTH_ROUTES = ['/inloggen', '/registreren'];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isAuthenticated = false;

  if (pathname === '/inloggen' && isAuthenticated) {
    return NextResponse.redirect(new URL('/', request.url), 301);
  }

  if (
    pathname.startsWith('/') &&
    !AUTH_ROUTES.includes(pathname) &&
    !isAuthenticated
  ) {
    return NextResponse.redirect(new URL('/inloggen', request.url), 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
