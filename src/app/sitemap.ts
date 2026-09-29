import type { MetadataRoute } from "next";

import { craftCollections } from "@/data";
import { supportedLocales } from "@/i18n/config";
import { getAbsoluteUrl } from "@/lib/site-url";

const publicRoutes = [
  "",
  "/about",
  "/craft",
  "/events",
  "/privacy",
  "/cookies",
  "/terms",
];

function absoluteUrl(pathname: string) {
  return getAbsoluteUrl(pathname);
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
