import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { HomeProcessData, HomeProcessStep } from "@/data/home";

import styles from "./ProcessSection.module.css";

type ProcessSectionProps = {
  process: HomeProcessData;
};

type ProcessIconProps = {
  icon: HomeProcessStep["icon"];
};

function ProcessIcon({ icon }: ProcessIconProps) {
  if (icon === "concept") {
    return (
      <svg className={styles.icon} aria-hidden="true" fill="none" viewBox="0 0 36 36">
        <path d="M18 7.5c3.8 0 7 3.1 7 6.9 0 4.4-4.1 7.4-7 10.2-2.9-2.8-7-5.8-7-10.2 0-3.8 3.2-6.9 7-6.9Z" />
        <path d="M18 24.6v4M13.8 14.4c1.7-1.7 6.7-1.7 8.4 0M14.9 18.6c1.4 1.4 4.8 1.4 6.2 0" />
      </svg>
    );
  }

  if (icon === "venue") {
    return (
      <svg className={styles.icon} aria-hidden="true" fill="none" viewBox="0 0 36 36">
        <path d="M18 30s8-7 8-14.1a8 8 0 0 0-16 0C10 23 18 30 18 30Z" />
        <path d="M18 18.9a3.1 3.1 0 1 0 0-6.2 3.1 3.1 0 0 0 0 6.2Z" />
      </svg>
    );
  }

  if (icon === "decoration") {
    return (
      <svg className={styles.icon} aria-hidden="true" fill="none" viewBox="0 0 36 36">
        <path d="M18 25.5c4.6 0 8.4-3.2 8.4-7.2 0-3.2-2.4-5.9-5.8-6.8A6.4 6.4 0 0 0 18 7.2a6.4 6.4 0 0 0-2.6 4.3c-3.4.9-5.8 3.6-5.8 6.8 0 4 3.8 7.2 8.4 7.2Z" />
        <path d="M18 13v16M13.8 29h8.4M13.7 17.6c1.8 1.8 6.8 1.8 8.6 0" />
      </svg>
    );
  }

  if (icon === "logistics") {
    return (
      <svg className={styles.icon} aria-hidden="true" fill="none" viewBox="0 0 36 36">
        <path d="M10.5 18.8h15c0 4.1-3.4 7.5-7.5 7.5s-7.5-3.4-7.5-7.5Z" />
        <path d="M18 10.2v8.6M13.2 12.7v6.1M22.8 12.7v6.1M9 29h18" />
      </svg>
    );
  }

  if (icon === "celebration") {
    return (
      <svg className={styles.icon} aria-hidden="true" fill="none" viewBox="0 0 36 36">
        <path d="m12 27 4.1-14.9L24 24.5 12 27Z" />
        <path d="M20.8 9.2c2.7-1.8 5.8-1.3 7.7 1.3M25.1 16.5l2.2-.7M10 9.5l1.7 1.9M26 26.3l2.1 1.4" />
        <path d="M24.5 5.5v3.1M8 17.2h3" />
      </svg>
    );
  }

  return (
    <svg className={styles.icon} aria-hidden="true" fill="none" viewBox="0 0 36 36">
      <path d="M18 6.5 20.8 15l8.7 3-8.7 3L18 29.5 15.2 21l-8.7-3 8.7-3L18 6.5Z" />
      <path d="m27.2 6.8.9 2.5 2.5.9-2.5.9-.9 2.5-.9-2.5-2.5-.9 2.5-.9.9-2.5Z" />
    </svg>
  );
}

function ProcessStep({ step }: { step: HomeProcessStep }) {
  return (
    <li className={styles.step}>
      <ProcessIcon icon={step.icon} />
      <span className={styles.dot} aria-hidden="true" />
      <span className={styles.number}>{step.number}</span>
      <span className={styles.stepTitle}>{step.title}</span>
    </li>
  );
}

export function ProcessSection({ process }: ProcessSectionProps) {
  return (
    <Section className={styles.section} surface="cream" aria-labelledby="home-process-title">
      <Container>
        <div className={styles.layout}>
          <div className={styles.content}>
            <div className={styles.eyebrowRow}>
              <p className={styles.eyebrow}>{process.eyebrow}</p>
              <span aria-hidden="true" />
            </div>
            <h2 className={styles.heading} id="home-process-title">
              {process.title}
            </h2>
            <p className={styles.description}>{process.description}</p>
            <Link className={styles.cta} href={process.cta.href}>
              <span>{process.cta.label}</span>
              <span aria-hidden="true">-&gt;</span>
            </Link>
          </div>

          <div className={styles.processArea}>
            <p className={styles.note}>{process.note}</p>
            <div className={styles.noteLine} aria-hidden="true" />
            <ol className={styles.timeline} aria-label="Processus d'organisation Sareine Craft">
              {process.steps.map((step) => (
                <ProcessStep key={step.number} step={step} />
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </Section>
  );
}
