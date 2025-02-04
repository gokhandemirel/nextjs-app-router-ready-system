import { NextRequest, NextResponse } from 'next/server';
import { routing } from '@/i18n/routing';
import createMiddleware from 'next-intl/middleware';
import { LOGIN_REDIRECT, PUBLIC_ROUTES } from '@/auth/routes';
import { cookies } from 'next/headers';

const handleI18nRouting = createMiddleware(routing);

export default async function middleware(request: NextRequest) {
  const i18nRouting = handleI18nRouting(request);
  const locale = i18nRouting.headers.get('x-middleware-request-x-next-intl-locale');
  const isLoggedIn = (await cookies()).get('next-auth-token')?.value ? true : false;
  const publicPathnameRegex = RegExp(
    `^(/(${routing.locales.join('|')}))?(${PUBLIC_ROUTES.flatMap((p) => (p === '/' ? ['', '/'] : p)).join('|')})/?$`,
    'i'
  );
  const isPublicPage = publicPathnameRegex.test(request.nextUrl.pathname);

  if (!isPublicPage && !isLoggedIn) {
    const response = NextResponse.redirect(
      new URL(`/${locale}/${LOGIN_REDIRECT}?callbackUrl=${request.nextUrl}`, request.nextUrl)
    );

    response.cookies.set('next-auth-callback-url', request.nextUrl?.toString());

    return response;
  }

  return i18nRouting;
}

export const config = {
  matcher: ['/', '/(tr|en)/:path*', '/((?!api|backend-api|_next|.*\\..*).*)']
};
