import { siteData } from "@/data";

function getWhatsAppHref(value: string | null) {
  if (!value) {
    return null;
  }

  if (value.startsWith("http://") || value.startsWith("https://")) {
    return value;
  }

  const digits = value.replace(/\D/g, "");

  return digits ? `https://wa.me/${digits}` : null;
}

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-6"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.48.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35M12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.52-5.26C2.15 6.45 6.59 2 12.05 2a9.83 9.83 0 0 1 7 2.9 9.84 9.84 0 0 1 2.9 7c0 5.45-4.44 9.89-9.9 9.89m8.42-18.31A11.82 11.82 0 0 0 12.05 0C5.5 0 .17 5.33.17 11.9c0 2.1.55 4.15 1.6 5.96L.07 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.33 11.89-11.9a11.82 11.82 0 0 0-3.48-8.42" />
    </svg>
  );
}

export function FloatingWhatsApp() {
  const whatsappHref = getWhatsAppHref(siteData.contact.whatsapp);

  if (!whatsappHref) {
    return null;
  }

  return (
    <a
      aria-label="Contacter Sareine sur WhatsApp"
      className="fixed right-5 bottom-5 z-[60] inline-flex min-h-14 items-center gap-3 rounded-full border border-white/30 bg-[#25D366] px-5 font-sans text-sm font-bold text-white shadow-[0_12px_35px_rgba(37,211,102,0.35)] transition duration-300 hover:-translate-y-1 hover:bg-[#1ebe5d] hover:shadow-[0_16px_40px_rgba(37,211,102,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366]"
      href={whatsappHref}
      rel="noreferrer"
      target="_blank"
    >
      <WhatsAppIcon />
      <span>WhatsApp</span>
    </a>
  );
}