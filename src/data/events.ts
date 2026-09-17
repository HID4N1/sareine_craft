import type { Event, EventCategory, EventService } from "@/types";
import { eventCategories } from "@/types";

export { eventCategories };
export type { EventCategory, EventService };

export const eventServices: EventService[] = [
  "venue-rental",
  "food",
  "decoration",
  "logistics",
];

export const events: Event[] = [];
