import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import type { CraftStoryData } from "@/types/craft";

import styles from "./CraftStorySection.module.css";

type CraftStorySectionProps = {
  data: CraftStoryData;
};

function StoryIcon({
  icon,
}: {
  icon: CraftStoryData["values"][number]["icon"];
}) {
  if (icon === "diamond") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M5 10 10 4h12l5 6-11 17L5 10Z" />
        <path d="m10 4 6 23L22 4M5 10h22" />
      </svg>
    );
  }

  if (icon === "leaf") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M27 5C15 6 7 13 6 27c8-2 15-8 21-22Z" />
        <path d="M6 27c5-7 10-12 18-17" />
      </svg>
    );
  }

  if (icon === "hand") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M10 17V8a2 2 0 0 1 4 0v7M14 15V5a2 2 0 0 1 4 0v10M18 15V7a2 2 0 0 1 4 0v10M22 17v-6a2 2 0 0 1 4 0v9c0 5-4 8-9 8h-1c-4 0-7-2-9-5l-3-5c-1-2 2-4 4-2l2 1Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M16 27S5 20 5 11.5C5 7.5 8 5 11.5 5c2 0 3.7 1 4.5 2.5C16.8 6 18.5 5 20.5 5 24 5 27 7.5 27 11.5 27 20 16 27 16 27Z" />
    </svg>
  );
}

export function CraftStorySection({ data }: CraftStorySectionProps) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.main}>
          <div className={styles.images}>
            <div className={styles.primaryImage}>
              <Image
                src={data.images.primary.src}
                alt={data.images.primary.alt}
                fill
                sizes="(max-width: 800px) 80vw, 38vw"
                className={styles.image}
              />
            </div>

            <div className={styles.secondaryImage}>
              <Image
                src={data.images.secondary.src}
                alt={data.images.secondary.alt}
                fill
                sizes="(max-width: 800px) 48vw, 20vw"
                className={styles.image}
              />
            </div>
          </div>

          <div className={styles.content}>
            <p className={styles.eyebrow}>{data.eyebrow}</p>
            <h2 className={styles.title}>{data.title}</h2>
            <span className={styles.line} />
            <p className={styles.description}>{data.description}</p>

            <Link href={data.cta.href} className={styles.cta}>
              {data.cta.label}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className={styles.values}>
          {data.values.map((value) => (
            <article className={styles.value} key={value.title}>
              <span className={styles.icon}>
                <StoryIcon icon={value.icon} />
              </span>

              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}