import Image from "next/image";
import Link from "next/link";

import type { HomeProjectContactData } from "@/data";

import styles from "./ProjectContactSection.module.css";

type ProjectContactSectionProps = {
  project: HomeProjectContactData;
};

export function ProjectContactSection({
  project,
}: ProjectContactSectionProps) {
  return (
    <section className={styles.section}>
      <Image
        src={project.backgroundImage.src}
        alt={project.backgroundImage.alt}
        fill
        sizes="100vw"
        className={styles.backgroundImage}
      />

      <div className={styles.overlay} />

      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>{project.eyebrow}</p>
          <h2 className={styles.title}>{project.title}</h2>
          <p className={styles.description}>{project.description}</p>
        </div>

        <div className={styles.actions}>
          <Link className={styles.primaryCta} href={project.primaryCta.href}>
            {project.primaryCta.label}
            <span aria-hidden="true">→</span>
          </Link>

          <a
            className={styles.whatsappCta}
            href={project.whatsappCta.href}
            target="_blank"
            rel="noreferrer"
          >
            <span className={styles.whatsappIcon} aria-hidden="true">
              ☎
            </span>
            {project.whatsappCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}