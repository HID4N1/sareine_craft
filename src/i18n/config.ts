export const defaultLocale = "fr" as const;

export const supportedLocales = ["fr", "en", "ar"] as const;

export type Locale = (typeof supportedLocales)[number];

export const rtlLocales: Locale[] = ["ar"];

export const localeCookieName = "NEXT_LOCALE";
export const localeStorageKey = "sareine.locale";
export const localeMaxAge = 60 * 60 * 24 * 365;

export const localeLabels: Record<Locale, { short: string; flag: string }> = {
  fr: {
    short: "FR",
    flag: "🇫🇷",
  },
  en: {
    short: "EN",
    flag: "🇬🇧",
  },
  ar: {
    short: "AR",
    flag: "🇲🇦",
  },
};

export const ogLocales: Record<Locale, string> = {
  fr: "fr_MA",
  en: "en_US",
  ar: "ar_MA",
};

export function isLocale(value: string | undefined | null): value is Locale {
  return supportedLocales.includes(value as Locale);
}

export function isRTL(locale: Locale) {
  return rtlLocales.includes(locale);
}

export function getLocaleFromPathname(pathname: string): Locale | null {
  const segment = pathname.split("/").filter(Boolean)[0];
  return isLocale(segment) ? segment : null;
}

export function stripLocaleFromPathname(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);

  if (isLocale(segments[0])) {
    segments.shift();
  }

  return `/${segments.join("/")}`.replace(/\/$/, "") || "/";
}

export function withLocalePath(pathname: string, locale: Locale) {
  const cleanPath = stripLocaleFromPathname(pathname);
  return cleanPath === "/" ? `/${locale}` : `/${locale}${cleanPath}`;
}

export function detectLocaleFromAcceptLanguage(header: string | null) {
  if (!header) {
    return defaultLocale;
  }

  const accepted = header
    .split(",")
    .map((part) => part.trim().split(";")[0]?.toLowerCase())
    .filter(Boolean);

  for (const value of accepted) {
    const base = value.split("-")[0];

    if (isLocale(base)) {
      return base;
    }
  }

  return defaultLocale;
}
