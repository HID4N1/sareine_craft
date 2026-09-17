export type SocialPlatform = "instagram" | "facebook" | "tiktok";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  url: string | null;
}
