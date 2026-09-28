# Sareine Craft — Pre-Flight Checklist

Use this as the practical launch checklist after the website audit. Work from top to bottom. Do not deploy until every `Must Pass` item is complete.

## 1. Confirm The Current Baseline

Run these first:

```bash
npm run lint
npm run build
git status --short
```

Must pass:

- `npm run lint` completes without errors.
- `npm run build` completes without errors.
- `git status --short` only shows changes you expect.

## 2. Fix Blank Public Routes

These routes are public and should not stay blank:

- `/contact`
- `/privacy`
- `/cookies`
- `/terms`

Choose one action for each route:

| Route | Best pre-flight action | Alternative |
|---|---|---|
| `/contact` | Add a simple contact page with WhatsApp CTA | Redirect to WhatsApp or remove links |
| `/privacy` | Add privacy policy content | Add temporary noindex page |
| `/cookies` | Add cookie policy content | Add temporary noindex page |
| `/terms` | Add terms content | Add temporary noindex page |

Must pass:

- No linked public route renders an empty page.
- Footer legal links open meaningful content.
- Contact path gives users a clear way to reach Sareine.

## 3. Decide Admin And Auth Route Strategy

Current auth/admin routes exist but are unfinished:

- `/admin`
- `/admin/*`
- `/login`
- `/forgot-password`
- `/reset-password`

Recommended pre-flight action:

- If admin/auth is not ready, keep them blocked from discovery and add route-level `noindex`.
- If admin/auth is ready, add actual guards before launch.

Must pass:

- Admin pages are not publicly useful without authentication.
- Auth/admin routes are either protected, removed, or explicitly `noindex`.

## 4. Decide Event Detail Strategy

The events experience is section-based. Do not leave a blank detail route if one exists.

Choose one:

- Remove the empty `/events/[slug]` route if event details are not launching now.
- Implement event detail pages if each event needs its own URL.
- Redirect unknown event detail URLs back to `/events`.

Must pass:

- No event URL opens a blank page.
- Homepage event cards take users to the right section or page.

## 5. Fix Navigation Expectations

Audit items to resolve:

- Homepage event category cards all go to `/events`.
- Service cards look clickable but are rendered as static articles.

Recommended pre-flight action:

- Deep-link event category cards to event sections, for example `/events#baby-shower`.
- Either make service cards real links or remove the visual affordance that makes them look clickable.

Must pass:

- Clickable-looking UI is actually clickable.
- Users can jump from homepage categories to the right event content.

## 6. Standardize SEO Metadata

Already done:

- `/sitemap.xml`
- `/robots.txt`
- `/manifest.webmanifest`
- Add stronger metadata to home, events, craft, legal, and contact pages.
- Add canonical URLs where appropriate.
- Add OpenGraph and Twitter metadata consistently.
- Add route-level `noindex` for any intentionally unfinished routes.

Still needed:

- Confirm `NEXT_PUBLIC_SITE_URL` is set to the production domain before deployment.

Must pass:

- Important public pages have title and description.
- Blank or temporary pages are not indexable.
- `NEXT_PUBLIC_SITE_URL` is set correctly in production.

## 7. Optimize Heavy Assets

Priority assets from the audit:

- `public/images/home/hero/bridal-shower-green.png`
- `public/images/craft/collections/Cakes/Cakes_02.png`
- `public/images/home/hero/right side.png`
- `public/images/home/events/graduation.png`
- `public/brand/sareine-logo-horizontal.png`

Recommended pre-flight action:

- Convert large PNGs to WebP or AVIF where transparency is not required.
- Add smaller logo display variants.
- Rename `right side.png` during a coordinated asset cleanup, then update references.

Must pass:

- Above-the-fold images remain visually clean.
- Large images are reduced without breaking existing references.
- Build still passes after asset changes.

## 8. Accessibility QA

Manual checks:

- Keyboard through header, mobile menu, CTAs, lightbox, and footer.
- Confirm Escape closes the mobile menu and lightbox.
- Confirm focus is visible.
- Confirm event lightbox does not trap users in a broken state.
- Check text contrast over hero/event images.

Must pass:

- Every interactive element can be reached by keyboard.
- Focus state is visible.
- Modal/lightbox behavior is predictable.

## 9. Mobile Visual QA

Test these viewport widths:

- 360px
- 390px
- 768px
- 1024px
- 1440px

Pages to inspect:

- `/`
- `/events`
- `/craft`
- `/craft/bougies-gourmandes`
- `/about`
- `/contact`
- `/privacy`
- `/cookies`
- `/terms`

Must pass:

- No text overlaps.
- Floating WhatsApp does not hide important CTAs.
- Event sections are not awkwardly tall on mobile.
- Craft detail pages remain readable on mobile.

## 10. Final Build Gate

Run:

```bash
npm run lint
npm run build
```

Then verify generated metadata routes in the build output:

- `/sitemap.xml`
- `/robots.txt`
- `/manifest.webmanifest`

Must pass:

- Lint passes.
- Build passes.
- Metadata routes are generated.

## 11. Production Environment Check

Before deployment, confirm:

- `NEXT_PUBLIC_SITE_URL` is the real production URL.
- WhatsApp number is correct.
- Brand logo assets load.
- Social links are correct.
- Legal/contact copy is approved.

Must pass:

- Production URLs in sitemap and robots use the final domain.
- No staging or localhost URLs appear in public metadata.

## 12. Deployment Smoke Test

After deployment, open the production site and verify:

- Home loads.
- Navigation links work.
- Footer legal links work.
- Contact route works.
- WhatsApp CTA opens the expected chat.
- Craft collection pages load.
- `/sitemap.xml` opens.
- `/robots.txt` opens.
- `/manifest.webmanifest` opens.

Final go/no-go rule:

- Launch only when no public route is blank, lint/build pass, and production metadata points at the correct domain.
