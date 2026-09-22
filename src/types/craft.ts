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
export type CraftCollection =
  | "gourmandise"
  | "princesse"
  | "silhouette"
  | "ange"
  | "floral";

export type CraftCategoryFilter = "all" | CraftCollection;

export type CraftPageCategory = {
  id: CraftCategoryFilter;
  label: string;
  icon:
    | "all"
    | "cake"
    | "princess"
    | "dress"
    | "angel"
    | "flower";
};

export type CraftCreation = {
  id: string;
  name: string;
  category: CraftCollection;
  image: {
    src: string;
    alt: string;
    position?: string;
  };
};

export type CraftHeroData = {
  eyebrow: string;
  title: string;
  description: string;
  cta: {
    label: string;
    href: string;
  };
  note: string;
  image: {
    src: string;
    alt: string;
    position?: string;
  };
  values: {
    icon: "leaf" | "diamond" | "heart";
    title: string;
  }[];
};

export type CraftStoryValue = {
  icon: "diamond" | "leaf" | "hand" | "heart";
  title: string;
  description: string;
};

export type CraftStoryData = {
  eyebrow: string;
  title: string;
  description: string;
  cta: {
    label: string;
    href: string;
  };
  images: {
    primary: {
      src: string;
      alt: string;
    };
    secondary: {
      src: string;
      alt: string;
    };
  };
  values: CraftStoryValue[];
};

export type CraftPageData = {
  hero: CraftHeroData;
  categories: CraftPageCategory[];
  creations: {
    eyebrow: string;
    title: string;
    description: string;
    items: CraftCreation[];
  };
  story: CraftStoryData;
};