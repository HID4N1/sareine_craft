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
