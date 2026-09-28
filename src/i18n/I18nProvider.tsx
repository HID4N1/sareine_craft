"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import {
  defaultLocale,
  getLocaleFromPathname,
  isLocale,
  isRTL,
  localeMaxAge,
  localeStorageKey,
  stripLocaleFromPathname,
  supportedLocales,
  withLocalePath,
  type Locale,
} from "./config";
import { translate } from "./dictionaries";

type I18nContextValue = {
  locale: Locale;
  direction: "ltr" | "rtl";
  setLanguage: (locale: Locale) => void;
  localizedPath: (href: string, nextLocale?: Locale) => string;
  t: (key: string, variables?: Record<string, string | number>) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

function getStoredLocale() {
  try {
    const item = window.localStorage.getItem(localeStorageKey);

    if (!item) {
      return null;
    }

    const parsed = JSON.parse(item) as { value?: string; expiresAt?: number };

    if (!parsed.expiresAt || parsed.expiresAt < Date.now()) {
      window.localStorage.removeItem(localeStorageKey);
      return null;
    }

    return isLocale(parsed.value) ? parsed.value : null;
  } catch {
    return null;
  }
}

function persistLocale(locale: Locale) {
  const expiresAt = Date.now() + localeMaxAge * 1000;
  window.localStorage.setItem(
    localeStorageKey,
    JSON.stringify({ value: locale, expiresAt }),
  );
}

export function I18nProvider({
  children,
  initialLocale = defaultLocale,
}: {
  children: React.ReactNode;
  initialLocale?: Locale;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const pathLocale = getLocaleFromPathname(pathname);
  const [selectedLocale, setSelectedLocale] = useState<Locale>(
    pathLocale ?? initialLocale,
  );
  const locale = pathLocale ?? selectedLocale;

  useEffect(() => {
    if (pathLocale) {
      return;
    }

    const searchParams = new URLSearchParams(window.location.search);
    const queryLocale = searchParams.get("lang");
    const browserLocale = window.navigator.language.split("-")[0];
    const detectedLocale =
      (isLocale(queryLocale) ? queryLocale : null) ??
      getStoredLocale() ??
      (isLocale(browserLocale) ? browserLocale : null);

    if (detectedLocale && detectedLocale !== locale) {
      router.replace(withLocalePath(pathname, detectedLocale));
    }
  }, [locale, pathname, pathLocale, router]);

  useEffect(() => {
    persistLocale(locale);
    document.documentElement.lang = locale;
    document.documentElement.dir = isRTL(locale) ? "rtl" : "ltr";
    document.documentElement.dataset.locale = locale;
  }, [locale]);

  useEffect(() => {
    const cleanPath = stripLocaleFromPathname(pathname);
    const canonicalPath = withLocalePath(cleanPath, locale);
    const pageUrl = new URL(canonicalPath, window.location.origin).toString();
    const description = translate(locale, "meta.description");
    const title = translate(locale, "meta.title");

    document.title = title;

    const metaDescription =
      document.querySelector<HTMLMetaElement>('meta[name="description"]') ??
      document.head.appendChild(document.createElement("meta"));
    metaDescription.name = "description";
    metaDescription.content = description;

    const metaKeywords =
      document.querySelector<HTMLMetaElement>('meta[name="keywords"]') ??
      document.head.appendChild(document.createElement("meta"));
    metaKeywords.name = "keywords";
    metaKeywords.content = translate(locale, "meta.keywords");

    const managedSelector = 'link[data-i18n-managed], meta[data-i18n-managed]';
    document.querySelectorAll(managedSelector).forEach((element) => {
      element.remove();
    });

    supportedLocales.forEach((alternateLocale) => {
      const link = document.createElement("link");
      link.rel = "alternate";
      link.hreflang = alternateLocale;
      link.href = new URL(
        withLocalePath(cleanPath, alternateLocale),
        window.location.origin,
      ).toString();
      link.dataset.i18nManaged = "true";
      document.head.appendChild(link);
    });

    const xDefault = document.createElement("link");
    xDefault.rel = "alternate";
    xDefault.hreflang = "x-default";
    xDefault.href = new URL(withLocalePath(cleanPath, defaultLocale), window.location.origin).toString();
    xDefault.dataset.i18nManaged = "true";
    document.head.appendChild(xDefault);

    const canonical = document.createElement("link");
    canonical.rel = "canonical";
    canonical.href = pageUrl;
    canonical.dataset.i18nManaged = "true";
    document.head.appendChild(canonical);

    [
      ["property", "og:locale", locale === "fr" ? "fr_MA" : locale === "ar" ? "ar_MA" : "en_US"],
      ["property", "og:title", title],
      ["property", "og:description", description],
      ["property", "og:url", pageUrl],
    ].forEach(([attribute, name, content]) => {
      const meta = document.createElement("meta");
      meta.setAttribute(attribute, name);
      meta.content = content;
      meta.dataset.i18nManaged = "true";
      document.head.appendChild(meta);
    });
  }, [locale, pathname]);

  const value = useMemo<I18nContextValue>(() => {
    function localizedPath(href: string, nextLocale = locale) {
      if (/^(https?:|mailto:|tel:|#)/.test(href)) {
        return href;
      }

      return withLocalePath(href, nextLocale);
    }

    function setLanguage(nextLocale: Locale) {
      setSelectedLocale(nextLocale);
      persistLocale(nextLocale);
      router.push(withLocalePath(pathname, nextLocale));
    }

    return {
      locale,
      direction: isRTL(locale) ? "rtl" : "ltr",
      setLanguage,
      localizedPath,
      t: (key, variables) => translate(locale, key, variables),
    };
  }, [locale, pathname, router]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }

  return context;
}
