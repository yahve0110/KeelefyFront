import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// List of supported languages
const locales = ['en', 'ru']
const defaultLocale = 'ru'

// Get the preferred locale from request headers or cookie
function getLocale(request: NextRequest) {
  // Check cookie first
  const localeCookie = request.cookies.get('NEXT_LOCALE')
  if (localeCookie?.value && locales.includes(localeCookie.value)) {
    return localeCookie.value
  }

  // Check Accept-Language header
  const acceptLanguage = request.headers.get('accept-language')
  if (acceptLanguage) {
    const preferredLocale = acceptLanguage
      .split(',')[0]
      .split('-')[0]
      .toLowerCase()
    
    if (locales.includes(preferredLocale)) {
      return preferredLocale
    }
  }

  return defaultLocale
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    )
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico).*)',
  ],
}
