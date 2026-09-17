import type { MediaImage } from "./media";

export const eventCategories = [
  "graduation-buffet",
  "baby-shower",
  "birthday-party",
  "beach-event",
  "forest-event",
  "house-event",
  "school-event",
] as const;

export type EventCategory = (typeof eventCategories)[number];

export type EventService =
  | "venue-rental"
  | "food"
  | "decoration"
  | "logistics";

export interface Event {
  id: string;
  slug: string;
  name: string;
  category: EventCategory;
  shortDescription: string;
  description: string;
  images: MediaImage[];
  services: EventService[];
  featured: boolean;
}
