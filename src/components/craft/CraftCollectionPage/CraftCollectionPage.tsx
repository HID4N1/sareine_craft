"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import type {
  CraftCollectionData,
  CraftCollectionItem,
} from "@/types/craft";

import styles from "./CraftCollectionPage.module.css";

type CraftCollectionPageProps = {
  collection: CraftCollectionData;
};

function CollectionItemCard({
  item,
}: {
  item: CraftCollectionItem;
}) {
  const [selectedColorId, setSelectedColorId] = useState(
    item.colors?.[0]?.id,
  );

  const selectedColor = item.colors?.find(
    (color) => color.id === selectedColorId,
  );

  const displayedImage = selectedColor?.image ?? item.image;

  return (
    <article className={styles.card}>
      <div className={styles.cardImageWrapper}>
        <Image
          src={displayedImage.src}
          alt={displayedImage.alt}
          fill
          quality={78}
          sizes="(max-width: 650px) 100vw, (max-width: 1000px) 50vw, 33vw"
          className={styles.cardImage}
          style={{
            objectPosition: displayedImage.position,
            transform: displayedImage.zoom
              ? `scale(${displayedImage.zoom})`
              : undefined,
            transformOrigin:
              displayedImage.position ?? "center",
          }}
        />

        <span className={styles.handmade}>Fait main</span>
      </div>

      <div className={styles.cardContent}>
        <p className={styles.cardEyebrow}>CRÉATION ARTISANALE</p>
        <h2 className={styles.cardTitle}>{item.name}</h2>
        <p className={styles.cardDescription}>{item.description}</p>

        {item.colors && item.colors.length > 0 ? (
          <div className={styles.colorSection}>
            <p className={styles.colorLabel}>
              Couleur :
              <strong>{selectedColor?.label}</strong>
            </p>

            <div className={styles.colors}>
              {item.colors.map((color) => {
                const isSelected = color.id === selectedColorId;

                return (
                  <button
                    key={color.id}
                    type="button"
                    className={`${styles.colorButton} ${
                      isSelected ? styles.selectedColor : ""
                    }`}
                    style={{ backgroundColor: color.hex }}
                    aria-label={`Choisir la couleur ${color.label}`}
                    aria-pressed={isSelected}
                    title={color.label}
                    onClick={() => setSelectedColorId(color.id)}
                  />
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </article>
  );
}

export function CraftCollectionPage({
  collection,
}: CraftCollectionPageProps) {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <Container className={styles.heroGrid}>
          <div className={styles.heroImageWrapper}>
            <Image
              src={collection.cover.src}
              alt={collection.cover.alt}
              fill
              priority
              quality={84}
              sizes="(max-width: 800px) 100vw, 50vw"
              className={styles.heroImage}
              style={{
                objectPosition: collection.cover.position,
                transform: collection.cover.zoom
                  ? `scale(${collection.cover.zoom})`
                  : undefined,
                transformOrigin:
                  collection.cover.position ?? "center",
              }}
            />
          </div>

          <div className={styles.heroContent}>
            <Link href="/craft" className={styles.backLink}>
              <span aria-hidden="true">←</span>
              Retour aux collections
            </Link>

            <p className={styles.eyebrow}>{collection.eyebrow}</p>

            <h1 className={styles.title}>{collection.name}</h1>

            <p className={styles.subtitle}>{collection.title}</p>

            <span className={styles.line} />

            <p className={styles.description}>
              {collection.description}
            </p>

            <Link href="#modeles" className={styles.heroCta}>
              Voir les modèles
              <span aria-hidden="true">↓</span>
            </Link>
          </div>
        </Container>
      </section>

      <section id="modeles" className={styles.models}>
        <Container>
          <header className={styles.modelsHeader}>
            <p className={styles.eyebrow}>LA COLLECTION</p>
            <h2>Choisissez votre modèle.</h2>
            <p>
              Sélectionnez un modèle et, lorsqu’elles sont disponibles,
              choisissez ses couleurs.
            </p>
          </header>

          <div className={styles.grid}>
            {collection.items.map((item) => (
              <CollectionItemCard item={item} key={item.id} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
