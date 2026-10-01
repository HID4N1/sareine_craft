import { getProjectWhatsAppHref } from "@/lib/whatsapp";
import type { Locale } from "@/i18n/config";
import { withLocalePath } from "@/i18n/config";

import { siteData } from "./site";

export const infoPages = {
  fr: {
    contact: {
      eyebrow: "CONTACT",
      title: "Parlons de votre projet.",
      description:
        "Une création artisanale, une décoration ou un événement à imaginer ? Contactez Sareine Craft directement sur WhatsApp.",
      sections: [
        {
          title: "WhatsApp",
          body: siteData.contact.whatsapp ?? "Disponible sur demande.",
        },
        {
          title: "Localisation",
          body: siteData.address.country ?? "Maroc",
        },
      ],
      cta: {
        label: "Nous contacter",
        href: getProjectWhatsAppHref("fr") ?? "/",
      },
    },
    privacy: {
      eyebrow: "CONFIDENTIALITÉ",
      title: "Politique de confidentialité",
      description:
        "Cette page explique comment Sareine Craft traite les informations que vous partagez lorsque vous nous contactez.",
      sections: [
        {
          title: "Données collectées",
          body: "Nous recevons uniquement les informations que vous choisissez de nous transmettre, comme votre nom, votre téléphone, vos préférences ou les détails de votre projet.",
        },
        {
          title: "Utilisation",
          body: "Ces informations servent à répondre à votre demande, préparer un devis et organiser votre création ou votre événement.",
        },
        {
          title: "Conservation",
          body: "Les échanges sont conservés uniquement le temps nécessaire au suivi de votre demande et de notre relation client.",
        },
      ],
    },
    terms: {
      eyebrow: "CONDITIONS",
      title: "Conditions d’utilisation",
      description:
        "Les informations présentées sur ce site sont fournies pour découvrir l’univers Sareine Craft et préparer une prise de contact.",
      sections: [
        {
          title: "Créations et événements",
          body: "Chaque projet est étudié sur mesure. Les prix, disponibilités et délais sont confirmés après échange direct avec l’équipe Sareine Craft.",
        },
        {
          title: "Images",
          body: "Les images présentent notre univers, nos créations et nos inspirations. Certaines compositions peuvent varier selon les disponibilités.",
        },
      ],
    },
    cookies: {
      eyebrow: "COOKIES",
      title: "Gestion des cookies",
      description:
        "Le site utilise des technologies nécessaires à son fonctionnement et à la mémorisation de votre préférence de langue.",
      sections: [
        {
          title: "Préférence de langue",
          body: "Votre langue préférée peut être enregistrée afin de vous proposer automatiquement la bonne version du site.",
        },
        {
          title: "Mesure et services externes",
          body: "Si des outils de mesure ou des services externes sont ajoutés, cette page sera mise à jour pour préciser leur usage.",
        },
      ],
    },
  },
  en: {
    contact: {
      eyebrow: "CONTACT",
      title: "Let’s talk about your project.",
      description:
        "A handmade creation, decor concept, or event to imagine? Contact Sareine Craft directly on WhatsApp.",
      sections: [
        {
          title: "WhatsApp",
          body: siteData.contact.whatsapp ?? "Available on request.",
        },
        { title: "Location", body: siteData.address.country ?? "Morocco" },
      ],
      cta: {
        label: "Contact us",
        href: getProjectWhatsAppHref("en") ?? "/",
      },
    },
    privacy: {
      eyebrow: "PRIVACY",
      title: "Privacy policy",
      description:
        "This page explains how Sareine Craft handles the information you share when you contact us.",
      sections: [
        {
          title: "Data collected",
          body: "We only receive the information you choose to share, such as your name, phone number, preferences, or project details.",
        },
        {
          title: "Use",
          body: "This information is used to respond to your request, prepare a quote, and organize your creation or event.",
        },
        {
          title: "Retention",
          body: "Messages are kept only as long as needed to follow up on your request and customer relationship.",
        },
      ],
    },
    terms: {
      eyebrow: "TERMS",
      title: "Terms of use",
      description:
        "The information on this site is provided to discover the Sareine Craft world and prepare a direct contact.",
      sections: [
        {
          title: "Creations and events",
          body: "Each project is handled individually. Prices, availability, and timing are confirmed after direct discussion with Sareine Craft.",
        },
        {
          title: "Images",
          body: "Images present our world, creations, and inspirations. Some compositions may vary depending on availability.",
        },
      ],
    },
    cookies: {
      eyebrow: "COOKIES",
      title: "Cookie management",
      description:
        "The site uses technologies required for operation and for remembering your language preference.",
      sections: [
        {
          title: "Language preference",
          body: "Your preferred language may be saved so the site can automatically show the right version.",
        },
        {
          title: "Analytics and external services",
          body: "If analytics tools or external services are added, this page will be updated to explain their use.",
        },
      ],
    },
  },
  ar: {
    contact: {
      eyebrow: "تواصل",
      title: "لنتحدث عن مشروعكم.",
      description:
        "إبداع يدوي، ديكور أو فعالية تريدون تخيلها؟ تواصلوا مع سارين كرافت مباشرة عبر واتساب.",
      sections: [
        {
          title: "واتساب",
          body: siteData.contact.whatsapp ?? "متوفر عند الطلب.",
        },
        { title: "الموقع", body: "المغرب" },
      ],
      cta: {
        label: "تواصلوا معنا",
        href: getProjectWhatsAppHref("ar") ?? "/",
      },
    },
    privacy: {
      eyebrow: "الخصوصية",
      title: "سياسة الخصوصية",
      description:
        "توضح هذه الصفحة كيف تتعامل سارين كرافت مع المعلومات التي تشاركونها عند التواصل معنا.",
      sections: [
        {
          title: "البيانات المجموعة",
          body: "نستقبل فقط المعلومات التي تختارون مشاركتها، مثل الاسم أو رقم الهاتف أو التفضيلات أو تفاصيل المشروع.",
        },
        {
          title: "الاستخدام",
          body: "تستخدم هذه المعلومات للرد على طلبكم، وتحضير عرض مناسب، وتنظيم الإبداع أو الفعالية.",
        },
        {
          title: "الحفظ",
          body: "تُحفظ المحادثات فقط للمدة اللازمة لمتابعة طلبكم وعلاقتنا بكم.",
        },
      ],
    },
    terms: {
      eyebrow: "الشروط",
      title: "شروط الاستخدام",
      description:
        "تقدم معلومات هذا الموقع لاكتشاف عالم سارين كرافت والتحضير للتواصل المباشر.",
      sections: [
        {
          title: "الإبداعات والفعاليات",
          body: "كل مشروع يدرس حسب الطلب. يتم تأكيد الأسعار والتوفر والآجال بعد التواصل المباشر مع سارين كرافت.",
        },
        {
          title: "الصور",
          body: "تعرض الصور عالمنا وإبداعاتنا وإلهاماتنا. قد تختلف بعض التركيبات حسب التوفر.",
        },
      ],
    },
    cookies: {
      eyebrow: "ملفات تعريف الارتباط",
      title: "إدارة ملفات تعريف الارتباط",
      description:
        "يستخدم الموقع تقنيات ضرورية لعمله ولحفظ تفضيل اللغة.",
      sections: [
        {
          title: "تفضيل اللغة",
          body: "يمكن حفظ لغتكم المفضلة حتى يعرض الموقع النسخة المناسبة تلقائيا.",
        },
        {
          title: "القياس والخدمات الخارجية",
          body: "إذا تمت إضافة أدوات قياس أو خدمات خارجية، سيتم تحديث هذه الصفحة لتوضيح استخدامها.",
        },
      ],
    },
  },
} as const;

export type InfoPageKey = keyof (typeof infoPages)["fr"];

export function getInfoPage(locale: Locale, page: InfoPageKey) {
  const data = infoPages[locale][page];
  const cta =
    "cta" in data && data.cta
      ? {
          ...data.cta,
          href: data.cta.href.startsWith("/")
            ? withLocalePath(data.cta.href, locale)
            : data.cta.href,
        }
      : undefined;

  return cta ? { ...data, cta } : data;
}
