import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import type {
  CraftCategoryFilter,
  CraftCollection,
  CraftPageData,
} from "@/types/craft";

import styles from "./CraftCreationsSection.module.css";

type CraftCreationsSectionProps = {
  data: CraftPageData["creations"];
  activeCategory: CraftCategoryFilter;
};

const categoryLabels: Record<CraftCollection, string> = {
  gourmandise: "Bougie gourmande",
  princesse: "Collection princesse",
  silhouette: "Collection silhouette",
  ange: "Ange & figurine",
  floral: "Création florale",
};

export function CraftCreationsSection({
  data,
  activeCategory,
}: CraftCreationsSectionProps) {
  const visibleItems =
    activeCategory === "all"
      ? data.items
      : data.items.filter((item) => item.category === activeCategory);

  return (
    <section id="creations" className={styles.section}>
      <Container>
        <header className={styles.header}>
          <div>
            <p className={styles.eyebrow}>{data.eyebrow}</p>
            <h2 className={styles.title}>{data.title}</h2>
            <p className={styles.description}>{data.description}</p>
          </div>

          <p className={styles.count}>
            {visibleItems.length}{" "}
            {visibleItems.length > 1 ? "créations" : "création"}
          </p>
        </header>

        <div className={styles.grid}>
          {visibleItems.map((item) => (
            <article className={styles.card} key={item.id}>
              <div className={styles.imageWrapper}>
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 25vw"
                  className={styles.image}
                  style={{ objectPosition: item.image.position }}
                />

                <span className={styles.badge}>
                  Fait main
                </span>
              </div>

              <div className={styles.cardContent}>
                <div>
                  <p className={styles.category}>
                    {categoryLabels[item.category]}
                  </p>
                  <h3 className={styles.cardTitle}>{item.name}</h3>
                </div>

                <Link
                  href="/contact"
                  className={styles.cardLink}
                  aria-label={`Demander des informations sur ${item.name}`}
                >
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}