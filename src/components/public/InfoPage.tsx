import Link from "next/link";

import { Container } from "@/components/ui/Container";

type InfoPageSection = {
  title: string;
  body: string;
};

type InfoPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  sections: readonly InfoPageSection[];
  cta?: {
    label: string;
    href: string;
  };
};

export function InfoPage({
  cta,
  description,
  eyebrow,
  sections,
  title,
}: InfoPageProps) {
  return (
    <section className="bg-background py-[var(--section-space)]">
      <Container width="readable">
        <p className="type-label text-primary">{eyebrow}</p>
        <h1 className="mt-5 text-[clamp(2.8rem,6vw,4.9rem)] leading-[0.95] text-secondary">
          {title}
        </h1>
        <p className="mt-7 text-lg leading-8 text-charcoal/76">
          {description}
        </p>

        <div className="mt-12 grid gap-7 border-t border-sand pt-9">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-sans text-sm font-bold uppercase tracking-[0.16em] text-secondary">
                {section.title}
              </h2>
              <p className="mt-3 leading-8 text-charcoal/74">{section.body}</p>
            </section>
          ))}
        </div>

        {cta ? (
          <Link
            className="mt-10 inline-flex min-h-12 items-center justify-center rounded-[4px] border border-primary bg-primary px-6 font-sans text-sm font-bold text-primary-foreground transition-colors duration-200 hover:border-gold-700 hover:bg-gold-700 hover:text-ivory"
            href={cta.href}
          >
            {cta.label}
          </Link>
        ) : null}
      </Container>
    </section>
  );
}
