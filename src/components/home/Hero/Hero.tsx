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
