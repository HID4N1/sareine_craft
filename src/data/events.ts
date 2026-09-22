import type {
  Event,
  EventCategory as EventRecordCategory,
  EventService,
} from "@/types";
import { eventCategories } from "@/types";

export { eventCategories };
export type { EventRecordCategory, EventService };

export type EventCategory = {
  id: string;
  navigationLabel: string;
  eyebrow: string;
  title: string;
  description: string;
  imageAlt: string;
  images: string[];
  ctaLabel: string;
  theme: "light" | "plum" | "soft";
  details: string[];
};

export type EventsPageHero = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  accent: string;
  images: string[];
  imageAlt: string;
};

export type EventServiceStep = {
  number: string;
  title: string;
  description: string;
};

export type EventsServiceSection = {
  eyebrow: string;
  title: string;
  description: string;
  steps: EventServiceStep[];
  capabilities: string[];
};

export type EventsFinalCta = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
};

export const eventServices: EventService[] = [
  "venue-rental",
  "food",
  "decoration",
  "logistics",
];

export const events: Event[] = [];

export const eventsPageHero: EventsPageHero = {
  eyebrow: "Sareine Craft · Événementiel",
  title: "Des instants précieux, imaginés dans les moindres détails",
  description:
    "Sareine Craft conçoit des célébrations personnalisées, de la première idée à l’installation finale, pour donner à chaque moment une atmosphère sensible, cohérente et profondément personnelle.",
  primaryCta: "Imaginer mon événement",
  secondaryCta: "Découvrir nos univers",
  accent: "fait main, avec coeur",
  images: [
    "/images/events/birth/birth-01.webp",
    "/images/events/baby-shower/baby-shower-01.webp",
    "/images/events/private-event/private-event-01.webp",
  ],
  imageAlt:
    "Décorations événementielles Sareine Craft avec compositions florales, tables décorées et détails personnalisés",
};

export const eventPageCategories: EventCategory[] = [
  {
    id: "naissance",
    navigationLabel: "Naissance",
    eyebrow: "01 · Naissance",
    title: "Célébrer une nouvelle histoire",
    description:
      "Des décors délicats et personnalisés pour accueillir un nouveau-né, réunir les proches et créer une atmosphère douce autour de ce premier chapitre.",
    imageAlt:
      "Décoration de naissance personnalisée par Sareine Craft avec détails tendres et mise en scène soignée",
    images: [
      "/images/events/birth/birth-01.webp",
      "/images/events/birth/birth-02.webp",
      "/images/events/birth/birth-03.webp",
      "/images/events/birth/birth-04.webp",
      "/images/events/birth/birth-05.webp",
      "/images/events/birth/birth-06.webp",
      "/images/events/birth/birth-07.webp",
      "/images/events/birth/birth-08.webp",
    ],
    ctaLabel: "Imaginer une célébration de naissance",
    theme: "light",
    details: [
      "Décor personnalisé",
      "Mise en scène de table",
      "Coins souvenirs",
      "Installation complète",
    ],
  },
  {
    id: "baby-shower",
    navigationLabel: "Baby shower",
    eyebrow: "02 · Baby shower",
    title: "Une parenthèse douce avant la rencontre",
    description:
      "Des thèmes délicats, des détails sur mesure et une ambiance accueillante pour célébrer l’attente, entourée des personnes qui comptent.",
    imageAlt:
      "Baby shower Sareine Craft dans une atmosphère douce avec décoration personnalisée",
    images: [
      "/images/events/baby-shower/baby-shower-01.webp",
      "/images/events/baby-shower/baby-shower-02.webp",
    ],
    ctaLabel: "Créer ma baby shower",
    theme: "soft",
    details: [
      "Univers chromatique",
      "Décor photo",
      "Buffet coordonné",
      "Détails invités",
    ],
  },
  {
    id: "anniversaire",
    navigationLabel: "Anniversaire",
    eyebrow: "03 · Anniversaire",
    title: "Chaque âge mérite son propre décor",
    description:
      "Chaque anniversaire est imaginé autour de la personne, du thème, du lieu et de l’atmosphère souhaitée, avec une énergie festive toujours raffinée.",
    imageAlt:
      "Décoration d’anniversaire Sareine Craft avec table thématique et détails festifs",
    images: [
      "/images/events/birthday/birthday-01.webp",
      "/images/events/birthday/birthday-02.webp",
      "/images/events/birthday/birthday-03.webp",
    ],
    ctaLabel: "Préparer mon anniversaire",
    theme: "light",
    details: [
      "Scénographie thématique",
      "Table et buffet",
      "Décor photo",
      "Coordination du jour J",
    ],
  },
  {
    id: "graduation",
    navigationLabel: "Graduation",
    eyebrow: "04 · Graduation",
    title: "Mettre en scène une réussite",
    description:
      "Une étape importante mérite une célébration à sa hauteur, avec une décoration raffinée, des espaces photo et des détails personnalisés pour honorer le chemin parcouru.",
    imageAlt:
      "Décoration de graduation Sareine Craft avec espace photo et détails personnalisés",
    images: [],
    ctaLabel: "Célébrer une réussite",
    theme: "soft",
    details: [
      "Espace photo",
      "Table d’honneur",
      "Marquage personnalisé",
      "Installation sur lieu",
    ],
  },
  {
    id: "celebration-privee",
    navigationLabel: "Célébration privée",
    eyebrow: "05 · Célébration privée",
    title: "Vos moments, selon vos envies",
    description:
      "Dîners intimes, réunions familiales, surprises ou occasions singulières : Sareine Craft compose une expérience sur mesure, élégante et fidèle à votre histoire.",
    imageAlt:
      "Célébration privée Sareine Craft avec décoration élégante et ambiance intimiste",
    images: [
      "/images/events/private-event/private-event-01.webp",
      "/images/events/private-event/private-event-02.webp",
    ],
    ctaLabel: "Parler de mon événement",
    theme: "plum",
    details: [
      "Dîners et réceptions",
      "Surprises privées",
      "Décor sur mesure",
      "Logistique discrète",
    ],
  },
];

export const eventsServiceSection: EventsServiceSection = {
  eyebrow: "De l’idée au dernier détail",
  title: "Vous profitez du moment. Nous orchestrons le reste.",
  description:
    "Selon le projet, Sareine Craft peut accompagner la direction créative, la décoration, les éléments faits main, le stylisme de table, la coordination du buffet, la logistique, la recherche d’un lieu ou d’une maison, puis l’installation finale.",
  steps: [
    {
      number: "01",
      title: "Échange et découverte",
      description:
        "Nous clarifions l’occasion, vos envies, les contraintes du lieu et l’émotion que vous souhaitez transmettre.",
    },
    {
      number: "02",
      title: "Concept et personnalisation",
      description:
        "Nous dessinons une direction visuelle cohérente, des couleurs aux détails faits main.",
    },
    {
      number: "03",
      title: "Préparation et coordination",
      description:
        "Nous organisons les éléments, les prestataires nécessaires et le rythme d’installation.",
    },
    {
      number: "04",
      title: "Installation et célébration",
      description:
        "Nous mettons en place le décor final pour que vous puissiez vivre pleinement le moment.",
    },
  ],
  capabilities: [
    "Direction créative",
    "Décoration",
    "Éléments faits main",
    "Stylisme de table",
    "Coordination food et buffet",
    "Logistique",
    "Recherche de lieu ou maison",
    "Installation finale",
  ],
};

export const eventsFinalCta: EventsFinalCta = {
  eyebrow: "Votre événement commence ici",
  title: "Racontez-nous ce que vous imaginez",
  description:
    "Quelques mots, une date, une envie ou même une idée encore floue : nous vous aidons à la transformer en expérience sensible et mémorable.",
  primaryCta: "Parler de mon projet",
  secondaryCta: "Écrire sur WhatsApp",
};
