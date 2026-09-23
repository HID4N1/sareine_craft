import type { CraftCollectionData } from "@/types/craft";

export const craftCollections: CraftCollectionData[] = [
    {
        slug: "bougies-gourmandes",
        eyebrow: "COLLECTION ARTISANALE",
        name: "Bougies gourmandes",
        title: "Des douceurs qui ne fondent que pour vous.",
        shortDescription:
            "Petits cakes colorés et créations d’anniversaire réalisées à la main.",
        description:
            "Une collection joyeuse inspirée de la pâtisserie, personnalisable selon votre événement et vos couleurs.",
        cover: {
            src: "/images/craft/creations/IMG_4367.jpg",
            alt: "Collection de quatre bougies gourmandes colorées.",
        },
        items: [
            {
                id: "cake-fleuri",
                name: "Cake fleuri",
                description: "Bougie gourmande rose décorée de fleurs.",
                image: {
                    src: "/images/craft/collections/Cakes/Cakes_01.png",
                    alt: "Cake fleuri artisanal.",
                },
            },
            {
                id: "cake-fruits-rouges",
                name: "Cake aux fruits rouges",
                description: "Bougie gourmande décorée de fruits rouges.",
                image: {
                    src: "/images/craft/collections/Cakes/Cakes_02.png",
                    alt: "Cake artisanal aux fruits rouges.",
                },
            },
            {
                id: "cake-confettis",
                name: "Cake confettis",
                description: "Bougie festive décorée de confettis colorés.",
                image: {
                    src: "/images/craft/collections/Cakes/Cakes_04.png",
                    alt: "Cake artisanal décoré de confettis.",
                },
            },
            {
                id: "cake-fraise",
                name: "Cake à la fraise",
                description: "Bougie gourmande aux détails fruités.",
                image: {
                    src: "/images/craft/collections/Cakes/Cakes_03.png",
                    alt: "Cake artisanal à la fraise.",
                },
            },
            {
                id: "gateau-anniversaire",
                name: "Gâteau d’anniversaire",
                description: "Une création personnalisable pour célébrer votre journée.",
                image: {
                    src: "/images/craft/creations/IMG_4368.jpg",
                    alt: "Bougie gâteau d’anniversaire.",
                },
            },
        ],
    },

    {
        slug: "princesses",
        eyebrow: "COLLECTION CONTE DE FÉES",
        name: "Princesses",
        title: "Des princesses façonnées avec délicatesse.",
        shortDescription:
            "Six modèles romantiques disponibles en rose poudré et en ivoire.",
        description:
            "Chaque princesse est coulée et terminée à la main. Choisissez votre modèle puis sa couleur rose poudré ou ivoire.",
        cover: {
            src: "/images/craft/creations/IMG_6446.jpg",
            alt: "Collection de princesses artisanales roses.",
        },
        items: [
            {
                id: "princesse-douce",
                name: "Princesse douce",
                description: "Une princesse délicate à la longue tresse.",
                image: {
                    src: "/images/craft/collections/Figurines_roses/Princesse_douce_rose.png",
                    alt: "Princesse douce rose poudré.",
                },
                colors: [
                    {
                        id: "rose",
                        label: "Rose poudré",
                        hex: "#e7a6a5",
                        image: {
                            src: "/images/craft/collections/Figurines_roses/Princesse_douce_rose.png",
                            alt: "Princesse douce rose poudré.",
                        },
                    },
                    {
                        id: "ivoire",
                        label: "Ivoire",
                        hex: "#eee2c9",
                        image: {
                            src: "/images/craft/collections/Figurines_ivoire/Princesse_douce_ivoire.png",
                            alt: "Princesse douce ivoire.",
                        },
                    },
                ],
            },
            {
                id: "princesse-romantique",
                name: "Princesse romantique",
                description: "Une princesse aux longs cheveux et à la robe élégante.",
                image: {
                    src: "/images/craft/collections/Figurines_roses/Figurines_roses_02.png",
                    alt: "Princesse romantique rose poudré.",
                },
                colors: [
                    {
                        id: "rose",
                        label: "Rose poudré",
                        hex: "#e7a6a5",
                        image: {
                            src: "/images/craft/collections/Figurines_roses/Figurines_roses_02.png",
                            alt: "Princesse romantique rose poudré.",
                        },
                    },
                    {
                        id: "ivoire",
                        label: "Ivoire",
                        hex: "#eee2c9",
                        image: {
                            src: "/images/craft/collections/Figurines_ivoire/Figurines_ivoire_06.png",
                            alt: "Princesse romantique ivoire.",
                        },
                    },
                ],
            },
            {
                id: "princesse-au-noeud",
                name: "Princesse au nœud",
                description: "Une princesse élégante coiffée d’un joli nœud.",
                image: {
                    src: "/images/craft/collections/Figurines_roses/Figurines_roses_03.png",
                    alt: "Princesse au nœud rose poudré.",
                },
                colors: [
                    {
                        id: "rose",
                        label: "Rose poudré",
                        hex: "#e7a6a5",
                        image: {
                            src: "/images/craft/collections/Figurines_roses/Figurines_roses_03.png",
                            alt: "Princesse au nœud rose poudré.",
                        },
                    },
                    {
                        id: "ivoire",
                        label: "Ivoire",
                        hex: "#eee2c9",
                        image: {
                            src: "/images/craft/collections/Figurines_ivoire/Figurines_ivoire_01.png",
                            alt: "Princesse au nœud ivoire.",
                        },
                    },
                ],
            },
            {
                id: "princesse-de-ceremonie",
                name: "Princesse de cérémonie",
                description: "Une création raffinée avec une robe à plusieurs niveaux.",
                image: {
                    src: "/images/craft/collections/Figurines_roses/Figurines_roses_04.png",
                    alt: "Princesse de cérémonie rose poudré.",
                },
                colors: [
                    {
                        id: "rose",
                        label: "Rose poudré",
                        hex: "#e7a6a5",
                        image: {
                            src: "/images/craft/collections/Figurines_roses/Figurines_roses_04.png",
                            alt: "Princesse de cérémonie rose poudré.",
                        },
                    },
                    {
                        id: "ivoire",
                        label: "Ivoire",
                        hex: "#eee2c9",
                        image: {
                            src: "/images/craft/collections/Figurines_ivoire/Figurines_ivoire_04.png",
                            alt: "Princesse de cérémonie ivoire.",
                        },
                    },
                ],
            },
            {
                id: "princesse-reveuse",
                name: "Princesse rêveuse",
                description: "Une petite princesse au style tendre et poétique.",
                image: {
                    src: "/images/craft/collections/Figurines_roses/Figurines_roses_05.png",
                    alt: "Princesse rêveuse rose poudré.",
                },
                colors: [
                    {
                        id: "rose",
                        label: "Rose poudré",
                        hex: "#e7a6a5",
                        image: {
                            src: "/images/craft/collections/Figurines_roses/Figurines_roses_05.png",
                            alt: "Princesse rêveuse rose poudré.",
                        },
                    },
                    {
                        id: "ivoire",
                        label: "Ivoire",
                        hex: "#eee2c9",
                        image: {
                            src: "/images/craft/collections/Figurines_ivoire/Figurines_ivoire_03.png",
                            alt: "Princesse rêveuse ivoire.",
                        },
                    },
                ],
            },
            {
                id: "princesse-royale",
                name: "Princesse royale",
                description: "Une princesse à la robe majestueuse finement sculptée.",
                image: {
                    src: "/images/craft/collections/Figurines_roses/Figurines_roses_06.png",
                    alt: "Princesse royale rose poudré.",
                },
                colors: [
                    {
                        id: "rose",
                        label: "Rose poudré",
                        hex: "#e7a6a5",
                        image: {
                            src: "/images/craft/collections/Figurines_roses/Figurines_roses_06.png",
                            alt: "Princesse royale rose poudré.",
                        },
                    },
                    {
                        id: "ivoire",
                        label: "Ivoire",
                        hex: "#eee2c9",
                        image: {
                            src: "/images/craft/collections/Figurines_ivoire/Figurines_ivoire_02.png",
                            alt: "Princesse royale ivoire.",
                        },
                    },
                ],
            },
        ],
    },

    {
        slug: "silhouettes-robes",
        eyebrow: "COLLECTION ÉLÉGANCE",
        name: "Silhouettes & robes",
        title: "L’élégance sculptée dans les moindres détails.",
        shortDescription:
            "Des robes et silhouettes décoratives au style raffiné.",
        description:
            "Une collection inspirée de la couture et des grandes occasions, pensée pour décorer ou offrir.",
        cover: {
            src: "/images/craft/creations/IMG_6479.jpg",
            alt: "Collection de bougies en forme de robes.",
        },
        items: [
            {
                id: "robe-plissee",
                name: "Robe plissée",
                description: "Une robe élégante aux plis délicatement sculptés.",
                image: {
                    src: "/images/craft/creations/IMG_6466.jpg",
                    alt: "Bougie robe plissée.",
                },
            },
            {
                id: "silhouette-couture",
                name: "Silhouette couture",
                description: "Une silhouette fine inspirée de la haute couture.",
                image: {
                    src: "/images/craft/creations/IMG_6468.jpg",
                    alt: "Bougie silhouette couture.",
                },
            },
            {
                id: "robe-ceremonie",
                name: "Robe de cérémonie",
                description: "Une création raffinée pour les moments d’exception.",
                image: {
                    src: "/images/craft/creations/IMG_6469.jpg",
                    alt: "Bougie robe de cérémonie.",
                },
            },
            {
                id: "robe-signature",
                name: "Robe signature",
                description: "Le modèle signature de la collection Sareine.",
                image: {
                    src: "/images/craft/creations/IMG_6480.jpg",
                    alt: "Bougie robe signature.",
                },
            },
        ],
    },

    {
        slug: "oursons-decoratifs",
        eyebrow: "COLLECTION DOUCEUR",
        name: "Oursons décoratifs",
        title: "Une collection pleine de tendresse.",
        shortDescription:
            "Un ourson fleuri disponible en blanc, crème et caramel.",
        description:
            "Cet ourson fait main accompagne les baby showers, anniversaires et cadeaux personnalisés. Choisissez la couleur qui correspond à votre univers.",
        cover: {
            src: "/images/craft/creations/IMG_6462.jpg",
            alt: "Collection de trois oursons décoratifs.",
        },
        items: [
            {
                id: "ourson-fleuri",
                name: "Ourson fleuri",
                description:
                    "Un ourson décoratif avec un cœur, disponible en trois couleurs.",
                image: {
                    src: "/images/craft/collections/Oursons/Ourson_creme.png",
                    alt: "Ourson fleuri couleur crème.",
                },
                colors: [
                    {
                        id: "creme",
                        label: "Crème",
                        hex: "#d9ad7c",
                        image: {
                            src: "/images/craft/collections/Oursons/Ourson_creme.png",
                            alt: "Ourson fleuri couleur crème.",
                        },
                    },
                    {
                        id: "blanc",
                        label: "Blanc ivoire",
                        hex: "#f4ead8",
                        image: {
                            src: "/images/craft/collections/Oursons/Ourson_blanc.png",
                            alt: "Ourson fleuri blanc ivoire.",
                        },
                    },
                    {
                        id: "caramel",
                        label: "Caramel",
                        hex: "#b97948",
                        image: {
                            src: "/images/craft/collections/Oursons/Ourson_caramel.png",
                            alt: "Ourson fleuri couleur caramel.",
                        },
                    },
                ],
            },
        ],
    },

    {
        slug: "ourson-bleu",
        eyebrow: "COLLECTION NAISSANCE",
        name: "Ourson bleu",
        title: "Le petit compagnon des moments précieux.",
        shortDescription:
            "Un ourson bleu présenté dans sa propre collection.",
        description:
            "Une création douce pensée pour les naissances, baby showers et cadeaux personnalisés.",
        cover: {
            src: "/images/craft/creations/IMG_4580.jpg",
            alt: "Bougie artisanale en forme d’ourson bleu.",
        },
        items: [
            {
                id: "ourson-bleu-signature",
                name: "Ourson bleu signature",
                description: "Ourson bleu façonné et terminé à la main.",
                image: {
                    src: "/images/craft/creations/IMG_4580.jpg",
                    alt: "Ourson bleu signature.",
                },
            },
        ],
    },

    {
        slug: "anges",
        eyebrow: "COLLECTION CÉLESTE",
        name: "Anges",
        title: "Des créations pleines de douceur et de lumière.",
        shortDescription:
            "Une collection d’anges artisanaux aux détails délicats.",
        description:
            "Chaque ange est imaginé pour offrir une présence douce et symbolique à vos événements et cadeaux.",
        cover: {
            src: "/images/craft/creations/IMG_6473.jpg",
            alt: "Collection de bougies artisanales en forme d’anges.",
        },
        items: [
            {
                id: "ange-endormi",
                name: "Ange endormi",
                description: "Un ange délicatement posé dans une position paisible.",
                image: {
                    src: "/images/craft/creations/IMG_6471.jpg",
                    alt: "Bougie ange endormi.",
                },
            },
            {
                id: "ange-reveur",
                name: "Ange rêveur",
                description: "Une création douce aux ailes finement sculptées.",
                image: {
                    src: "/images/craft/creations/IMG_6472.jpg",
                    alt: "Bougie ange rêveur.",
                },
            },
            {
                id: "petit-ange",
                name: "Petit ange",
                description: "Un petit ange assis façonné à la main.",
                image: {
                    src: "/images/craft/creations/IMG_6475.jpg",
                    alt: "Petite bougie ange.",
                },
            },
            {
                id: "duo-anges",
                name: "Duo d’anges",
                description: "Deux anges réunis pour une composition harmonieuse.",
                image: {
                    src: "/images/craft/creations/IMG_6474.jpg",
                    alt: "Duo de bougies anges.",
                },
            },
        ],
    },

    {
        slug: "fleurs-sculptees",
        eyebrow: "COLLECTION FLORALE",
        name: "Fleurs sculptées",
        title: "Des fleurs qui gardent leur beauté.",
        shortDescription:
            "Une fleur artisanale proposée dans six nuances délicates.",
        description:
            "Choisissez la couleur qui accompagne votre décoration parmi nos six nuances florales façonnées à la main.",
        cover: {
            src: "/images/craft/creations/IMG_6461.jpg",
            alt: "Collection de fleurs sculptées colorées.",
        },
        items: [
            {
                id: "fleur-sculptee",
                name: "Fleur sculptée",
                description:
                    "Une fleur décorative façonnée à la main et disponible dans plusieurs nuances.",
                image: {
                    src: "/images/craft/collections/Fleurs/Fleurs_01.png",
                    alt: "Fleur sculptée couleur framboise.",
                },
                colors: [
                    {
                        id: "framboise",
                        label: "Framboise",
                        hex: "#b84861",
                        image: {
                            src: "/images/craft/collections/Fleurs/Fleurs_01.png",
                            alt: "Fleur sculptée couleur framboise.",
                        },
                    },
                    {
                        id: "rose-intense",
                        label: "Rose intense",
                        hex: "#d75c72",
                        image: {
                            src: "/images/craft/collections/Fleurs/Fleurs_02.png",
                            alt: "Fleur sculptée rose intense.",
                        },
                    },
                    {
                        id: "rose",
                        label: "Rose",
                        hex: "#e77f8c",
                        image: {
                            src: "/images/craft/collections/Fleurs/Fleurs_03.png",
                            alt: "Fleur sculptée rose.",
                        },
                    },
                    {
                        id: "corail",
                        label: "Corail",
                        hex: "#ed8f88",
                        image: {
                            src: "/images/craft/collections/Fleurs/Fleurs_04.png",
                            alt: "Fleur sculptée couleur corail.",
                        },
                    },
                    {
                        id: "peche",
                        label: "Pêche",
                        hex: "#efb09b",
                        image: {
                            src: "/images/craft/collections/Fleurs/Fleurs_05.png",
                            alt: "Fleur sculptée couleur pêche.",
                        },
                    },
                    {
                        id: "ivoire",
                        label: "Ivoire",
                        hex: "#eee2c9",
                        image: {
                            src: "/images/craft/collections/Fleurs/Fleurs_06.png",
                            alt: "Fleur sculptée couleur ivoire.",
                        },
                    },
                ],
            },
        ],
    },
];
export function getCraftCollection(slug: string) {
    return craftCollections.find((collection) => collection.slug === slug);
}