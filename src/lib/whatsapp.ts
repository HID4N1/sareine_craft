import type { Locale } from "@/i18n/config";

import { siteData } from "@/data/site";

export const whatsAppMessages = {
  project: {
    fr: "Bonjour Sareine Craft ✨\nJe souhaite avoir plus d'informations sur vos créations et services.",
    en: "Hello Sareine Craft ✨\nI would like more information about your creations and services.",
    ar: "مرحبا سارين كرافت ✨\nأود الحصول على مزيد من المعلومات حول إبداعاتكم وخدماتكم.",
  },
  event: {
    fr: "Bonjour Sareine Craft ✨\nJe souhaite parler d'un projet événementiel.",
    en: "Hello Sareine Craft ✨\nI would like to talk about an event project.",
    ar: "مرحبا سارين كرافت ✨\nأود التحدث عن مشروع فعالية.",
  },
} satisfies Record<string, Record<Locale, string>>;

export function getWhatsAppHref(value: string | null, message?: string) {
  if (!value) {
    return null;
  }

  if (value.startsWith("http://") || value.startsWith("https://")) {
    return value;
  }

  const digits = value.replace(/\D/g, "");

  if (!digits) {
    return null;
  }

  const text = message ? `?text=${encodeURIComponent(message)}` : "";

  return `https://wa.me/${digits}${text}`;
}

export function getSareineWhatsAppHref(message?: string) {
  return getWhatsAppHref(siteData.contact.whatsapp, message);
}

export function getProjectWhatsAppHref(locale: Locale) {
  return getSareineWhatsAppHref(whatsAppMessages.project[locale]);
}

export function getEventWhatsAppHref(locale: Locale) {
  return getSareineWhatsAppHref(whatsAppMessages.event[locale]);
}

export function getCraftCollectionWhatsAppHref(
  locale: Locale,
  collectionName: string,
) {
  const messages: Record<Locale, string> = {
    fr: `Bonjour Sareine Craft ✨\nJe souhaite parler de la collection ${collectionName}.`,
    en: `Hello Sareine Craft ✨\nI would like to talk about the ${collectionName} collection.`,
    ar: `مرحبا سارين كرافت ✨\nأود التحدث عن مجموعة ${collectionName}.`,
  };

  return getSareineWhatsAppHref(messages[locale]);
}
