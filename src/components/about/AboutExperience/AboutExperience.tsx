import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import {
  aboutPageData,
  type AboutProcessStep,
  type AboutTrustItem,
} from "@/data/about";

import styles from "./AboutExperience.module.css";

type IconName =
  | AboutTrustItem["icon"]
  | AboutProcessStep["icon"]
  | "celebration"
  | "diamond";

type IconProps = {
  name: IconName;
};

function Icon({ name }: IconProps) {
  const commonProps = {
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "hand":
      return (
        <svg {...commonProps}>
          <path d="M7.5 11V5.5a1.5 1.5 0 0 1 3 0V10" />
          <path d="M10.5 9V4.5a1.5 1.5 0 0 1 3 0V10" />
          <path d="M13.5 9V6a1.5 1.5 0 0 1 3 0v5" />
          <path d="M16.5 10V8.5a1.5 1.5 0 0 1 3 0V14c0 4.1-2.9 7-7 7h-1.2a6 6 0 0 1-4.8-2.4L3.8 15a1.6 1.6 0 0 1 2.4-2.1L7.5 14" />
        </svg>
      );

    case "flower":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="2.2" />
          <path d="M12 9.8C9 8.1 8.5 4.5 10.7 3.3 13 2 14.5 5.2 12 9.8Z" />
          <path d="M14.2 12c1.7-3 5.3-3.5 6.5-1.3 1.3 2.3-1.9 3.8-6.5 1.3Z" />
          <path d="M12 14.2c3 1.7 3.5 5.3 1.3 6.5C11 22 9.5 18.8 12 14.2Z" />
          <path d="M9.8 12c-1.7 3-5.3 3.5-6.5 1.3C2 11 5.2 9.5 9.8 12Z" />
        </svg>
      );

    case "spark":
      return (
        <svg {...commonProps}>
          <path d="M12 2.8c.7 4.8 2.5 6.6 7.2 7.2-4.7.7-6.5 2.5-7.2 7.2-.7-4.7-2.5-6.5-7.2-7.2 4.7-.6 6.5-2.4 7.2-7.2Z" />
          <path d="M19 16.5c.3 2 1 2.7 3 3-2 .3-2.7 1-3 3-.3-2-1-2.7-3-3 2-.3 2.7-1 3-3Z" />
        </svg>
      );

    case "celebration":
      return (
        <svg {...commonProps}>
          <path d="m4 20 4.3-11.7L15.7 16 4 20Z" />
          <path d="m8.3 8.3 7.4 7.4" />
          <path d="M14 4c.7-1.5 2.1-2.2 4-2" />
          <path d="M17 9c1.2-1.1 2.8-1.4 4.5-.8" />
          <path d="M13.5 11.5c1.7-.2 3.1.3 4.2 1.6" />
          <path d="m19 3 .1.1" />
          <path d="m21 12 .1.1" />
        </svg>
      );

    case "diamond":
      return (
        <svg {...commonProps}>
          <path d="m4 9 3.2-4h9.6L20 9l-8 11L4 9Z" />
          <path d="M4 9h16" />
          <path d="m8 5 4 15 4-15" />
        </svg>
      );

    case "message":
      return (
        <svg {...commonProps}>
          <path d="M20 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h9a4 4 0 0 1 4 4v8Z" />
          <path d="M7.5 9.5h9" />
          <path d="M7.5 13h5.5" />
        </svg>
      );

    case "idea":
      return (
        <svg {...commonProps}>
          <path d="M9 18h6" />
          <path d="M10 22h4" />
          <path d="M8.2 15.5A7 7 0 1 1 15.8 15.5C15 16.2 15 17 15 18H9c0-1 0-1.8-.8-2.5Z" />
          <path d="M12 3V1" />
          <path d="m4.2 5.2-1.4-1.4" />
          <path d="m19.8 5.2 1.4-1.4" />
        </svg>
      );

    case "creation":
      return (
        <svg {...commonProps}>
          <path d="M4 20 15.5 8.5" />
          <path d="m14 4 1.2 2.8L18 8l-2.8 1.2L14 12l-1.2-2.8L10 8l2.8-1.2L14 4Z" />
          <path d="m19 13 .8 1.8 1.7.7-1.7.8L19 18l-.8-1.7-1.7-.8 1.7-.7L19 13Z" />
          <path d="m6 3 .6 1.4L8 5l-1.4.6L6 7l-.6-1.4L4 5l1.4-.6L6 3Z" />
        </svg>
      );

    case "calendar":
      return (
        <svg {...commonProps}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M16 3v4" />
          <path d="M8 3v4" />
          <path d="M3 10h18" />
          <path d="m8 15 2.2 2.2L16 12.5" />
        </svg>
      );
  }
}

export function AboutExperience() {
  const { hero, trustItems, pillars, process, finalCta } = aboutPageData;

  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="about-title">
        <span className={`${styles.decorativeLeaf} ${styles.leafLeft}`}>
          ✦
        </span>

        <span className={`${styles.decorativeLeaf} ${styles.leafRight}`}>
          ✦
        </span>

        <Container className={styles.heroContainer}>
          <p className={styles.eyebrow}>{hero.eyebrow}</p>

          <h1 id="about-title" className={styles.title}>
            {hero.title}
          </h1>

          <p className={styles.heroDescription}>{hero.description}</p>
        </Container>
      </section>

      <section
        className={styles.trustSection}
        aria-label="Les engagements de Sareine"
      >
        <Container>
          <div className={styles.trustGrid}>
            {trustItems.map((item) => (
              <article className={styles.trustItem} key={item.title}>
                <span className={styles.trustIcon}>
                  <Icon name={item.icon} />
                </span>

                <h2 className={styles.trustTitle}>{item.title}</h2>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.pillarsSection}>
        <Container width="wide">
          <header className={styles.sectionHeading}>
            <p className={styles.eyebrow}>L’UNIVERS SAREINE</p>

            <h2>{pillars.title}</h2>

            <span className={styles.headingLine} aria-hidden="true" />
          </header>

          <div className={styles.pillarsGrid}>
            {pillars.items.map((pillar) => (
              <article className={styles.pillarCard} key={pillar.id}>
                <div className={styles.imageGrid}>
                  {pillar.images.map((image) => (
                    <div className={styles.imageFrame} key={image.src}>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        quality={82}
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className={styles.pillarImage}
                        style={{
                          objectPosition: image.position ?? "center",
                        }}
                      />
                    </div>
                  ))}
                </div>

                <div className={styles.pillarBody}>
                  <div className={styles.pillarHeader}>
                    <span className={styles.pillarIcon}>
                      <Icon name={pillar.icon} />
                    </span>

                    <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                  </div>

                  <p className={styles.pillarDescription}>
                    {pillar.description}
                  </p>

                  <ul className={styles.features}>
                    {pillar.features.map((feature) => (
                      <li className={styles.feature} key={feature}>
                        <span aria-hidden="true">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link className={styles.pillarCta} href={pillar.cta.href}>
                    <span>{pillar.cta.label}</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.processSection}>
        <Container>
          <header className={styles.sectionHeading}>
            <p className={styles.eyebrow}>NOTRE APPROCHE</p>

            <h2>{process.title}</h2>

            <span className={styles.headingLine} aria-hidden="true" />
          </header>

          <div className={styles.processGrid}>
            {process.steps.map((step, index) => (
              <article className={styles.processStep} key={step.title}>
                <span className={styles.stepNumber} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className={styles.processIcon}>
                  <Icon name={step.icon} />
                </span>

                <h3 className={styles.processTitle}>{step.title}</h3>

                <p className={styles.processDescription}>
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.finalSection}>
        <Container>
          <div className={styles.finalCta}>
            <p className={styles.finalEyebrow}>VOTRE PROJET, NOTRE PASSION</p>

            <h2 className={styles.finalTitle}>{finalCta.title}</h2>

            <div className={styles.actions}>
              <Link
                className={styles.primaryCta}
                href={finalCta.primary.href}
              >
                <span>{finalCta.primary.label}</span>
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                className={styles.secondaryCta}
                href={finalCta.secondary.href}
              >
                <span>{finalCta.secondary.label}</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}