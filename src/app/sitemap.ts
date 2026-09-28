import type { MetadataRoute } from "next";

import { craftCollections } from "@/data";
import { supportedLocales } from "@/i18n/config";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sareinecraft.com";

const publicRoutes = [
  "",
  "/about",
  "/contact",
  "/craft",
  "/events",
  "/privacy",
  "/cookies",
  "/terms",
];

function absoluteUrl(pathname: string) {
  return new URL(pathname, siteUrl).toString();
}

function localizedAlternates(pathname: string) {
  return Object.fromEntries(
    supportedLocales.map((locale) => [
      locale,
      absoluteUrl(`/${locale}${pathname}`),
    ]),
  );
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const collectionRoutes = craftCollections.map(
    (collection) => `/craft/${collection.slug}`,
  );

  return [...publicRoutes, ...collectionRoutes].flatMap((pathname) =>
    supportedLocales.map((locale) => ({
      url: absoluteUrl(`/${locale}${pathname}`),
      lastModified,
      changeFrequency: pathname === "" ? "weekly" : "monthly",
      priority: pathname === "" ? 1 : pathname.startsWith("/craft/") ? 0.7 : 0.8,
      alternates: {
        languages: localizedAlternates(pathname),
      },
    })),
  );
}
