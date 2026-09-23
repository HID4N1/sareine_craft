import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type {
  HomeServiceCard,
  HomeServicesData,
  HomeServiceValue,
} from "@/data/home";

import styles from "./ServicesSection.module.css";

type ServicesSectionProps = {
  services: HomeServicesData;
};

type ValueIconProps = {
  icon: HomeServiceValue["icon"];
};

function joinClasses(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

function ValueIcon({ icon }: ValueIconProps) {
  if (icon === "guide") {
    return (
      <svg className={styles.valueIcon} aria-hidden="true" fill="none" viewBox="0 0 32 32">
        <path d="M7 23.5V8.5c3.8-1.2 7-0.8 9 1.2 2-2 5.2-2.4 9-1.2v15c-3.8-1.2-7-0.8-9 1.2-2-2-5.2-2.4-9-1.2Z" />
        <path d="M16 9.7v15" />
      </svg>
    );
  }

  if (icon === "memory") {
    return (
      <svg className={styles.valueIcon} aria-hidden="true" fill="none" viewBox="0 0 32 32">
        <path d="M16 25s-8-4.7-8-11.2c0-3 2-5 4.7-5 1.7 0 2.8 0.8 3.3 1.8 0.5-1 1.6-1.8 3.3-1.8 2.7 0 4.7 2 4.7 5C24 20.3 16 25 16 25Z" />
        <path d="M16 6v2.2M24.4 9.5l-1.6 1.6M7.6 9.5l1.6 1.6" />
      </svg>
    );
  }

  return (
    <svg className={styles.valueIcon} aria-hidden="true" fill="none" viewBox="0 0 32 32">
      <path d="M16 5.5l2.5 7 7 2.5-7 2.5-2.5 7-2.5-7-7-2.5 7-2.5 2.5-7Z" />
      <path d="M24.5 4.5l1 2.7 2.7 1-2.7 1-1 2.7-1-2.7-2.7-1 2.7-1 1-2.7Z" />
    </svg>
  );
}

function ServiceCard({ card }: { card: HomeServiceCard }) {
  const isFeature = card.variant === "feature";

  return (
    <article
      className={joinClasses(
        styles.card,
        card.variant === "wide" && styles.cardWide,
        isFeature && styles.cardFeature,
      )}
    >
      <Image
        src={card.image.src}
        alt={card.image.alt}
        fill
        sizes={
          isFeature
            ? "(min-width: 1024px) 31vw, (min-width: 768px) 50vw, 100vw"
            : card.variant === "wide"
              ? "(min-width: 1024px) 59vw, 100vw"
              : "(min-width: 1024px) 29vw, (min-width: 768px) 50vw, 100vw"
        }
        className={styles.cardImage}
        style={{ objectPosition: card.image.position }}
      />
      <div
        className={joinClasses(
          styles.cardOverlay,
          isFeature ? styles.featureOverlay : styles.lightOverlay,
        )}
      />
      <div className={joinClasses(styles.cardContent, isFeature && styles.featureContent)}>
        <p className={styles.cardEyebrow}>{card.eyebrow}</p>
        <h3 className={styles.cardTitle}>{card.title}</h3>
        <p className={styles.cardDescription}>{card.description}</p>
      </div>
    </article>
  );
}

export function ServicesSection({ services }: ServicesSectionProps) {
  const [first, second, third, feature] = services.cards;

  return (
    <Section className={styles.section} surface="ivory" aria-labelledby="home-services-title">
      <Container>
        <div className={styles.header}>
          <div className={styles.headerTitleGroup}>
            <div className={styles.eyebrowRow}>
              <p className={styles.eyebrow}>{services.eyebrow}</p>
              <span aria-hidden="true" />
            </div>
            <h2 className={styles.heading} id="home-services-title">
              {services.title}
            </h2>
          </div>

          <div className={styles.headerIntro}>
            {services.description ? <p>{services.description}</p> : null}
            <Link className={styles.headerCta} href={services.cta.href}>
              <span>{services.cta.label}</span>
              <span aria-hidden="true">-&gt;</span>
            </Link>
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.leftGrid}>
            <ServiceCard card={first} />
            <ServiceCard card={second} />
            <ServiceCard card={third} />
          </div>
          <ServiceCard card={feature} />
        </div>

        <div className={styles.valueStrip} aria-label="Valeurs Sareine Craft">
          {services.values.map((value) => (
            <div className={styles.valueItem} key={value.title}>
              <ValueIcon icon={value.icon} />
              <div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
