"use client";

import Link from "next/link";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="grid min-h-dvh place-items-center bg-ivory px-[var(--page-padding)] py-20 text-secondary">
      <section className="mx-auto max-w-xl text-center">
        <p className="type-label text-primary">Erreur</p>
        <h1 className="mt-5 font-display text-[clamp(3rem,8vw,5.25rem)] font-medium leading-[0.96]">
          Une erreur est survenue.
        </h1>
        <p className="mt-6 text-base leading-8 text-charcoal/72">
          La page n&apos;a pas pu être affichée correctement. Vous pouvez
          réessayer ou revenir à l&apos;accueil.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <button
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-secondary px-6 font-sans text-sm font-bold text-ivory transition hover:bg-plum-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            onClick={reset}
            type="button"
          >
            Réessayer
          </button>
          <Link
            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-secondary/45 px-6 font-sans text-sm font-bold text-secondary transition hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            href="/"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </section>
    </main>
  );
}
