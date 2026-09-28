import ar from "@/locales/ar.json";
import en from "@/locales/en.json";
import fr from "@/locales/fr.json";

import { defaultLocale, type Locale } from "./config";

type TranslationValue = string | { [key: string]: TranslationValue };
type Dictionary = Record<string, TranslationValue>;

const dictionaries: Record<Locale, Dictionary> = {
  fr,
  en,
  ar,
};

type Variables = Record<string, string | number>;

function getValue(dictionary: Dictionary, key: string): TranslationValue | undefined {
  return key.split(".").reduce<TranslationValue | undefined>((current, part) => {
    if (!current || typeof current === "string") {
      return undefined;
    }

    return current[part];
  }, dictionary);
}

function interpolate(value: string, variables?: Variables) {
  if (!variables) {
    return value;
  }

  return value.replace(/\{\{\s*(\w+)\s*\}\}/g, (match, variableName) => {
    const replacement = variables[variableName];
    return replacement === undefined ? match : String(replacement);
  });
}

export function getDictionary(locale: Locale) {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}

export function translate(locale: Locale, key: string, variables?: Variables) {
  const pluralKey =
    typeof variables?.count === "number"
      ? `${key}_${variables.count === 1 ? "one" : "other"}`
      : key;
  const value =
    getValue(getDictionary(locale), pluralKey) ??
    getValue(getDictionary(defaultLocale), pluralKey) ??
    getValue(getDictionary(locale), key) ??
    getValue(getDictionary(defaultLocale), key);

  if (typeof value !== "string") {
    return key;
  }

  return interpolate(value, variables);
}
