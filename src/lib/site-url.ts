export const defaultSiteUrl = "https://example.com";

export function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!configuredUrl) {
    return defaultSiteUrl;
  }

  try {
    return new URL(configuredUrl).origin;
  } catch {
    return defaultSiteUrl;
  }
}

export function getAbsoluteUrl(pathname: string) {
  return new URL(pathname, getSiteUrl()).toString();
}
