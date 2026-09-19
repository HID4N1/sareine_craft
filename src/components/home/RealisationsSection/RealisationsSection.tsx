"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import type { HomeRealisationsData } from "@/data";

import styles from "./RealisationsSection.module.css";

type RealisationsSectionProps = {
  realisations: HomeRealisationsData;
};

export function RealisationsSection({
  realisations,
}: RealisationsSectionProps) {
  const galleryRef = useRef<HTMLDivElement>(null);

  function scrollGallery(direction: "previous" | "next") {
    galleryRef.current?.scrollBy({
      left: direction === "next" ? 320 : -320,
      behavior: "smooth",
    });
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow}>{realisations.eyebrow}</p>
            <h2 className={styles.title}>{realisations.title}</h2>
          </div>

          <Link className={styles.cta} href={realisations.cta.href}>
            {realisations.cta.label}
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className={styles.gallery} ref={galleryRef}>
          {realisations.items.map((item) => (
            <Link
              className={styles.card}
              href={item.href}
              key={item.id}
            >
              <Image
                src={item.image.src}
                alt={item.image.alt}
                fill
                sizes="(max-width: 640px) 75vw, 20vw"
                className={styles.cardImage}
              />

              <span className={styles.cardTitle}>{item.title}</span>
            </Link>
          ))}
        </div>

        <div className={styles.testimonialRow}>
          <button
            type="button"
            className={styles.arrow}
            aria-label="Voir les réalisations précédentes"
            onClick={() => scrollGallery("previous")}
          >
            ←
          </button>

          <div className={styles.testimonial}>
            <div className={styles.avatar}>
              <Image
                src={realisations.testimonial.avatar.src}
                alt={realisations.testimonial.avatar.alt}
                fill
                sizes="80px"
                className={styles.avatarImage}
              />
            </div>

            <div>
              <p className={styles.quote}>
                “{realisations.testimonial.quote}”
              </p>

              <div
                className={styles.rating}
                aria-label={`${realisations.testimonial.rating} étoiles sur 5`}
              >
                {Array.from(
                  { length: realisations.testimonial.rating },
                  (_, index) => (
                    <span aria-hidden="true" key={index}>
                      ★
                    </span>
                  ),
                )}
              </div>

              <p className={styles.author}>
                — {realisations.testimonial.author}
              </p>
            </div>
          </div>

          <button
            type="button"
            className={styles.arrow}
            aria-label="Voir les réalisations suivantes"
            onClick={() => scrollGallery("next")}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}