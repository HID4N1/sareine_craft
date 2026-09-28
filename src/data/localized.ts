import { getWhatsAppHref } from "@/lib/whatsapp";
import type { Locale } from "@/i18n/config";
import { defaultLocale, withLocalePath } from "@/i18n/config";

import { aboutPageData } from "./about";
import { craftCollections } from "./craft-collections";
import { craftPageData } from "./craft-page";
import {
  eventInquiryHref,
  eventPageCategories,
  eventsFinalCta,
  eventsPageHero,
  eventsServiceSection,
} from "./events";
import {
  homeCraftHighlight,
  homeEventCategories,
  homeHero,
  homeProcess,
  homeProjectContact,
  homeServices,
} from "./home";
import { siteData } from "./site";

const projectMessages: Record<Locale, string> = {
  fr: "Bonjour Sareine Craft, j'aimerais parler de mon projet.",
  en: "Hello Sareine Craft, I would like to talk about my project.",
  ar: "مرحبا سارين كرافت، أود التحدث عن مشروعي.",
};

const eventMessages: Record<Locale, string> = {
  fr: "Bonjour Sareine Craft, j'aimerais parler d'un projet événementiel.",
  en: "Hello Sareine Craft, I would like to talk about an event project.",
  ar: "مرحبا سارين كرافت، أود التحدث عن مشروع فعالية.",
};

type TranslationMap = Record<string, string>;

const en: TranslationMap = {
  "CRÉATIONS • ÉVÉNEMENTS • CASABLANCA": "CREATIONS • EVENTS • CASABLANCA",
  "Des créations": "Creations",
  "qui ": "that ",
  "embellissent.": "beautify.",
  "Des moments": "Moments",
  "restent.": "last.",
  "Bougies artisanales, créations personnalisées et événements imaginés avec soin pour célébrer chaque moment à votre façon.":
    "Handmade candles, custom creations, and carefully imagined events to celebrate every moment your way.",
  "Découvrir nos créations": "Discover our creations",
  "Explorer nos événements": "Explore our events",
  "Décoration baby shower rose avec ballons, chariot fleuri et ours en peluche.":
    "Pink baby shower decor with balloons, a floral cart, and a teddy bear.",
  "Décoration bridal shower vert et or avec ballons, table basse et fleurs.":
    "Green and gold bridal shower decor with balloons, a low table, and flowers.",
  "L’ART DE CÉLÉBRER LE QUOTIDIEN": "THE ART OF CELEBRATING EVERYDAY MOMENTS",
  "NOTRE SAVOIR-FAIRE": "OUR KNOW-HOW",
  "Bien plus qu’une décoration.": "More than decoration.",
  "Découvrir nos services": "Discover our services",
  "ÉVÉNEMENTS": "EVENTS",
  "Organisation\nd’événements": "Event\nplanning",
  "Des moments pensés autour de vous.": "Moments designed around you.",
  "Décor de naissance complet avec table personnalisée et composition douce.":
    "Complete birth celebration decor with a personalized table and soft composition.",
  "DÉCORATION": "DECORATION",
  "Décoration\n& mise en scène": "Styling\n& staging",
  "Chaque détail participe à l’histoire.": "Every detail helps tell the story.",
  "Célébration privée Sareine Craft avec décor chaleureux et ambiance intimiste.":
    "Private Sareine Craft celebration with warm decor and an intimate mood.",
  "CRÉATIONS ARTISANALES": "HANDMADE CREATIONS",
  "Créations\nartisanales": "Handmade\ncreations",
  "Des pièces uniques créées avec intention.": "Unique pieces created with intention.",
  "Création artisanale Sareine Craft photographiée en atelier.":
    "Handmade Sareine Craft creation photographed in the studio.",
  "SERVICE COMPLET": "FULL SERVICE",
  "Organisation\nde A à Z": "Planning\nfrom A to Z",
  "Lieu, buffet, matériel,\ndécoration, coordination…\nnous pouvons tout prendre\nen charge.":
    "Venue, buffet, equipment,\ndecoration, coordination...\nwe can handle everything.",
  "Décor d'anniversaire Sareine Craft avec scénographie festive et élégante.":
    "Sareine Craft birthday decor with festive, elegant staging.",
  "CRÉATIONS AUTHENTIQUES": "AUTHENTIC CREATIONS",
  "Faites à la main avec passion": "Handmade with passion",
  "ACCOMPAGNEMENT PERSONNALISÉ": "PERSONALIZED SUPPORT",
  "À chaque étape, à vos côtés": "By your side at every step",
  "DES MOMENTS INOUBLIABLES": "UNFORGETTABLE MOMENTS",
  "Qui restent gravés": "Made to be remembered",
  "À CHAQUE MOMENT SON UNIVERS": "A WORLD FOR EVERY MOMENT",
  "Des événements qui vous ressemblent.": "Events that feel like you.",
  "Anniversaire": "Birthday",
  "Décor baby shower Sareine Craft avec ambiance délicate et féminine.":
    "Sareine Craft baby shower decor with a delicate, feminine atmosphere.",
  "Mise en scène de graduation avec toque, diplôme, bougies et détails dorés.":
    "Graduation setup with cap, diploma, candles, and golden details.",
  "Naissance": "Birth",
  "Célébration privée": "Private celebration",
  "DE A À Z": "FROM A TO Z",
  "Une idée suffit.\nOn s’occupe du reste.": "One idea is enough.\nWe handle the rest.",
  "Vous nous partagez votre envie. Sareine imagine, organise et coordonne chaque détail — du lieu à la décoration, en passant par le buffet, le matériel et la logistique.":
    "Share your vision with us. Sareine imagines, organizes, and coordinates every detail, from the venue and decor to the buffet, equipment, and logistics.",
  "Confier mon événement": "Entrust us with my event",
  "Sérénité\nà chaque étape.": "Peace of mind\nat every step.",
  "Votre idée": "Your idea",
  "Le concept": "The concept",
  "Le lieu": "The venue",
  "La décoration": "The decoration",
  "Buffet & logistique": "Buffet & logistics",
  "Le grand jour": "The big day",
  "CRÉÉ À LA MAIN": "HANDMADE",
  "Des objets qui font partie du souvenir.": "Objects that become part of the memory.",
  "Bougies artisanales, décorations et créations personnalisées pensées pour offrir, décorer ou compléter vos événements.":
    "Handmade candles, decorations, and custom creations designed to gift, decorate, or complete your events.",
  "Découvrir les créations": "Discover the creations",
  "Création Sareine Craft aux détails floraux et faits main.":
    "Sareine Craft creation with floral, handmade details.",
  "Détail d'une création artisanale Sareine.": "Detail of a handmade Sareine creation.",
  "Plus qu’un objet, une émotion.": "More than an object, an emotion.",
  "UN MOMENT À CÉLÉBRER ?": "A MOMENT TO CELEBRATE?",
  "Parlons de votre projet.": "Let's talk about your project.",
  "Qu’il s’agisse d’une simple idée ou d’un événement complet, Sareine Craft est là pour lui donner vie.":
    "Whether it starts as a simple idea or a complete event, Sareine Craft is here to bring it to life.",
  "Parler de mon projet": "Talk about my project",
  "Décoration élégante d'un événement Sareine.": "Elegant decor for a Sareine event.",

  "CRÉATIONS ARTISANALES & ÉVÉNEMENTS À CASABLANCA": "HANDMADE CREATIONS & EVENTS IN CASABLANCA",
  "Créations artisanales et événements sur mesure à Casablanca":
    "Handmade creations and custom events in Casablanca",
  "Sareine imagine des créations faites main et organise des célébrations uniques, pensées avec soin pour raconter votre histoire.":
    "Sareine creates handmade pieces and organizes unique celebrations, thoughtfully designed to tell your story.",
  "Fait main au Maroc": "Handmade in Morocco",
  "Organisation de A à Z": "Planning from A to Z",
  "Créations personnalisées": "Custom creations",
  "Deux savoir-faire, une même attention aux détails":
    "Two crafts, the same attention to detail",
  "Événements sur mesure": "Custom events",
  "Nous organisons des célébrations uniques pour chaque moment de vie : naissance, baby shower, anniversaire, graduation et célébration privée.":
    "We organize unique celebrations for every life moment: births, baby showers, birthdays, graduations, and private celebrations.",
  "Lieu": "Venue",
  "Buffet": "Buffet",
  "Décoration": "Decoration",
  "Logistique": "Logistics",
  "Décoration de naissance personnalisée réalisée par Sareine à Casablanca.":
    "Custom birth celebration decor created by Sareine in Casablanca.",
  "Décoration élégante d’une célébration privée organisée par Sareine.":
    "Elegant decor for a private celebration organized by Sareine.",
  "Des bougies gourmandes, princesses, silhouettes, oursons, anges et fleurs sculptées, imaginés et façonnés à la main avec passion.":
    "Gourmet candles, princesses, silhouettes, teddy bears, angels, and sculpted flowers, imagined and shaped by hand with passion.",
  "Personnalisable": "Customizable",
  "Fabriqué au Maroc": "Made in Morocco",
  "Découvrir le Craft": "Discover Craft",
  "Bougies gourmandes artisanales colorées créées par Sareine.":
    "Colorful handmade gourmet candles created by Sareine.",
  "Collection de princesses artisanales roses fabriquées par Sareine.":
    "Collection of pink handmade princesses made by Sareine.",
  "Un accompagnement pensé autour de vous": "Support designed around you",
  "Écoute": "Listening",
  "Nous prenons le temps de comprendre vos envies et vos besoins.":
    "We take the time to understand your wishes and needs.",
  "Nous imaginons un univers sur mesure, en harmonie avec votre histoire.":
    "We imagine a custom world in harmony with your story.",
  "Création": "Creation",
  "Nous donnons vie aux détails avec des créations faites main et une organisation soignée.":
    "We bring details to life with handmade creations and careful organization.",
  "Jour J": "Event day",
  "Nous assurons la mise en place et le bon déroulement pour que vous profitiez pleinement de votre moment.":
    "We handle setup and flow so you can fully enjoy your moment.",
  "Donnons vie à votre prochain moment": "Let's bring your next moment to life",

  "Des moments uniques, créés pour vous": "Unique moments, created for you",
  "De la conception à la réalisation, nous imaginons et organisons vos événements pour des souvenirs inoubliables.":
    "From concept to execution, we imagine and organize your events for unforgettable memories.",
  "Table de célébration élégante aux tons bordeaux et dorés":
    "Elegant celebration table in burgundy and gold tones",
  "Des ambiances sur mesure": "Custom atmospheres",
  "Décoration élégante et personnalisée": "Elegant, personalized decor",
  "Service complet de A à Z": "Complete service from A to Z",
  "Des souvenirs inoubliables": "Unforgettable memories",
  "Célébrez l'arrivée de bébé": "Celebrate baby's arrival",
  "Une ambiance douce et féerique pour célébrer ce moment unique. Décorations personnalisées, buffet gourmand et une atmosphère remplie de tendresse.":
    "A soft, magical atmosphere for this unique moment. Custom decor, a generous buffet, and a mood filled with tenderness.",
  "Découvrir les Baby Showers": "Discover baby showers",
  "Décor baby shower rose avec ballons, fleurs et table personnalisée":
    "Pink baby shower decor with balloons, flowers, and a personalized table",
  "Détail tendre de baby shower Sareine Craft": "Tender detail from a Sareine Craft baby shower",
  "Décor doux de naissance avec détails personnalisés": "Soft birth celebration decor with custom details",
  "Des fêtes inoubliables pour petits et grands": "Unforgettable parties for children and adults",
  "Des thèmes variés, des décors créatifs et une organisation complète pour faire de chaque anniversaire un moment magique.":
    "Varied themes, creative decor, and complete planning to make every birthday magical.",
  "Découvrir les anniversaires": "Discover birthdays",
  "Anniversaire élégant avec gâteau, bougies, ballons dorés et fleurs":
    "Elegant birthday with cake, candles, golden balloons, and flowers",
  "Décor anniversaire chaleureux avec table raffinée": "Warm birthday decor with a refined table",
  "Détail anniversaire Sareine Craft avec ambiance festive": "Festive Sareine Craft birthday detail",
  "Remise de diplômes": "Graduation",
  "Marquez une étape importante": "Mark an important milestone",
  "Une célébration à la hauteur de vos réussites avec des décors élégants, des détails personnalisés et une organisation sans stress.":
    "A celebration worthy of your achievements, with elegant decor, custom details, and stress-free planning.",
  "Découvrir les remises de diplômes": "Discover graduations",
  "Décor graduation noir et or avec toque, fleurs crème et table élégante":
    "Black and gold graduation decor with cap, cream flowers, and an elegant table",
  "Détail graduation avec diplômes, fleurs et accents dorés":
    "Graduation detail with diplomas, flowers, and golden accents",
  "Événements privés": "Private events",
  "Des moments qui vous ressemblent": "Moments that feel like you",
  "Fêtes, réceptions, dîners privés ou rencontres spéciales, nous créons des ambiances uniques adaptées à vos envies.":
    "Parties, receptions, private dinners, or special gatherings: we create unique atmospheres tailored to your wishes.",
  "Découvrir les événements privés": "Discover private events",
  "Réception privée élégante avec table dressée, fleurs et lumière dorée":
    "Elegant private reception with set table, flowers, and golden light",
  "Détail chaleureux de célébration privée Sareine Craft":
    "Warm detail from a private Sareine Craft celebration",
  "Une expérience complète": "A complete experience",
  "De A à Z, nous nous occupons de tout": "From A to Z, we take care of everything",
  "De la conception du concept à la décoration, la restauration, la logistique et la coordination le jour J, pour un événement en toute sérénité.":
    "From concept design to decor, catering, logistics, and day-of coordination, for a calm, seamless event.",
  "Discuter de votre projet": "Discuss your project",
  "Location de lieu (si nécessaire)": "Venue rental (if needed)",
  "Décoration personnalisée": "Personalized decor",
  "Restauration et boissons": "Catering and drinks",
  "Logistique complète": "Complete logistics",
  "Coordination le jour J": "Day-of coordination",
  "Accompagnement sur mesure": "Tailored support",
  "Votre histoire mérite un décor unique": "Your story deserves a unique setting",
  "Parlons de votre projet": "Let's talk about your project",
  "Racontez-nous vos envies, nous les transformons en une célébration inoubliable.":
    "Tell us what you have in mind; we turn it into an unforgettable celebration.",
  "Demander un devis": "Request a quote",
  "Décor de célébration privée Sareine Craft dans une ambiance intime":
    "Private Sareine Craft celebration decor in an intimate atmosphere",

  "NOS CRÉATIONS ARTISANALES": "OUR HANDMADE CREATIONS",
  "L’Art du Fait Main,\nL’Émotion en Plus": "The Art of Handmade,\nWith Extra Emotion",
  "Des créations uniques, pensées avec passion et façonnées à la main pour illuminer votre quotidien et vos moments spéciaux.":
    "Unique creations, imagined with passion and shaped by hand to brighten your everyday life and special moments.",
  "Petits\ndétails,\nGrands\nmoments.\n♡": "Small\ndetails,\nBig\nmoments.\n♡",
  "Collection de bougies artisanales en forme de robes.":
    "Collection of handmade dress-shaped candles.",
  "Matériaux\nsélectionnés": "Selected\nmaterials",
  "Pièces uniques\nou personnalisables": "Unique or\ncustom pieces",
  "Toutes les créations": "All creations",
  "Bougies gourmandes": "Gourmet candles",
  "Princesses": "Princesses",
  "Silhouettes": "Silhouettes",
  "Anges & figurines": "Angels & figurines",
  "Fleurs sculptées": "Sculpted flowers",
  "NOS PRODUITS": "OUR PRODUCTS",
  "Nos Créations": "Our Creations",
  "Des pièces uniques, conçues avec soin pour sublimer chaque instant.":
    "Unique pieces, carefully designed to enhance every moment.",
  "PLUS QU’UN OBJET": "MORE THAN AN OBJECT",
  "Une Histoire,\nUn Savoir-Faire": "A Story,\nA Craft",
  "Chaque création est imaginée et réalisée avec passion, en alliant tradition artisanale et touches contemporaines. Nos pièces racontent une histoire : la vôtre.":
    "Each creation is imagined and made with passion, blending craft tradition with contemporary touches. Our pieces tell a story: yours.",
  "Découvrir notre univers": "Discover our world",
  "Bougie artisanale en forme de gâteau d’anniversaire.":
    "Handmade birthday-cake-shaped candle.",
  "Bougie artisanale représentant un ange endormi.":
    "Handmade candle representing a sleeping angel.",
  "Créations uniques": "Unique creations",
  "Chaque pièce est réalisée avec soin": "Every piece is made with care",
  "Matériaux de qualité": "Quality materials",
  "Sélectionnés avec attention": "Carefully selected",
  "Soutient l’artisanat local": "Supports local craft",
  "Personnalisation": "Personalization",
  "Des créations à votre image": "Creations in your image",

  "Mini bougies gourmandes": "Mini gourmet candles",
  "Gâteau d’anniversaire": "Birthday cake",
  "Collection petites princesses": "Little princesses collection",
  "Collection princesses roses": "Pink princesses collection",
  "Princesse au bouquet": "Princess with bouquet",
  "Princesse romantique": "Romantic princess",
  "Princesse élégance": "Elegant princess",
  "Princesse rêveuse": "Dreamy princess",
  "Princesse au nœud": "Princess with bow",
  "Cortège de princesses": "Princess procession",
  "Collection conte de fées": "Fairy-tale collection",
  "Duo de princesses": "Princess duo",
  "Princesses ivoire": "Ivory princesses",
  "Collection royale": "Royal collection",
  "Robe plissée ivoire": "Ivory pleated dress",
  "Trio de silhouettes": "Silhouette trio",
  "Silhouette couture": "Couture silhouette",
  "Robe de cérémonie": "Ceremony dress",
  "Silhouette satinée": "Satin silhouette",
  "Collection haute couture": "Haute couture collection",
  "Robe signature": "Signature dress",
  "Oursons décoratifs": "Decorative teddy bears",
  "Ange endormi": "Sleeping angel",
  "Ange rêveur": "Dreamy angel",
  "Petits anges": "Little angels",
  "Duo d’anges": "Angel duo",
  "Ange gardien": "Guardian angel",
  "Anges aux fleurs": "Angels with flowers",
  "Ange douceur": "Soft angel",
  "Petit ange artisanal": "Little handmade angel",
  "Ourson bleu": "Blue teddy bear",
  "Rose ivoire": "Ivory rose"
  ,
  "COLLECTION ARTISANALE": "HANDMADE COLLECTION",
  "Des douceurs qui ne fondent que pour vous.": "Sweet creations made just for you.",
  "Petits cakes colorés et créations d’anniversaire réalisées à la main.":
    "Colorful little cakes and handmade birthday creations.",
  "Une collection joyeuse inspirée de la pâtisserie, personnalisable selon votre événement et vos couleurs.":
    "A joyful pastry-inspired collection, customizable to your event and colors.",
  "Collection de quatre bougies gourmandes colorées.":
    "Collection of four colorful gourmet candles.",
  "Cake fleuri": "Floral cake",
  "Bougie gourmande rose décorée de fleurs.": "Pink gourmet candle decorated with flowers.",
  "Cake fleuri artisanal.": "Handmade floral cake.",
  "Cake aux fruits rouges": "Red berry cake",
  "Bougie gourmande décorée de fruits rouges.": "Gourmet candle decorated with red berries.",
  "Cake artisanal aux fruits rouges.": "Handmade red berry cake.",
  "Cake confettis": "Confetti cake",
  "Bougie festive décorée de confettis colorés.": "Festive candle decorated with colorful confetti.",
  "Cake artisanal décoré de confettis.": "Handmade cake decorated with confetti.",
  "Cake à la fraise": "Strawberry cake",
  "Bougie gourmande aux détails fruités.": "Gourmet candle with fruity details.",
  "Cake artisanal à la fraise.": "Handmade strawberry cake.",
  "Une création personnalisable pour célébrer votre journée.":
    "A customizable creation to celebrate your day.",
  "Bougie gâteau d’anniversaire.": "Birthday cake candle.",

  "COLLECTION CONTE DE FÉES": "FAIRY-TALE COLLECTION",
  "Gourmet candles": "Gourmet candles",
  "Princesses féeriques": "Fairy-tale princesses",
  "Des princesses façonnées avec délicatesse.": "Princesses shaped with delicacy.",
  "Six modèles romantiques disponibles en rose poudré et en ivoire.":
    "Six romantic models available in powder pink and ivory.",
  "Chaque princesse est coulée et terminée à la main. Choisissez votre modèle puis sa couleur rose poudré ou ivoire.":
    "Each princess is poured and finished by hand. Choose your model, then its powder pink or ivory color.",
  "Princesse douce": "Soft princess",
  "Une princesse délicate à la longue tresse.": "A delicate princess with a long braid.",
  "Princesse douce rose poudré.": "Soft princess in powder pink.",
  "Rose poudré": "Powder pink",
  "Ivoire": "Ivory",
  "Une princesse aux longs cheveux et à la robe élégante.":
    "A princess with long hair and an elegant dress.",
  "Princesse romantique rose poudré.": "Romantic princess in powder pink.",
  "Une princesse élégante coiffée d’un joli nœud.":
    "An elegant princess styled with a pretty bow.",
  "Princesse au nœud rose poudré.": "Princess with bow in powder pink.",
  "Princesse de cérémonie": "Ceremony princess",
  "Une création raffinée avec une robe à plusieurs niveaux.":
    "A refined creation with a tiered dress.",
  "Princesse de cérémonie rose poudré.": "Ceremony princess in powder pink.",
  "Princesse de cérémonie ivoire.": "Ceremony princess in ivory.",
  "Une petite princesse au style tendre et poétique.":
    "A little princess with a tender, poetic style.",
  "Princesse rêveuse rose poudré.": "Dreamy princess in powder pink.",
  "Princesse rêveuse ivoire.": "Dreamy princess in ivory.",
  "Princesse royale": "Royal princess",
  "Une princesse à la robe majestueuse finement sculptée.":
    "A princess with a finely sculpted majestic dress.",
  "Princesse royale rose poudré.": "Royal princess in powder pink.",

  "COLLECTION ÉLÉGANCE": "ELEGANCE COLLECTION",
  "Silhouettes & robes": "Silhouettes & dresses",
  "L’élégance sculptée dans les moindres détails.":
    "Elegance sculpted down to the smallest detail.",
  "Des robes et silhouettes décoratives au style raffiné.":
    "Decorative dresses and silhouettes with refined style.",
  "Une collection inspirée de la couture et des grandes occasions, pensée pour décorer ou offrir.":
    "A collection inspired by couture and special occasions, designed to decorate or gift.",
  "Robe plissée": "Pleated dress",
  "Une robe élégante aux plis délicatement sculptés.":
    "An elegant dress with delicately sculpted pleats.",
  "Bougie robe plissée.": "Pleated dress candle.",
  "Une silhouette fine inspirée de la haute couture.":
    "A slender silhouette inspired by haute couture.",
  "Une création raffinée pour les moments d’exception.":
    "A refined creation for exceptional moments.",
  "Bougie robe de cérémonie.": "Ceremony dress candle.",
  "Le modèle signature de la collection Sareine.":
    "The signature model of the Sareine collection.",

  "Le petit compagnon des moments précieux.": "The little companion for precious moments.",
  "Un ourson fleuri disponible en blanc, crème et caramel.":
    "A floral teddy bear available in white, cream, and caramel.",
  "Cet ourson fait main accompagne les baby showers, anniversaires et cadeaux personnalisés. Choisissez la couleur qui correspond à votre univers.":
    "This handmade teddy bear accompanies baby showers, birthdays, and personalized gifts. Choose the color that matches your world.",
  "Collection de trois oursons décoratifs.": "Collection of three decorative teddy bears.",
  "Un ourson décoratif avec un cœur, disponible en trois couleurs.":
    "A decorative teddy bear with a heart, available in three colors.",
  "Ourson fleuri couleur crème.": "Floral teddy bear in cream.",
  "Crème": "Cream",
  "Blanc": "White",
  "Caramel": "Caramel",
  "Un ourson bleu présenté dans sa propre collection.":
    "A blue teddy bear presented in its own collection.",
  "Une création douce pensée pour les naissances, baby showers et cadeaux personnalisés.":
    "A soft creation designed for births, baby showers, and personalized gifts.",
  "Ourson bleu façonné et terminé à la main.": "Blue teddy bear shaped and finished by hand.",

  "COLLECTION CÉLESTE": "CELESTIAL COLLECTION",
  "Des créations pleines de douceur et de lumière.":
    "Creations full of softness and light.",
  "Une collection d’anges artisanaux aux détails délicats.":
    "A collection of handmade angels with delicate details.",
  "Chaque ange est imaginé pour offrir une présence douce et symbolique à vos événements et cadeaux.":
    "Each angel is imagined to bring a soft, symbolic presence to your events and gifts.",
  "Un ange délicatement posé dans une position paisible.":
    "An angel delicately resting in a peaceful pose.",
  "Une création douce aux ailes finement sculptées.":
    "A soft creation with finely sculpted wings.",
  "Bougie ange rêveur.": "Dreamy angel candle.",
  "Un petit ange assis façonné à la main.": "A little seated angel shaped by hand.",
  "Deux anges réunis pour une composition harmonieuse.":
    "Two angels gathered in a harmonious composition.",

  "Des fleurs qui gardent leur beauté.": "Flowers that keep their beauty.",
  "Une fleur artisanale proposée dans six nuances délicates.":
    "A handmade flower offered in six delicate shades.",
  "Choisissez la couleur qui accompagne votre décoration parmi nos six nuances florales façonnées à la main.":
    "Choose the color that complements your decor from our six handmade floral shades.",
  "Collection de fleurs sculptées colorées.": "Collection of colorful sculpted flowers.",
  "Fleur sculptée": "Sculpted flower",
  "Une fleur décorative façonnée à la main et disponible dans plusieurs nuances.":
    "A decorative flower shaped by hand and available in several shades.",
  "Fleur sculptée couleur framboise.": "Sculpted flower in raspberry.",
  "Fleur sculptée rose intense.": "Sculpted flower in intense pink.",
  "Fleur sculptée rose.": "Pink sculpted flower.",
  "Fleur sculptée couleur corail.": "Sculpted flower in coral.",
  "Pêche": "Peach",
  "Fleur sculptée couleur pêche.": "Sculpted flower in peach.",
  "Fleur sculptée couleur ivoire.": "Sculpted flower in ivory.",
  "Framboise": "Raspberry",
  "Rose intense": "Intense pink",
  "Rose": "Pink",
  "Corail": "Coral"
};

const ar: TranslationMap = {
  "CRÉATIONS • ÉVÉNEMENTS • CASABLANCA": "إبداعات • فعاليات • الدار البيضاء",
  "Des créations": "إبداعات",
  "qui ": "تزيد ",
  "embellissent.": "الجمال.",
  "Des moments": "لحظات",
  "restent.": "تبقى.",
  "Bougies artisanales, créations personnalisées et événements imaginés avec soin pour célébrer chaque moment à votre façon.":
    "شموع يدوية، إبداعات مخصصة وفعاليات مصممة بعناية للاحتفال بكل لحظة بطريقتكم.",
  "Découvrir nos créations": "اكتشفوا إبداعاتنا",
  "Explorer nos événements": "استكشفوا فعالياتنا",
  "L’ART DE CÉLÉBRER LE QUOTIDIEN": "فن الاحتفال باللحظات اليومية",
  "NOTRE SAVOIR-FAIRE": "خبرتنا",
  "Bien plus qu’une décoration.": "أكثر من مجرد ديكور.",
  "Découvrir nos services": "اكتشفوا خدماتنا",
  "ÉVÉNEMENTS": "فعاليات",
  "Organisation\nd’événements": "تنظيم\nالفعاليات",
  "Des moments pensés autour de vous.": "لحظات مصممة حولكم.",
  "DÉCORATION": "ديكور",
  "Décoration\n& mise en scène": "ديكور\nوتنسيق",
  "Chaque détail participe à l’histoire.": "كل تفصيل يشارك في الحكاية.",
  "CRÉATIONS ARTISANALES": "إبداعات يدوية",
  "Créations\nartisanales": "إبداعات\nيدوية",
  "Des pièces uniques créées avec intention.": "قطع فريدة مصممة بعناية.",
  "SERVICE COMPLET": "خدمة كاملة",
  "Organisation\nde A à Z": "تنظيم\nمن الألف إلى الياء",
  "Lieu, buffet, matériel,\ndécoration, coordination…\nnous pouvons tout prendre\nen charge.":
    "المكان، البوفيه، المعدات،\nالديكور والتنسيق...\nيمكننا التكفل بكل شيء.",
  "CRÉATIONS AUTHENTIQUES": "إبداعات أصيلة",
  "Faites à la main avec passion": "مصنوعة يدويا بشغف",
  "ACCOMPAGNEMENT PERSONNALISÉ": "مرافقة مخصصة",
  "À chaque étape, à vos côtés": "إلى جانبكم في كل مرحلة",
  "DES MOMENTS INOUBLIABLES": "لحظات لا تنسى",
  "Qui restent gravés": "تبقى في الذاكرة",
  "À CHAQUE MOMENT SON UNIVERS": "لكل لحظة عالمها",
  "Des événements qui vous ressemblent.": "فعاليات تشبهكم.",
  "Anniversaire": "عيد ميلاد",
  "Naissance": "ولادة",
  "Célébration privée": "احتفال خاص",
  "DE A À Z": "من الألف إلى الياء",
  "Une idée suffit.\nOn s’occupe du reste.": "تكفي فكرة واحدة.\nونحن نهتم بالباقي.",
  "Vous nous partagez votre envie. Sareine imagine, organise et coordonne chaque détail — du lieu à la décoration, en passant par le buffet, le matériel et la logistique.":
    "تشاركوننا رغبتكم، وسارين تتخيل وتنظم وتنسق كل تفصيل، من المكان والديكور إلى البوفيه والمعدات واللوجستيك.",
  "Confier mon événement": "أوكل فعالياتي",
  "Sérénité\nà chaque étape.": "طمأنينة\nفي كل مرحلة.",
  "Votre idée": "فكرتكم",
  "Le concept": "التصور",
  "Le lieu": "المكان",
  "La décoration": "الديكور",
  "Buffet & logistique": "بوفيه ولوجستيك",
  "Le grand jour": "اليوم الكبير",
  "CRÉÉ À LA MAIN": "مصنوع يدويا",
  "Des objets qui font partie du souvenir.": "قطع تصبح جزءا من الذكرى.",
  "Bougies artisanales, décorations et créations personnalisées pensées pour offrir, décorer ou compléter vos événements.":
    "شموع يدوية وديكورات وإبداعات مخصصة للهدايا أو الزينة أو إكمال فعالياتكم.",
  "Découvrir les créations": "اكتشفوا الإبداعات",
  "Plus qu’un objet, une émotion.": "أكثر من قطعة، إحساس.",
  "UN MOMENT À CÉLÉBRER ?": "لديكم لحظة للاحتفال؟",
  "Parlons de votre projet.": "لنتحدث عن مشروعكم.",
  "Qu’il s’agisse d’une simple idée ou d’un événement complet, Sareine Craft est là pour lui donner vie.":
    "سواء كانت فكرة بسيطة أو فعالية كاملة، سارين كرافت هنا لتمنحها الحياة.",
  "Parler de mon projet": "التحدث عن مشروعي",

  "CRÉATIONS ARTISANALES & ÉVÉNEMENTS À CASABLANCA": "إبداعات يدوية وفعاليات في الدار البيضاء",
  "Créations artisanales et événements sur mesure à Casablanca":
    "إبداعات يدوية وفعاليات مخصصة في الدار البيضاء",
  "Sareine imagine des créations faites main et organise des célébrations uniques, pensées avec soin pour raconter votre histoire.":
    "تصمم سارين إبداعات يدوية وتنظم احتفالات فريدة مصممة بعناية لتحكي قصتكم.",
  "Fait main au Maroc": "مصنوع يدويا في المغرب",
  "Organisation de A à Z": "تنظيم من الألف إلى الياء",
  "Créations personnalisées": "إبداعات مخصصة",
  "Deux savoir-faire, une même attention aux détails":
    "خبرتان واهتمام واحد بالتفاصيل",
  "Événements sur mesure": "فعاليات مخصصة",
  "Nous organisons des célébrations uniques pour chaque moment de vie : naissance, baby shower, anniversaire, graduation et célébration privée.":
    "ننظم احتفالات فريدة لكل لحظة من الحياة: ولادة، حفلة استقبال مولود، عيد ميلاد، تخرُّج واحتفال خاص.",
  "Lieu": "المكان",
  "Buffet": "البوفيه",
  "Décoration": "الديكور",
  "Logistique": "اللوجستيك",
  "Créations artisanales": "إبداعات يدوية",
  "Des bougies gourmandes, princesses, silhouettes, oursons, anges et fleurs sculptées, imaginés et façonnés à la main avec passion.":
    "شموع حلوة، أميرات، مجسمات، دببة، الملائكة وزهور منحوتة، مصممة ومشكلة يدويا بشغف.",
  "Personnalisable": "قابل للتخصيص",
  "Fabriqué au Maroc": "صنع في المغرب",
  "Découvrir le Craft": "اكتشفوا الكرافت",
  "Un accompagnement pensé autour de vous": "مرافقة مصممة حولكم",
  "Écoute": "إنصات",
  "Nous prenons le temps de comprendre vos envies et vos besoins.":
    "نأخذ الوقت لفهم رغباتكم واحتياجاتكم.",
  "Nous imaginons un univers sur mesure, en harmonie avec votre histoire.":
    "نتخيل عالما مخصصا ينسجم مع قصتكم.",
  "Création": "إبداع",
  "Nous donnons vie aux détails avec des créations faites main et une organisation soignée.":
    "نمنح التفاصيل الحياة بإبداعات يدوية وتنظيم متقن.",
  "Jour J": "يوم الفعالية",
  "Nous assurons la mise en place et le bon déroulement pour que vous profitiez pleinement de votre moment.":
    "نتكفل بالتجهيز وحسن سير اليوم لتستمتعوا بلحظتكم بالكامل.",
  "Donnons vie à votre prochain moment": "لنمنح لحظتكم القادمة الحياة",

  "Des moments uniques, créés pour vous": "لحظات فريدة، مصممة لكم",
  "De la conception à la réalisation, nous imaginons et organisons vos événements pour des souvenirs inoubliables.":
    "من الفكرة إلى التنفيذ، نتخيل وننظم فعالياتكم لذكريات لا تنسى.",
  "Des ambiances sur mesure": "أجواء مخصصة",
  "Décoration élégante et personnalisée": "ديكور أنيق ومخصص",
  "Service complet de A à Z": "خدمة كاملة من الألف إلى الياء",
  "Des souvenirs inoubliables": "ذكريات لا تنسى",
  "Célébrez l'arrivée de bébé": "احتفلوا بقدوم المولود",
  "Une ambiance douce et féerique pour célébrer ce moment unique. Décorations personnalisées, buffet gourmand et une atmosphère remplie de tendresse.":
    "أجواء ناعمة وساحرة للاحتفال بهذه اللحظة الفريدة، مع ديكور مخصص وبوفيه شهي ولمسة مليئة بالحنان.",
  "Baby Shower": "حفلة استقبال مولود",
  "Découvrir les Baby Showers": "اكتشفوا حفلات استقبال المولود",
  "Des fêtes inoubliables pour petits et grands": "حفلات لا تنسى للصغار والكبار",
  "Des thèmes variés, des décors créatifs et une organisation complète pour faire de chaque anniversaire un moment magique.":
    "ثيمات متنوعة وديكورات مبتكرة وتنظيم كامل لجعل كل عيد ميلاد لحظة ساحرة.",
  "Découvrir les anniversaires": "اكتشفوا أعياد الميلاد",
  "Graduation": "تخرُّج",
  "Remise de diplômes": "تخرُّج",
  "Marquez une étape importante": "احتفلوا بمرحلة مهمة",
  "Une célébration à la hauteur de vos réussites avec des décors élégants, des détails personnalisés et une organisation sans stress.":
    "احتفال يليق بإنجازاتكم مع ديكور أنيق وتفاصيل مخصصة وتنظيم بلا توتر.",
  "Découvrir les remises de diplômes": "اكتشفوا حفلات التخرُّج",
  "Événements privés": "فعاليات خاصة",
  "Des moments qui vous ressemblent": "لحظات تشبهكم",
  "Fêtes, réceptions, dîners privés ou rencontres spéciales, nous créons des ambiances uniques adaptées à vos envies.":
    "حفلات، استقبال، عشاء خاص أو لقاءات مميزة، نصمم أجواء فريدة تناسب رغباتكم.",
  "Découvrir les événements privés": "اكتشفوا الفعاليات الخاصة",
  "Une expérience complète": "تجربة كاملة",
  "De A à Z, nous nous occupons de tout": "من الألف إلى الياء، نهتم بكل شيء",
  "De la conception du concept à la décoration, la restauration, la logistique et la coordination le jour J, pour un événement en toute sérénité.":
    "من تصميم الفكرة إلى الديكور والضيافة واللوجستيك والتنسيق يوم الفعالية، لتجربة بكل طمأنينة.",
  "Discuter de votre projet": "ناقشوا مشروعكم",
  "Location de lieu (si nécessaire)": "كراء المكان عند الحاجة",
  "Décoration personnalisée": "ديكور مخصص",
  "Restauration et boissons": "ضيافة ومشروبات",
  "Logistique complète": "لوجستيك كامل",
  "Coordination le jour J": "تنسيق يوم الفعالية",
  "Accompagnement sur mesure": "مرافقة مخصصة",
  "Votre histoire mérite un décor unique": "قصتكم تستحق ديكورا فريدا",
  "Parlons de votre projet": "لنتحدث عن مشروعكم",
  "Racontez-nous vos envies, nous les transformons en une célébration inoubliable.":
    "احكوا لنا رغباتكم، نحولها إلى احتفال لا ينسى.",
  "Demander un devis": "طلب عرض سعر",

  "NOS CRÉATIONS ARTISANALES": "إبداعاتنا اليدوية",
  "L’Art du Fait Main,\nL’Émotion en Plus": "فن الصناعة اليدوية،\nومزيد من الإحساس",
  "Des créations uniques, pensées avec passion et façonnées à la main pour illuminer votre quotidien et vos moments spéciaux.":
    "إبداعات فريدة مصممة بشغف ومشكلة يدويا لتضيء يومكم ولحظاتكم الخاصة.",
  "Petits\ndétails,\nGrands\nmoments.\n♡": "تفاصيل\nصغيرة،\nلحظات\nكبيرة.\n♡",
  "Matériaux\nsélectionnés": "مواد\nمختارة",
  "Pièces uniques\nou personnalisables": "قطع فريدة\nأو مخصصة",
  "Toutes les créations": "كل الإبداعات",
  "Bougies gourmandes": "شموع حلوة",
  "Princesses": "أميرات",
  "Silhouettes": "مجسمات",
  "Anges & figurines": "الملائكة والمجسمات",
  "Fleurs sculptées": "زهور منحوتة",
  "NOS PRODUITS": "منتجاتنا",
  "Nos Créations": "إبداعاتنا",
  "Des pièces uniques, conçues avec soin pour sublimer chaque instant.":
    "قطع فريدة مصممة بعناية لتجميل كل لحظة.",
  "PLUS QU’UN OBJET": "أكثر من قطعة",
  "Une Histoire,\nUn Savoir-Faire": "قصة،\nوحرفة",
  "Chaque création est imaginée et réalisée avec passion, en alliant tradition artisanale et touches contemporaines. Nos pièces racontent une histoire : la vôtre.":
    "كل إبداع يتم تخيله وصنعه بشغف، بين التقاليد اليدوية ولمسات معاصرة. قطعنا تحكي قصة: قصتكم.",
  "Découvrir notre univers": "اكتشفوا عالمنا",
  "Créations uniques": "إبداعات فريدة",
  "Chaque pièce est réalisée avec soin": "كل قطعة تصنع بعناية",
  "Matériaux de qualité": "مواد عالية الجودة",
  "Sélectionnés avec attention": "مختارة بعناية",
  "Soutient l’artisanat local": "يدعم الحرف المحلية",
  "Personnalisation": "تخصيص",
  "Des créations à votre image": "إبداعات تشبهكم",

  "Mini bougies gourmandes": "شموع حلوة صغيرة",
  "Gâteau d’anniversaire": "كعكة عيد ميلاد",
  "Collection petites princesses": "مجموعة الأميرات الصغيرات",
  "Collection princesses roses": "مجموعة الأميرات الوردية",
  "Princesse au bouquet": "أميرة بالباقة",
  "Princesse romantique": "أميرة رومانسية",
  "Princesse élégance": "أميرة أنيقة",
  "Princesse rêveuse": "أميرة حالمة",
  "Princesse au nœud": "أميرة بالعقدة",
  "Cortège de princesses": "موكب الأميرات",
  "Collection conte de fées": "مجموعة الحكايات الخيالية",
  "Duo de princesses": "ثنائي الأميرات",
  "Princesses ivoire": "أميرات عاجية",
  "Collection royale": "مجموعة ملكية",
  "Robe plissée ivoire": "فستان عاجي بطيات",
  "Trio de silhouettes": "ثلاثي المجسمات",
  "Silhouette couture": "مجسم كوتور",
  "Robe de cérémonie": "فستان احتفالي",
  "Silhouette satinée": "مجسم ساتان",
  "Collection haute couture": "مجموعة الهوت كوتور",
  "Robe signature": "فستان مميز",
  "Oursons décoratifs": "دببة ديكورية",
  "Anges": "الملائكة",
  "Ange endormi": "ملاك نائم",
  "Ange rêveur": "ملاك حالم",
  "Petits anges": "ملائكة صغيرة",
  "Duo d’anges": "ثنائي الملائكة",
  "Ange gardien": "ملاك حارس",
  "Anges aux fleurs": "ملائكة بالزهور",
  "Ange douceur": "ملاك ناعم",
  "Petit ange artisanal": "ملاك صغير يدوي",
  "Ourson bleu": "دب أزرق",
  "Rose ivoire": "وردة عاجية"
  ,
  "COLLECTION ARTISANALE": "مجموعة يدوية",
  "Des douceurs qui ne fondent que pour vous.": "حلاوة مصنوعة خصيصا لكم.",
  "Petits cakes colorés et créations d’anniversaire réalisées à la main.":
    "كيكات صغيرة ملونة وإبداعات عيد ميلاد مصنوعة يدويا.",
  "Une collection joyeuse inspirée de la pâtisserie, personnalisable selon votre événement et vos couleurs.":
    "مجموعة مرحة مستوحاة من الحلويات، قابلة للتخصيص حسب فعاليتكم وألوانكم.",
  "Collection de quatre bougies gourmandes colorées.":
    "مجموعة من أربع شموع حلوة وملونة.",
  "Cake fleuri": "كيك مزهر",
  "Bougie gourmande rose décorée de fleurs.": "شمعة حلوة وردية مزينة بالزهور.",
  "Cake fleuri artisanal.": "كيك مزهر مصنوع يدويا.",
  "Cake aux fruits rouges": "كيك بالفواكه الحمراء",
  "Bougie gourmande décorée de fruits rouges.": "شمعة حلوة مزينة بالفواكه الحمراء.",
  "Cake artisanal aux fruits rouges.": "كيك يدوي بالفواكه الحمراء.",
  "Cake confettis": "كيك كونفيتي",
  "Bougie festive décorée de confettis colorés.": "شمعة احتفالية مزينة بكونفيتي ملون.",
  "Cake artisanal décoré de confettis.": "كيك يدوي مزين بالكونفيتي.",
  "Cake à la fraise": "كيك بالفراولة",
  "Bougie gourmande aux détails fruités.": "شمعة حلوة بتفاصيل فاكهية.",
  "Cake artisanal à la fraise.": "كيك يدوي بالفراولة.",
  "Une création personnalisable pour célébrer votre journée.":
    "إبداع قابل للتخصيص للاحتفال بيومكم.",
  "Bougie gâteau d’anniversaire.": "شمعة كعكة عيد ميلاد.",

  "COLLECTION CONTE DE FÉES": "مجموعة الحكايات الخيالية",
  "Princesses féeriques": "أميرات خياليات",
  "Des princesses façonnées avec délicatesse.": "أميرات مشكلة برقة.",
  "Six modèles romantiques disponibles en rose poudré et en ivoire.":
    "ستة نماذج رومانسية متوفرة بالوردي البودري والعاجي.",
  "Chaque princesse est coulée et terminée à la main. Choisissez votre modèle puis sa couleur rose poudré ou ivoire.":
    "كل أميرة تصب وتنتهي يدويا. اختاروا النموذج ثم اللون الوردي البودري أو العاجي.",
  "Princesse douce": "أميرة ناعمة",
  "Une princesse délicate à la longue tresse.": "أميرة رقيقة بضفيرة طويلة.",
  "Princesse douce rose poudré.": "أميرة ناعمة بالوردي البودري.",
  "Rose poudré": "وردي بودري",
  "Ivoire": "عاجي",
  "Une princesse aux longs cheveux et à la robe élégante.":
    "أميرة بشعر طويل وفستان أنيق.",
  "Princesse romantique rose poudré.": "أميرة رومانسية بالوردي البودري.",
  "Une princesse élégante coiffée d’un joli nœud.":
    "أميرة أنيقة مزينة بعقدة جميلة.",
  "Princesse au nœud rose poudré.": "أميرة بالعقدة بالوردي البودري.",
  "Princesse de cérémonie": "أميرة احتفالية",
  "Une création raffinée avec une robe à plusieurs niveaux.":
    "إبداع راق بفستان متعدد الطبقات.",
  "Princesse de cérémonie rose poudré.": "أميرة احتفالية بالوردي البودري.",
  "Princesse de cérémonie ivoire.": "أميرة احتفالية عاجية.",
  "Une petite princesse au style tendre et poétique.":
    "أميرة صغيرة بأسلوب ناعم وشاعري.",
  "Princesse rêveuse rose poudré.": "أميرة حالمة بالوردي البودري.",
  "Princesse rêveuse ivoire.": "أميرة حالمة عاجية.",
  "Princesse royale": "أميرة ملكية",
  "Une princesse à la robe majestueuse finement sculptée.":
    "أميرة بفستان مهيب منحوت بدقة.",
  "Princesse royale rose poudré.": "أميرة ملكية بالوردي البودري.",

  "COLLECTION ÉLÉGANCE": "مجموعة الأناقة",
  "Silhouettes & robes": "مجسمات وفساتين",
  "L’élégance sculptée dans les moindres détails.":
    "أناقة منحوتة في أدق التفاصيل.",
  "Des robes et silhouettes décoratives au style raffiné.":
    "فساتين ومجسمات ديكورية بأسلوب راق.",
  "Une collection inspirée de la couture et des grandes occasions, pensée pour décorer ou offrir.":
    "مجموعة مستوحاة من الخياطة والمناسبات الكبرى، مصممة للزينة أو الإهداء.",
  "Robe plissée": "فستان بطيات",
  "Une robe élégante aux plis délicatement sculptés.":
    "فستان أنيق بطيات منحوتة برقة.",
  "Bougie robe plissée.": "شمعة فستان بطيات.",
  "Une silhouette fine inspirée de la haute couture.":
    "مجسم رقيق مستوحى من الهوت كوتور.",
  "Une création raffinée pour les moments d’exception.":
    "إبداع راق للحظات الاستثنائية.",
  "Bougie robe de cérémonie.": "شمعة فستان احتفالي.",
  "Le modèle signature de la collection Sareine.":
    "النموذج المميز لمجموعة سارين.",

  "Le petit compagnon des moments précieux.": "الرفيق الصغير للحظات الثمينة.",
  "Un ourson fleuri disponible en blanc, crème et caramel.":
    "دب مزهر متوفر بالأبيض والكريمي والكراميل.",
  "Cet ourson fait main accompagne les baby showers, anniversaires et cadeaux personnalisés. Choisissez la couleur qui correspond à votre univers.":
    "هذا الدب اليدوي يرافق حفلات استقبال المولود وأعياد الميلاد والهدايا المخصصة. اختاروا اللون المناسب لعالمكم.",
  "Collection de trois oursons décoratifs.": "مجموعة من ثلاثة دببة ديكورية.",
  "Un ourson décoratif avec un cœur, disponible en trois couleurs.":
    "دب ديكوري بقلب، متوفر بثلاثة ألوان.",
  "Ourson fleuri couleur crème.": "دب مزهر بلون كريمي.",
  "Crème": "كريمي",
  "Blanc": "أبيض",
  "Caramel": "كراميل",
  "Un ourson bleu présenté dans sa propre collection.":
    "دب أزرق مقدم في مجموعته الخاصة.",
  "Une création douce pensée pour les naissances, baby showers et cadeaux personnalisés.":
    "إبداع ناعم مصمم للولادات وحفلات استقبال المولود والهدايا المخصصة.",
  "Ourson bleu façonné et terminé à la main.": "دب أزرق مشكل ومنتهي يدويا.",

  "COLLECTION CÉLESTE": "مجموعة سماوية",
  "Des créations pleines de douceur et de lumière.":
    "إبداعات مليئة بالنعومة والضوء.",
  "Une collection d’anges artisanaux aux détails délicats.":
    "مجموعة الملائكة اليدوية بتفاصيل رقيقة.",
  "Chaque ange est imaginé pour offrir une présence douce et symbolique à vos événements et cadeaux.":
    "كل ملاك مصمم ليضيف حضورا ناعما ورمزيا لفعالياتكم وهداياكم.",
  "Un ange délicatement posé dans une position paisible.":
    "ملاك موضوع برقة في وضع هادئ.",
  "Une création douce aux ailes finement sculptées.":
    "إبداع ناعم بأجنحة منحوتة بدقة.",
  "Bougie ange rêveur.": "شمعة ملاك حالم.",
  "Un petit ange assis façonné à la main.": "ملاك صغير جالس مشكل يدويا.",
  "Deux anges réunis pour une composition harmonieuse.":
    "ملاكان مجتمعان في تركيبة متناغمة.",

  "Des fleurs qui gardent leur beauté.": "زهور تحتفظ بجمالها.",
  "Une fleur artisanale proposée dans six nuances délicates.":
    "زهرة يدوية متوفرة بست درجات ناعمة.",
  "Choisissez la couleur qui accompagne votre décoration parmi nos six nuances florales façonnées à la main.":
    "اختاروا اللون الذي يرافق ديكوركم من بين ست درجات زهرية مصنوعة يدويا.",
  "Collection de fleurs sculptées colorées.": "مجموعة زهور منحوتة ملونة.",
  "Fleur sculptée": "زهرة منحوتة",
  "Une fleur décorative façonnée à la main et disponible dans plusieurs nuances.":
    "زهرة ديكورية مشكلة يدويا ومتوفرة بعدة درجات.",
  "Fleur sculptée couleur framboise.": "زهرة منحوتة بلون التوت.",
  "Fleur sculptée rose intense.": "زهرة منحوتة وردية قوية.",
  "Fleur sculptée rose.": "زهرة منحوتة وردية.",
  "Fleur sculptée couleur corail.": "زهرة منحوتة بلون مرجاني.",
  "Pêche": "خوخي",
  "Fleur sculptée couleur pêche.": "زهرة منحوتة بلون خوخي.",
  "Fleur sculptée couleur ivoire.": "زهرة منحوتة بلون عاجي.",
  "Framboise": "توت",
  "Rose intense": "وردي قوي",
  "Rose": "وردي",
  "Corail": "مرجاني"
};

const maps: Record<Exclude<Locale, "fr">, TranslationMap> = { en, ar };

function translateString(value: string, locale: Locale): string {
  if (locale === defaultLocale) {
    return value;
  }

  const translated = maps[locale][value];

  if (translated) {
    return translated;
  }

  if (value.includes(", création artisanale Sareine Craft.")) {
    const name = value.replace(", création artisanale Sareine Craft.", "");
    const translatedName = translateString(name, locale);
    return locale === "ar"
      ? `${translatedName}، إبداع يدوي من سارين كرافت.`
      : `${translatedName}, handmade Sareine Craft creation.`;
  }

  return value;
}

function localizeHref(href: string, locale: Locale): string {
  if (href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return href;
  }

  if (href.startsWith("http")) {
    if (href.includes("wa.me")) {
      return getWhatsAppHref(siteData.contact.whatsapp, projectMessages[locale]) ?? href;
    }

    return href;
  }

  return withLocalePath(href, locale);
}

function localizeValue<T>(value: T, locale: Locale): T {
  if (typeof value === "string") {
    return translateString(value, locale) as T;
  }

  if (Array.isArray(value)) {
    return value.map((item) => localizeValue(item, locale)) as T;
  }

  if (value && typeof value === "object") {
    const result: Record<string, unknown> = {};

    for (const [key, child] of Object.entries(value)) {
      result[key] =
        key === "href" && typeof child === "string"
          ? localizeHref(child, locale)
          : localizeValue(child, locale);
    }

    return result as T;
  }

  return value;
}

export function getLocalizedHomeData(locale: Locale) {
  return {
    hero: localizeValue(homeHero, locale),
    services: localizeValue(homeServices, locale),
    eventCategories: localizeValue(homeEventCategories, locale),
    process: localizeValue(homeProcess, locale),
    craftHighlight: localizeValue(homeCraftHighlight, locale),
    projectContact: localizeValue(homeProjectContact, locale),
  };
}

export function getLocalizedAboutData(locale: Locale) {
  return localizeValue(aboutPageData, locale);
}

export function getLocalizedCraftData(locale: Locale) {
  return {
    page: localizeValue(craftPageData, locale),
    collections: localizeValue(craftCollections, locale),
  };
}

export function getLocalizedCraftCollection(slug: string, locale: Locale) {
  return getLocalizedCraftData(locale).collections.find(
    (collection) => collection.slug === slug,
  );
}

export function getLocalizedEventsData(locale: Locale) {
  return {
    hero: localizeValue(eventsPageHero, locale),
    categories: localizeValue(eventPageCategories, locale),
    service: localizeValue(eventsServiceSection, locale),
    finalCta: localizeValue(eventsFinalCta, locale),
    inquiryHref:
      getWhatsAppHref(siteData.contact.whatsapp, eventMessages[locale]) ??
      eventInquiryHref,
  };
}
