export type HomeHeroWord = {
  text: string;
  highlight?: boolean;
};

export type HomeHeroLine = {
  words: HomeHeroWord[];
};

export type HomeHeroData = {
  eyebrow: string;
  headline: HomeHeroLine[];
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
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
  microCopy: string;
};

export const homeHero: HomeHeroData = {
  eyebrow: "CRÉATIONS • ÉVÉNEMENTS • CASABLANCA",
  headline: [
    {
      words: [{ text: "Des créations" }],
    },
    {
      words: [
        { text: "qui " },
        { text: "embellissent.", highlight: true },
      ],
    },
    {
      words: [{ text: "Des moments" }],
    },
    {
      words: [
        { text: "qui " },
        { text: "restent.", highlight: true },
      ],
    },
  ],
  description:
    "Bougies artisanales, créations personnalisées et événements imaginés avec soin pour célébrer chaque moment à votre façon.",
  primaryCta: {
    label: "Découvrir nos créations",
    href: "/craft",
  },
  secondaryCta: {
    label: "Explorer nos événements",
    href: "/events",
  },
  images: {
    primary: {
      src: "/images/home/hero/baby-shower-pink.png",
      alt: "Décoration baby shower rose avec ballons, chariot fleuri et ours en peluche.",
    },
    secondary: {
      src: "/images/home/hero/bridal-shower-green.png",
      alt: "Décoration bridal shower vert et or avec ballons, table basse et fleurs.",
    },
  },
  microCopy: "L’ART DE CÉLÉBRER LE QUOTIDIEN",
};
