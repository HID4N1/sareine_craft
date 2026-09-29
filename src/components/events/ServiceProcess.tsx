import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import type { EventsServiceSection } from "@/data/events";

export function ServiceProcess({
  inquiryHref,
  service,
}: {
  inquiryHref: string;
  service: EventsServiceSection;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-plum-900 py-[clamp(6.5rem,10vw,10rem)] text-ivory">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(223,196,156,0.13),transparent_34%),radial-gradient(circle_at_92%_80%,rgba(168,123,146,0.12),transparent_30%)]"
      />
      <div
        aria-hidden="true"
        className="absolute left-[43%] top-0 h-full w-px bg-gold-300/18"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 left-[38%] h-[32rem] w-[18rem] rounded-t-full border border-gold-300/12"
      />
      <Container className="relative grid gap-[clamp(4rem,8vw,8rem)] lg:grid-cols-[minmax(20rem,0.9fr)_minmax(0,1.1fr)]">
        <div className="scroll-rise-soft max-w-[42rem]">
          <p className="type-label text-gold-300">{service.eyebrow}</p>
          <h2 className="mt-6 max-w-[12ch] font-display text-[clamp(3.25rem,5.8vw,6rem)] font-medium leading-[0.94] !text-white">
            {service.title}
          </h2>
          <p className="mt-8 max-w-[34rem] text-[1.08rem] leading-8 text-ivory/76">
            {service.description}
          </p>
          <Button
            className="mt-9"
            href={inquiryHref}
            rel="noreferrer"
            target="_blank"
          >
            {service.primaryCta}
          </Button>
        </div>

        <ul className="scroll-rise-soft grid content-center gap-x-12 gap-y-7 sm:grid-cols-2">
          {service.services.map((item) => (
            <li
              className="group flex min-h-20 items-center gap-5 border-b border-gold-300/16 pb-6"
              key={item.title}
            >
              <span
                aria-hidden="true"
                className="grid size-12 shrink-0 place-items-center border border-gold-300/24 font-display text-[2.2rem] leading-none text-gold-300 transition duration-300 group-hover:border-gold-300/48 group-hover:bg-ivory/5"
              >
                {item.icon}
              </span>
              <span className="max-w-[14rem] text-[0.96rem] font-semibold leading-6 text-ivory/84 transition duration-300 group-hover:text-ivory">
                {item.title}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
