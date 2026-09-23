import Link from "next/link";
import Image from "next/image";

import type { HomeHeroData } from "@/data/home";

import styles from "./Hero.module.css";

type HeroProps = {
  hero: HomeHeroData;
};

function joinClasses(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

export function Hero({ hero }: HeroProps) {
  return (
    <section className={styles.hero} aria-labelledby="home-hero-title">
      {/*
      <svg aria-hidden="true" className={styles.clipSvg} focusable="false">
        <defs>
          <clipPath clipPathUnits="objectBoundingBox" id="hero-main-image-clip">
            <path d="M 0 0 H 1 V 0.9 C 0.82 0.96 0.58 1.01 0.32 0.98 C 0.18 0.96 0.09 0.88 0.055 0.76 C 0.012 0.62 0.018 0.46 0.036 0.34 C 0.058 0.19 0.04 0.06 0 0 Z" />
          </clipPath>
        </defs>
      </svg>
      */}

      {/*
      <div className={styles.mainImage} aria-hidden="true">
        <Image
          src={`${hero.images.primary.src}?v=portrait-20260917-2`}
          alt=""
          fill
          priority
          sizes="(min-width: 1200px) 49vw, 100vw"
          className={styles.mainImagePhoto}
        />
        <svg
          aria-hidden="true"
          className={styles.mainImageBorder}
          focusable="false"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <path d="M 0 0 H 100 V 90 C 82 96 58 101 32 98 C 18 96 9 88 5.5 76 C 1.2 62 1.8 46 3.6 34 C 5.8 19 4 6 0 0 Z" />
        </svg>
      </div>

      <div className={styles.secondaryImage} aria-hidden="true">
        <Image
          src={hero.images.secondary.src}
          alt=""
          fill
          sizes="(min-width: 1200px) 25vw, 0px"
          className={styles.secondaryImagePhoto}
        />
      </div>
      */}

      <div className={styles.rightImage} aria-hidden="true">
        <Image
          src="/images/home/hero/right side.png"
          alt=""
          fill
          priority
          quality={86}
          sizes="(min-width: 1200px) 49vw, 100vw"
          className={styles.rightImagePhoto}
        />
      </div>

      <div
        className={joinClasses(
          styles.heroInner,
          "mx-auto w-full max-w-[var(--container-max)] px-[var(--page-padding)]",
        )}
      >
        <div
          className={joinClasses(
            styles.content,
            "flex min-w-0 max-w-[39rem] flex-col",
          )}
        >
          <div
            className={joinClasses(
              styles.eyebrowRow,
              "mb-8 flex items-center gap-3 text-primary sm:gap-4",
            )}
          >
            <span className="h-px w-12 bg-current" aria-hidden="true" />
            <p className="type-label min-w-0 max-w-[13rem] text-[0.58rem] text-primary sm:max-w-none sm:text-xs">
              {hero.eyebrow}
            </p>
          </div>

          <h1
            className={joinClasses(
              styles.headline,
              "font-display font-medium text-secondary",
            )}
            id="home-hero-title"
          >
            {hero.headline.map((line, lineIndex) => (
              <span className="block" key={`${lineIndex}-${line.words[0]?.text}`}>
                {line.words.map((word, wordIndex) => (
                  <span
                    className={word.highlight ? styles.highlight : undefined}
                    key={`${word.text}-${wordIndex}`}
                  >
                    {word.text}
                  </span>
                ))}
              </span>
            ))}
          </h1>

          <span className={styles.divider} aria-hidden="true" />

          <p
            className={joinClasses(
              styles.description,
              "mt-7 max-w-[34rem] text-base leading-8 text-charcoal/78 sm:text-lg",
            )}
          >
            {hero.description}
          </p>

          <div
            className={joinClasses(
              styles.ctaGroup,
              "mt-9 flex flex-wrap gap-3 sm:gap-4",
            )}
          >
            <Link
              className={joinClasses(
                styles.primaryCta,
                "group inline-flex min-h-13 items-center justify-center gap-3 rounded-xl border border-plum-700 bg-secondary px-7 text-sm font-bold transition-colors duration-200 hover:bg-plum-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring sm:px-8",
              )}
              href={hero.primaryCta.href}
            >
              <span>{hero.primaryCta.label}</span>
              <span
                className="text-primary transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                -&gt;
              </span>
            </Link>
            <Link
              className="group inline-flex min-h-13 items-center justify-center gap-3 rounded-xl border border-secondary/70 bg-transparent px-7 text-center text-[0.8125rem] font-bold leading-tight text-secondary transition-colors duration-200 hover:border-plum-700 hover:bg-gold-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring sm:px-8 sm:text-sm"
              href={hero.secondaryCta.href}
            >
              <span>{hero.secondaryCta.label}</span>
              <span
                className="text-primary transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                -&gt;
              </span>
            </Link>
          </div>

          <div
            className={joinClasses(
              styles.microCopy,
              "mt-12 flex items-center gap-4 text-primary sm:mt-16",
            )}
          >
            <span className="h-px flex-1 bg-current/70" aria-hidden="true" />
            <p className="type-label max-w-[10rem] shrink-0 text-center text-[0.56rem] text-primary sm:max-w-none sm:text-[0.68rem]">
              {hero.microCopy}
            </p>
            <span className="h-px flex-1 bg-current/70" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
