import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { HomeEventCategoriesData } from "@/data/home";

import styles from "./EventCategoriesSection.module.css";

type EventCategoriesSectionProps = {
  events: HomeEventCategoriesData;
};

export function EventCategoriesSection({ events }: EventCategoriesSectionProps) {
  return (
    <Section className={styles.section} surface="plum" aria-labelledby="home-event-categories-title">
      <Container>
        <div className={styles.header}>
          <div className={styles.titleGroup}>
            <div className={styles.eyebrowRow}>
              <p className={styles.eyebrow}>{events.eyebrow}</p>
              <span aria-hidden="true" />
            </div>
            <h2 className={styles.heading} id="home-event-categories-title">
              {events.title}
            </h2>
          </div>

          <Link className={styles.cta} href={events.cta.href}>
            {events.cta.label} <span aria-hidden="true">-&gt;</span>
          </Link>
        </div>

        <div className={styles.cards}>
          {events.categories.map((category) => (
            <Link className={styles.card} href={category.href} key={category.title}>
              <Image
                src={category.image.src}
                alt={category.image.alt}
                fill
                sizes="(min-width: 1024px) 18vw, (min-width: 680px) 31vw, 86vw"
                className={styles.image}
                style={{ objectPosition: category.image.position }}
              />
              <span className={styles.gradient} aria-hidden="true" />
              <span className={styles.cardTitle}>{category.title}</span>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
