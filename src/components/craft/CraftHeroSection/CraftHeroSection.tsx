import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import type { CraftHeroData } from "@/types/craft";

import styles from "./CraftHeroSection.module.css";

type CraftHeroSectionProps = {
  data: CraftHeroData;
};

function ValueIcon({ icon }: { icon: CraftHeroData["values"][number]["icon"] }) {
  if (icon === "diamond") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M5 10 10 4h12l5 6-11 17L5 10Z" />
        <path d="m10 4 6 23L22 4M5 10h22" />
      </svg>
    );
  }

  if (icon === "heart") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 27S5 20 5 11.5C5 7.5 8 5 11.5 5c2 0 3.7 1 4.5 2.5C16.8 6 18.5 5 20.5 5 24 5 27 7.5 27 11.5 27 20 16 27 16 27Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M27 5C15 6 7 13 6 27c8-2 15-8 21-22Z" />
      <path d="M6 27c5-7 10-12 18-17" />
    </svg>
  );
}

export function CraftHeroSection({ data }: CraftHeroSectionProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.imageWrapper}>
        <Image
          src={data.image.src}
          alt={data.image.alt}
          fill
          priority
          sizes="(max-width: 800px) 100vw, 58vw"
          className={styles.image}
          style={{ objectPosition: data.image.position }}
        />
        <div className={styles.imageOverlay} />
      </div>

      <div className={styles.plumShape} />

      <Container className={styles.container}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>{data.eyebrow}</p>

          <h1 className={styles.title}>{data.title}</h1>

          <span className={styles.line} />

          <p className={styles.description}>{data.description}</p>

          <Link href={data.cta.href} className={styles.cta}>
            {data.cta.label}
            <span aria-hidden="true">→</span>
          </Link>

          <div className={styles.values}>
            {data.values.map((value) => (
              <div className={styles.value} key={value.title}>
                <span className={styles.valueIcon}>
                  <ValueIcon icon={value.icon} />
                </span>

                <span>{value.title}</span>
              </div>
            ))}
          </div>
        </div>

        <p className={styles.note}>{data.note}</p>
      </Container>
    </section>
  );
}