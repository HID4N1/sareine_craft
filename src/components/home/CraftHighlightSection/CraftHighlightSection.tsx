import Image from "next/image";

import { Button } from "@/components/ui/Button";
import type { HomeCraftHighlightData } from "@/data";

import styles from "./CraftHighlightSection.module.css";

type CraftHighlightSectionProps = {
  craft: HomeCraftHighlightData;
};

export function CraftHighlightSection({
  craft,
}: CraftHighlightSectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.mainImage}>
        <Image
          src={craft.images.main.src}
          alt={craft.images.main.alt}
          fill
          loading="eager"
          sizes="(max-width: 768px) 100vw, 34vw"
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <p className={styles.eyebrow}>{craft.eyebrow}</p>

        <h2 className={styles.title}>{craft.title}</h2>

        <p className={styles.description}>{craft.description}</p>

        <Button className={styles.cta} href={craft.cta.href} arrow>
          {craft.cta.label}
        </Button>
      </div>

      <div className={styles.gallery}>
        <div className={styles.secondaryImage}>
          <Image
            src={craft.images.secondary.src}
            alt={craft.images.secondary.alt}
            fill
            sizes="(max-width: 768px) 50vw, 18vw"
            className={styles.image}
          />
        </div>

        <div className={styles.detailCard}>
          <div className={styles.detailImage}>
            <Image
              src={craft.images.detail.src}
              alt={craft.images.detail.alt}
              fill
              sizes="(max-width: 768px) 50vw, 14vw"
              className={styles.image}
            />
          </div>

          <p className={styles.note}>{craft.note}</p>
        </div>
      </div>
    </section>
  );
}