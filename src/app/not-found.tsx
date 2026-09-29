import Image from "next/image";
import Link from "next/link";

import { siteData } from "@/data/site";

export default function NotFound() {
  return (
    <main className="grid min-h-dvh place-items-center bg-ivory px-[var(--page-padding)] py-20 text-secondary">
      <section className="mx-auto max-w-2xl text-center">
        <Image
          alt={siteData.name}
          className="mx-auto h-auto w-44"
          height={214}
          priority
          src={siteData.brand.logoHorizontal}
          width={512}
        />
        <p className="mt-12 type-label text-primary">Page introuvable</p>
        <h1 className="mt-5 font-display text-[clamp(3rem,8vw,5.5rem)] font-medium leading-[0.96]">
          Cette page n&apos;est pas disponible.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-charcoal/72">
          Le lien suivi n&apos;existe pas ou n&apos;est plus actif. Vous pouvez
          revenir à l&apos;accueil pour retrouver les créations et événements
          Sareine.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-secondary px-6 font-sans text-sm font-bold text-ivory transition hover:bg-plum-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            href="/"
          >
            Retour à l&apos;accueil
          </Link>
          <Link
            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-secondary/45 px-6 font-sans text-sm font-bold text-secondary transition hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            href="/events"
          >
            Voir les événements
          </Link>
        </div>
      </section>
    </main>
  );
}
