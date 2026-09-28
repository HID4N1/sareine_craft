import { NextRequest, NextResponse } from "next/server";

import {
  defaultLocale,
  detectLocaleFromAcceptLanguage,
  getLocaleFromPathname,
  isLocale,
  localeCookieName,
  localeMaxAge,
  stripLocaleFromPathname,
  withLocalePath,
} from "@/i18n/config";

const PUBLIC_FILE = /\.(.*)$/;
const ignoredPrefixes = [
  "/api",
  "/_next",
  "/admin",
  "/login",
  "/forgot-password",
  "/reset-password",
];

function shouldIgnore(pathname: string) {
  return (
    PUBLIC_FILE.test(pathname) ||
    ignoredPrefixes.some(
      (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
    )
  );
}

function getPreferredLocale(request: NextRequest) {
  const queryLocale = request.nextUrl.searchParams.get("lang");

  if (isLocale(queryLocale)) {
    return queryLocale;
  }

  const cookieLocale = request.cookies.get(localeCookieName)?.value;

  if (isLocale(cookieLocale)) {
    return cookieLocale;
  }

  return detectLocaleFromAcceptLanguage(request.headers.get("accept-language"));
}

function setLocaleCookie(response: NextResponse, locale: string) {
  response.cookies.set(localeCookieName, locale, {
    maxAge: localeMaxAge,
    path: "/",
    sameSite: "lax",
  });
}

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  if (request.headers.get("x-sareine-locale")) {
    return NextResponse.next();
  }

  if (shouldIgnore(pathname)) {
    return NextResponse.next();
  }

  const pathLocale = getLocaleFromPathname(pathname);
  const queryLocale = searchParams.get("lang");

  if (isLocale(queryLocale)) {
    const url = request.nextUrl.clone();
    url.searchParams.delete("lang");
    url.pathname = withLocalePath(stripLocaleFromPathname(pathname), queryLocale);

    const response = NextResponse.redirect(url);
    setLocaleCookie(response, queryLocale);
    return response;
  }

  if (!pathLocale) {
    const locale = getPreferredLocale(request);
    const url = request.nextUrl.clone();
    url.pathname = withLocalePath(pathname, locale);

    const response = NextResponse.redirect(url);
    setLocaleCookie(response, locale);
    return response;
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-sareine-locale", pathLocale);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
  setLocaleCookie(response, pathLocale ?? defaultLocale);
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|brand|images).*)"],
};
