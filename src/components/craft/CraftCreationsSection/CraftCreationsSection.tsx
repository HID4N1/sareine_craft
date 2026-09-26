import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import type {
  CraftCollectionData,
  CraftPageData,
} from "@/types/craft";

import styles from "./CraftCreationsSection.module.css";

type CraftCreationsSectionProps = {
  data: Pick<
    CraftPageData["creations"],
    "eyebrow" | "title" | "description"
  >;
  collections: CraftCollectionData[];
};

export function CraftCreationsSection({
  data,
  collections,
}: CraftCreationsSectionProps) {
  return (
    <section id="creations" className={styles.section}>
      <Container>
        <header className={styles.header}>
          <div>
            <p className={styles.eyebrow}>{data.eyebrow}</p>
            <h2 className={styles.title}>{data.title}</h2>
            <p className={styles.description}>{data.description}</p>
          </div>
        </header>

        <div className={styles.grid}>
          {collections.map((collection) => (
            <Link
              className={styles.card}
              href={`/craft/${collection.slug}`}
              key={collection.slug}
              aria-label={`Découvrir la collection ${collection.name}`}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={collection.cover.src}
                  alt={collection.cover.alt}
                  fill
                  quality={78}
                  sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 25vw"
                  className={styles.image}
                  style={{
                    objectPosition: collection.cover.position,
                    transform: collection.cover.zoom
                      ? `scale(${collection.cover.zoom})`
                      : undefined,
                    transformOrigin:
                      collection.cover.position ?? "center",
                  }}
                />

                <span className={styles.badge}>Collection</span>
              </div>

              <div className={styles.cardContent}>
                <div>
                  <p className={styles.category}>
                    {collection.eyebrow}
                  </p>

                  <h3 className={styles.cardTitle}>
                    {collection.name}
                  </h3>

                  <p className={styles.shortDescription}>
                    {collection.shortDescription}
                  </p>
                </div>

                <span className={styles.cardLink} aria-hidden="true">
                  <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}