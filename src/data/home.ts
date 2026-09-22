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

export type HomeServiceCard = {
  id: "events" | "decoration" | "craft" | "complete";
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  image: {
    src: string;
    alt: string;
    position: string;
  };
  variant: "small" | "wide" | "feature";
};

export type HomeServiceValue = {
  icon: "spark" | "guide" | "memory";
  title: string;
  description: string;
};

export type HomeServicesData = {
  eyebrow: string;
  title: string;
  description: string;
  cta: {
    label: string;
    href: string;
  };
  cards: HomeServiceCard[];
  values: HomeServiceValue[];
};

export type HomeEventCategory = {
  title: string;
  href: string;
  image: {
    src: string;
    alt: string;
    position: string;
  };
};

export type HomeEventCategoriesData = {
  eyebrow: string;
  title: string;
  cta: {
    label: string;
    href: string;
  };
  categories: HomeEventCategory[];
};

export type HomeProcessStep = {
  number: string;
  title: string;
  icon: "idea" | "concept" | "venue" | "decoration" | "logistics" | "celebration";
};

export type HomeProcessData = {
  eyebrow: string;
  title: string;
  description: string;
  cta: {
    label: string;
    href: string;
  };
  note: string;
  steps: HomeProcessStep[];
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

export const homeServices: HomeServicesData = {
  eyebrow: "NOTRE SAVOIR-FAIRE",
  title: "Bien plus qu’une décoration.",
  description: "",
  cta: {
    label: "Découvrir nos services",
    href: "/events",
  },
  cards: [
    {
      id: "events",
      eyebrow: "ÉVÉNEMENTS",
      title: "Organisation\nd’événements",
      description: "Des moments pensés autour de vous.",
      href: "/events",
      image: {
        src: "/images/home/services/events-organisation.png",
        alt: "Décor de célébration chaleureux avec ballons, fleurs et table de desserts.",
        position: "center",
      },
      variant: "small",
    },
    {
      id: "decoration",
      eyebrow: "DÉCORATION",
      title: "Décoration\n& mise en scène",
      description: "Chaque détail participe à l’histoire.",
      href: "/events",
      image: {
        src: "/images/home/services/decoration-table.png",
        alt: "Table de réception élégante avec fleurs, bougies et vaisselle raffinée.",
        position: "58% center",
      },
      variant: "small",
    },
    {
      id: "craft",
      eyebrow: "CRÉATIONS ARTISANALES",
      title: "Créations\nartisanales",
      description: "Des pièces uniques créées avec intention.",
      href: "/craft",
      image: {
        src: "/images/home/services/artisanal-creations.png",
        alt: "Bougies artisanales, fleurs et paquets cadeaux arrangés sur une table d’atelier.",
        position: "center",
      },
      variant: "wide",
    },
    {
      id: "complete",
      eyebrow: "SERVICE COMPLET",
      title: "Organisation\nde A à Z",
      description:
        "Lieu, buffet, matériel,\ndécoration, coordination…\nnous pouvons tout prendre\nen charge.",
      href: "/contact",
      image: {
        src: "/images/home/services/organisation-a-z.png",
        alt: "Réception extérieure élégante au coucher du soleil avec arche fleurie et table aux chandelles.",
        position: "62% center",
      },
      variant: "feature",
    },
  ],
  values: [
    {
      icon: "spark",
      title: "CRÉATIONS AUTHENTIQUES",
      description: "Faites à la main avec passion",
    },
    {
      icon: "guide",
      title: "ACCOMPAGNEMENT PERSONNALISÉ",
      description: "À chaque étape, à vos côtés",
    },
    {
      icon: "memory",
      title: "DES MOMENTS INOUBLIABLES",
      description: "Qui restent gravés",
    },
  ],
};

export const homeEventCategories: HomeEventCategoriesData = {
  eyebrow: "À CHAQUE MOMENT SON UNIVERS",
  title: "Des événements qui vous ressemblent.",
  cta: {
    label: "Découvrir nos événements",
    href: "/events",
  },
  categories: [
    {
      title: "Anniversaire",
      href: "/events",
      image: {
        src: "/images/home/events/anniversaire.png",
        alt: "Décor d’anniversaire élégant avec gâteau fleuri, bougies et lumière chaleureuse.",
        position: "50% 50%",
      },
    },
    {
      title: "Baby Shower",
      href: "/events",
      image: {
        src: "/images/home/events/baby-shower.png",
        alt: "Décoration baby shower premium avec ours en peluche, ballons blush et fleurs.",
        position: "50% 50%",
      },
    },
    {
      title: "Graduation",
      href: "/events",
      image: {
        src: "/images/home/events/graduation.png",
        alt: "Mise en scène de graduation avec toque, diplôme, bougies et détails dorés.",
        position: "50% 50%",
      },
    },
    {
      title: "Naissance",
      href: "/events",
      image: {
        src: "/images/home/events/baby-shower.png",
        alt: "Décoration de naissance douce avec ballons blush, fleurs et détails tendres.",
        position: "50% 50%",
      },
    },
    {
      title: "Célébration privée",
      href: "/events",
      image: {
        src: "/images/home/events/celebration-privee.png",
        alt: "Longue table de réception privée avec bougies, fleurs et lumière dorée.",
        position: "48% 50%",
      },
    },
  ],
};

export const homeProcess: HomeProcessData = {
  eyebrow: "DE A À Z",
  title: "Une idée suffit.\nOn s’occupe du reste.",
  description:
    "Vous nous partagez votre envie. Sareine imagine, organise et coordonne chaque détail — du lieu à la décoration, en passant par le buffet, le matériel et la logistique.",
  cta: {
    label: "Confier mon événement",
    href: "/contact",
  },
  note: "Sérénité\nà chaque étape.",
  steps: [
    {
      number: "01",
      title: "Votre idée",
      icon: "idea",
    },
    {
      number: "02",
      title: "Le concept",
      icon: "concept",
    },
    {
      number: "03",
      title: "Le lieu",
      icon: "venue",
    },
    {
      number: "04",
      title: "La décoration",
      icon: "decoration",
    },
    {
      number: "05",
      title: "Buffet & logistique",
      icon: "logistics",
    },
    {
      number: "06",
      title: "Le grand jour",
      icon: "celebration",
    },
  ],
};
export type HomeCraftHighlightData = {
  eyebrow: string;
  title: string;
  description: string;
  cta: {
    label: string;
    href: string;
  };
  images: {
    main: {
      src: string;
      alt: string;
    };
    secondary: {
      src: string;
      alt: string;
    };
    detail: {
      src: string;
      alt: string;
    };
  };
  note: string;
};

export const homeCraftHighlight: HomeCraftHighlightData = {
  eyebrow: "CRÉÉ À LA MAIN",
  title: "Des objets qui font partie du souvenir.",
  description:
    "Bougies artisanales, décorations et créations personnalisées pensées pour offrir, décorer ou compléter vos événements.",
  cta: {
    label: "Découvrir les créations",
    href: "/craft",
  },
  images: {
  main: {
    src: "/images/home/services/artisanal-creations.png",
    alt: "Bougies artisanales décorées de fleurs.",
  },
  secondary: {
    src: "/images/home/services/decoration-table.png",
    alt: "Création artisanale présentée dans un décor élégant.",
  },
  detail: {
    src: "/images/home/services/events-organisation.png",
    alt: "Détail d’une création Sareine.",
  },
},
  note: "Plus qu’un objet, une émotion.",
};
export type HomeRealisationItem = {
  id: string;
  title: string;
  href: string;
  image: {
    src: string;
    alt: string;
  };
};

export type HomeRealisationsData = {
  eyebrow: string;
  title: string;
  cta: {
    label: string;
    href: string;
  };
  items: HomeRealisationItem[];
  testimonial: {
    quote: string;
    author: string;
    rating: number;
    avatar: {
      src: string;
      alt: string;
    };
  };
};

export const homeRealisations: HomeRealisationsData = {
  eyebrow: "NOS RÉALISATIONS",
  title: "Quelques moments signés Sareine.",
  cta: {
    label: "Voir toutes nos réalisations",
    href: "/realisations",
  },
  items: [
    {
      id: "reception-fleurie",
      title: "Réception fleurie",
      href: "/realisations",
      image: {
        src: "/images/home/events/celebration-privee.png",
        alt: "Réception élégante décorée de fleurs.",
      },
    },
    {
      id: "baby-shower",
      title: "Baby shower",
      href: "/realisations",
      image: {
        src: "/images/home/events/baby-shower.png",
        alt: "Décoration de baby shower avec ballons.",
      },
    },
    {
      id: "diner-prive",
      title: "Dîner privé",
      href: "/realisations",
      image: {
        src: "/images/home/services/decoration-table.png",
        alt: "Dîner privé avec table décorée.",
      },
    },
    {
      id: "creation-florale",
      title: "Création florale",
      href: "/realisations",
      image: {
        src: "/images/home/services/artisanal-creations.png",
        alt: "Composition florale artisanale.",
      },
    },
    {
      id: "ceremonie",
      title: "Cérémonie",
      href: "/realisations",
      image: {
        src: "/images/home/services/organisation-a-z.png",
        alt: "Cérémonie extérieure élégante.",
      },
    },
  ],
  testimonial: {
    quote:
      "Tout était exactement comme nous l’avions imaginé — et même mieux.",
    author: "Cliente Sareine Craft",
    rating: 5,
    avatar: {
      src: "/images/home/events/baby-shower.png",
      alt: "Décoration réalisée pour une cliente Sareine.",
    },
  },
};
export type HomeProjectContactData = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  whatsappCta: {
    label: string;
    href: string;
  };
  backgroundImage: {
    src: string;
    alt: string;
  };
};

export const homeProjectContact: HomeProjectContactData = {
  eyebrow: "UN MOMENT À CÉLÉBRER ?",
  title: "Parlons de votre projet.",
  description:
    "Qu’il s’agisse d’une simple idée ou d’un événement complet, Sareine Craft est là pour lui donner vie.",
  primaryCta: {
    label: "Parler de mon projet",
    href: "/contact",
  },
  whatsappCta: {
    label: "WhatsApp",
    href: "https://wa.me/212653712245",
  },
  backgroundImage: {
    src: "/images/home/services/organisation-a-z.png",
    alt: "Décoration élégante d’un événement Sareine.",
  },
};
