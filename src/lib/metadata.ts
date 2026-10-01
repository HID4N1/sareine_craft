import type { Metadata } from "next";

import {
  defaultLocale,
  ogLocales,
  supportedLocales,
  withLocalePath,
  type Locale,
} from "@/i18n/config";
import { getAbsoluteUrl } from "@/lib/site-url";

export const siteName = "Sareine Craft & Events";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  locale?: Locale;
  image?: {
    url: string;
    alt: string;
  };
  keywords?: string[];
  noIndex?: boolean;
};

function getLocalizedPath(path: string, locale: Locale) {
  return withLocalePath(path, locale);
}

function getLocalizedUrl(path: string, locale: Locale) {
  return getAbsoluteUrl(getLocalizedPath(path, locale));
}

function getAlternates(path: string, canonical: string) {
  return {
    canonical,
    languages: Object.fromEntries([
      ...supportedLocales.map((locale) => [
        locale,
        getLocalizedUrl(path, locale),
      ]),
      ["x-default", getLocalizedUrl(path, defaultLocale)],
    ]),
  };
}

function getAlternateOgLocales(locale: Locale) {
  return supportedLocales
    .filter((alternateLocale) => alternateLocale !== locale)
    .map((alternateLocale) => ogLocales[alternateLocale]);
}

export function buildPageMetadata({
  description,
  image,
  keywords,
  locale = defaultLocale,
  noIndex = false,
  path,
  title,
}: PageMetadataInput): Metadata {
  const canonical = getLocalizedUrl(path, locale);
  const images = image
    ? [
        {
          url: image.url,
          alt: image.alt,
        },
      ]
    : undefined;

  return {
    title,
    description,
    keywords,
    alternates: getAlternates(path, canonical),
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      locale: ogLocales[locale],
      alternateLocale: getAlternateOgLocales(locale),
      siteName,
      images,
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title,
      description,
      images: image ? [image.url] : undefined,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          googleBot: {
            index: false,
            follow: false,
          },
        }
      : undefined,
  };
}
