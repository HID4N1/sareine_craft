# Sareine Craft — Pre-Flight Checklist

Verified on 2026-09-29 after the production-readiness pass. Do not link the final custom domain until the remaining deployment-only items are complete.

## 1. Current Production Surface

Must pass:

- [x] Intended public routes are limited to `/`, `/about`, `/events`, `/craft`, `/craft/[slug]`, `/privacy`, `/terms`, and `/cookies`.
- [x] `/contact` page files were removed. WhatsApp remains the direct contact/conversion surface.
- [x] `/events/[slug]` is not present. Events remain section-based with anchors.
- [x] Auth/admin page files and route groups were removed from the production app.
- [x] Legal pages render meaningful French content through `InfoPage`.
- [x] A branded `not-found.tsx` exists for invalid URLs.
- [x] A lightweight branded `error.tsx` exists for runtime failures.

## 2. Navigation And Links

Must pass:

- [x] Header logo links to home.
- [x] Header and footer public navigation point only to valid production routes.
- [x] Footer legal links point to `/privacy`, `/cookies`, and `/terms`.
- [x] Homepage event cards now deep-link to real event sections: `#baby-shower`, `#anniversaire`, `#remise-de-diplomes`, and `#evenements-prives`.
- [x] Homepage service cards are real links instead of static articles with unused `href` data.
- [x] Events page includes the in-page event navigation.
- [x] Unconfigured Facebook/TikTok footer icons are hidden.
- [x] No linked production route intentionally renders a blank page.

## 3. Conversion

Must pass:

- [x] WhatsApp helper uses a valid `wa.me` URL with encoded messages.
- [x] Global floating WhatsApp button remains enabled.
- [x] Header/footer project CTAs include project context.
- [x] Event inquiry CTAs use event-specific copy.
- [x] Craft collection detail pages include a subtle collection-aware WhatsApp inquiry CTA.
- [x] No cart, checkout, prices, account, or e-commerce flow was introduced.

## 4. SEO And Metadata

Must pass:

- [x] Root metadata includes title, description, application name, creator/publisher, keywords, robots, OpenGraph, Twitter, icons, and manifest references.
- [x] Page metadata exists for home, about, events, craft, craft detail, privacy, terms, and cookies.
- [x] Craft collection metadata is generated from collection data.
- [x] `NEXT_PUBLIC_SITE_URL` is centralized through `src/lib/site-url.ts`.
- [x] `sitemap.ts` includes only active public pages and craft collections.
- [x] `robots.ts` disallows only removed `/contact` surfaces and `/api`.
- [x] Organization/WebSite JSON-LD uses only known project data.

Deployment-only:

- [ ] Set `NEXT_PUBLIC_SITE_URL` to the final production domain before the production build/deploy.
- [ ] Replace the temporary `https://example.com` fallback by environment configuration, not a guessed domain.
- [ ] Submit only the final production domain to search engines after DNS/HTTPS verification.
- [ ] Prepare or approve a dedicated 1200 x 630 OG image if the current logo-based preview is not sufficient.

## 5. Assets And Performance

Must pass:

- [x] Homepage hero/event PNGs were converted to WebP and references updated: `baby-shower-pink.webp`, `bridal-shower-green.webp`, `right-side.webp`, `graduation.webp`.
- [x] The old unreferenced homepage PNG originals were removed.
- [x] The filename with a space, `right side.png`, is no longer referenced.
- [x] Hero images retain `priority` and responsive `sizes`.
- [x] Next image output formats remain AVIF/WebP.

Remaining production content dependency:

- [ ] Large craft collection PNG/JPG assets still exist. They were not bulk-converted during this pass because many product images may depend on transparency, exact color, and visual approval. Optimize them after visual QA on collection pages.
- [ ] Graduation event images in `src/data/events.ts` remain marked `temporary: true`; replace or approve them before final launch.
- [ ] Brand logo PNGs are still large source files; create smaller approved display/OG variants if desired.

## 6. Accessibility And UX

Must pass:

- [x] Mobile menu has Escape close behavior and scroll lock.
- [x] Events lightbox supports Escape, previous/next arrows, focus return, and a basic focus trap.
- [x] Event index improves navigation through the long events page.
- [x] Important interactive elements are anchors or buttons according to behavior.
- [x] Focus-visible styles remain present on new fallback pages and CTAs.

Manual QA still required:

- [ ] Keyboard through header, mobile menu, event index, lightbox, footer, and all CTAs.
- [ ] Check viewports: 375px, 390px, 768px, 1024px, 1440px, 1920px.
- [ ] Inspect `/`, `/events`, `/craft`, one `/craft/[slug]`, `/about`, `/privacy`, `/terms`, `/cookies`, and an invalid URL.

## 7. Security And Configuration

Must pass:

- [x] `next.config.ts` includes conservative production headers: `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, and `X-Frame-Options`.
- [x] No strict CSP was added blindly.
- [x] `.env.example` documents `NEXT_PUBLIC_SITE_URL`.
- [x] No real secrets were added.
- [x] Analytics is not configured and no analytics dependency was introduced.
- [x] No cookie banner was added because no non-essential analytics/tracking stack is configured.

Deployment-only:

- [ ] Revisit CSP once the final domain, analytics, and any third-party services are known.
- [ ] Revisit cookie consent if analytics or non-essential cookies are added.

## 8. Cleanup

Must pass:

- [x] Source `.DS_Store` files were removed.
- [x] Empty auth/admin route files were removed.
- [x] Contact route files were removed.
- [x] Event detail route is absent.
- [x] Build metadata routes remain present: `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest`.

Known retained placeholders:

- [ ] `events: []`, `crafts: []`, and `testimonials: []` remain as future typed data structures. Remove them only when the future content model is decided.
- [ ] Old contact InfoPage data may be removed in a later data cleanup; it is not routed or linked.

## 9. Final Verification Gate

Run before deployment:

```bash
npm run lint
npm run build
```

Then production-smoke the built site:

```bash
npm run start
```

Expected direct URL behavior:

- Valid page -> 200 or intended locale redirect.
- Invalid page -> branded 404.
- Removed `/contact`, auth, and admin pages -> branded 404 or locale-aware invalid-route handling, never a blank 200 page.
- `/sitemap.xml`, `/robots.txt`, and `/manifest.webmanifest` open.

Final go/no-go rule:

- Launch only when lint/build pass, production metadata uses the real domain through `NEXT_PUBLIC_SITE_URL`, no public route is blank, legal copy is approved, and final responsive/accessibility smoke tests pass.
