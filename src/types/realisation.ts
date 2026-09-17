import type { MediaImage } from "./media";

export type RealisationType = "craft" | "event";

export interface Realisation {
  id: string;
  slug: string;
  title: string;
  type: RealisationType;
  category: string | null;
  shortDescription: string;
  description: string;
  coverImage: MediaImage | null;
  images: MediaImage[];
  featured: boolean;
}
