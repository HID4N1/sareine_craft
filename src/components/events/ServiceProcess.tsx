import { Container } from "@/components/ui/Container";
import type { EventsServiceSection } from "@/data/events";

export function ServiceProcess({ service }: { service: EventsServiceSection }) {
  return (
    <section className="scroll-rise bg-cream py-[clamp(4.25rem,7vw,7rem)]">
      <Container className="grid gap-10 lg:grid-cols-[minmax(19rem,28%)_minmax(0,72%)]">
        <div className="scroll-rise-soft">
          <p className="type-label text-primary">{service.eyebrow}</p>
          <h2 className="mt-4 max-w-[10ch] font-display text-[clamp(2.8rem,4.5vw,4.8rem)] font-medium leading-[0.92] text-secondary">
            {service.title}
          </h2>
        </div>
        <ol className="scroll-rise-soft grid border-gold-300/45 lg:grid-cols-4 lg:border-l">
          {service.steps.map((step) => (
            <li
              className="border-l border-gold-300/45 pb-9 pl-6 lg:border-l-0 lg:border-r lg:pb-0 lg:pl-8 lg:pr-8"
              key={step.number}
            >
              <p className="font-display text-[clamp(3.4rem,6vw,5.8rem)] leading-none text-primary/72">
                {step.number}
              </p>
              <h3 className="mt-5 font-sans text-[1rem] font-bold uppercase leading-5 tracking-[0.08em] text-secondary">
                {step.title}
              </h3>
              <p className="mt-4 text-[0.98rem] leading-7 text-charcoal/72">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
