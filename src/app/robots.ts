import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sareinecraft.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/admin",
        "/admin/",
        "/login",
        "/forgot-password",
        "/reset-password",
        "/api/",
      ],
    },
    sitemap: new URL("/sitemap.xml", siteUrl).toString(),
    host: siteUrl,
  };
}
