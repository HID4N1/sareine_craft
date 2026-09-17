import type { MediaImage } from "./media";

export const craftCategories = [
  "accessory",
  "decor",
  "gift",
  "custom",
] as const;

export type CraftCategory = (typeof craftCategories)[number];

export interface Craft {
  id: string;
  slug: string;
  name: string;
  category: CraftCategory;
  shortDescription: string;
  description: string;
  images: MediaImage[];
  price: number | null;
  priceLabel: string | null;
  featured: boolean;
  available: boolean;
  customizable: boolean;
}
