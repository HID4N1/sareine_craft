import { Container } from "@/components/ui/Container";
import type { EventCategory } from "@/data/events";

const signatureItems = [
  {
    title: "Direction artistique",
    description:
      "Une ambiance pensée autour de votre moment, de vos couleurs et de votre histoire.",
  },
  {
    title: "Détails personnalisés",
    description:
      "Des compositions, accessoires et finitions qui donnent au décor sa présence.",
  },
  {
    title: "Installation soignée",
    description:
      "Une préparation fluide pour que la célébration reste belle, calme et maîtrisée.",
  },
];

export function EventsSignature({
  categories,
}: {
  categories: EventCategory[];
}) {
  return (
    <section className="relative overflow-hidden bg-plum-900 py-[clamp(4.5rem,7vw,7.5rem)] text-ivory">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(223,196,156,0.08)_1px,transparent_1px),radial-gradient(circle_at_82%_12%,rgba(223,196,156,0.14),transparent_30%)] bg-[size:5.5rem_5.5rem,auto]"
      />
      <Container className="relative grid gap-12 lg:grid-cols-[minmax(0,38%)_minmax(0,62%)] lg:items-end">
        <div>
          <p className="type-label text-gold-300">La signature Sareine</p>
          <h2 className="mt-5 max-w-[11ch] font-display text-[clamp(3rem,5vw,5.75rem)] font-medium leading-[0.9] text-ivory">
            Une mise en scène pensée comme un souvenir
          </h2>
        </div>
        <div>
          <p className="max-w-[42rem] text-[1.08rem] leading-8 text-ivory/74">
            Nous dessinons des décors qui se vivent autant qu&apos;ils se
            photographient : une palette juste, des volumes équilibrés, des
            matières choisies et une installation maîtrisée jusque dans les
            derniers détails.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {signatureItems.map((item, index) => (
              <article
                className="border border-gold-300/26 bg-ivory/[0.055] p-5 backdrop-blur-sm"
                key={item.title}
              >
                <p className="font-display text-[2.6rem] leading-none text-gold-300/70">
                  0{index + 1}
                </p>
                <h3 className="mt-5 font-sans text-[0.82rem] font-bold uppercase leading-5 tracking-[0.12em] text-ivory">
                  {item.title}
                </h3>
                <p className="mt-3 text-[0.92rem] leading-7 text-ivory/64">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-7 border-t border-gold-300/24 pt-5 text-[0.72rem] font-bold uppercase leading-6 tracking-[0.22em] text-gold-300/82">
            {categories.length} univers événementiels, une même exigence de
            douceur et d&apos;élégance.
          </p>
        </div>
      </Container>
    </section>
  );
}
