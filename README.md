# Bisley Removal Services: website

The redesigned website for Bisley Removal Services Ltd, a removals, packing and containerised
storage firm at Bullhousen Farm, Bisley, near Woking. Built by HD Southern Development to the
build standard in `AGENTS.md` (also copied as `CLAUDE.md`).

This branch is currently deployed as a **demo** (see "Tiers" below).

## Stack

- Next.js 15 (App Router, almost entirely static), React 19, TypeScript
- Tailwind CSS 3, with every value mapped to the design tokens in `app/tokens.css`
- Fonts: Besley (display) and Atkinson Hyperlegible Next (text), variable fonts from Fontsource,
  self-hosted and preloaded through `next/font` (`app/fonts.ts`) with metric-matched fallbacks
- Icons: Lucide. Validation: Zod (official tier only)
- No cookies, no analytics, no third-party scripts on the demo

## Run it

```bash
npm install
cp .env.example .env.local    # leave SITE_TIER blank for the demo
npm run dev                   # http://localhost:3000
```

Production check, the same way CI runs it:

```bash
npm run build && npm run start &
node audit.mjs --url http://127.0.0.1:3000 --demo   # audit.mjs from hd-southern-standards
```

`.github/workflows/standards-audit.yml` runs that audit on every push and pull request.

## Tiers

`SITE_TIER` decides what the site is allowed to do. Anything other than `official` is a demo, so
a misconfigured deploy can never publish live forms in the client's name.

| | Demo (default) | Official (`SITE_TIER=official`) |
|---|---|---|
| Search engines | `noindex` meta and `X-Robots-Tag` on every page, `robots.txt` disallows everything | Indexable, sitemap listed in `robots.txt` |
| Enquiries | Phone, email and the client's Removals Manager quote forms. No forms on this site; `/api/quote` and `/api/contact` return 404 | Quote and contact forms render as well, and deliver by email (Resend) and database (Supabase) |
| Storage calculator | Phone and email prompt | The client's Calcumate calculator on `/storage#space` |
| Footer | States that this is a concept site by HD Southern Development | No demo notice |

On the official tier, a form returns success only when the enquiry reached the database or the
office inbox. If neither worked, the API returns 503 and the visitor is told to call. Consent is a
separate, unticked checkbox. A honeypot and a per-instance rate limit deter spam.

## Where things are

| Path | What it holds |
|---|---|
| `lib/config.ts` | Business details, tier, photos and alt text, navigation. Search for `CONFIRM`. |
| `lib/content.ts` | Reused copy: services, moving-day timetable, packing, storage, checklist, the 15 reviews |
| `lib/seo.ts`, `components/site/JsonLd.tsx` | Titles, descriptions, canonicals, Open Graph, `MovingCompany` and `BreadcrumbList` data |
| `app/tokens.css`, `app/globals.css` | Design tokens and the few component classes (buttons, links, coachline, forms) |
| `components/site` | Header and mobile menu, footer, logo, breadcrumbs, page intro, photo frame, mobile action bar |
| `components/sections` | Page sections: hero, service band, timetable, reviews, storage, quote routes, video |
| `components/forms`, `app/api`, `lib/notify.ts` | Official-tier forms and delivery |
| `public/photos`, `public/brand`, `app/icon.png`, `app/favicon.ico`, `public/og.jpg` | The client's photos and logo, served from this site |
| `next.config.mjs` | Security headers, CSP, and 301 redirects for every URL on the old site |

## Old URLs

Every URL on the current GoDaddy site keeps working: the same path, or a 301 to its closest
equivalent (`/about-us`, `/contact-us`, `/privacy-policy`, `/testimonials`, `/porters`, `/video`,
`/storage-calculator`, `/removals-in-bisley.html`). The rest keep their paths.

## Before launch

1. Work through every `CONFIRM` comment with the client (trading name, "since 1985" and
   "family-run", street spelling, reviews and permission to use them, insurance wording, photos).
2. Get the full-resolution photos and a vector logo, and replace the files in `public/`.
3. Set `SITE_TIER=official` and `NEXT_PUBLIC_SITE_URL=https://bisleyremovals.co.uk`.
4. Configure Resend (verified sending domain with SPF, DKIM and DMARC) and Supabase (run
   `supabase/schema.sql`), then send a real test enquiry and confirm it arrives in the office inbox.
5. Check the privacy notice against the processors in use (section 5 and section 9).
6. Add conversion tracking for `tel:`, `mailto:`, quote-form and form-submission clicks, and update
   the privacy and cookie pages to describe it.
7. Point the domain at Vercel, keep the Microsoft 365 mail records, choose one canonical host (301 the
   www or bare domain to the other), and switch the audit step in CI to `--live`.

## Handover

The repository is `hdsoutherndevelopment/Bisley-Removals` and the demo runs on Vercel under the
HD Southern Development team. At launch, the domain (bisleyremovals.co.uk, registered with
123-Reg), the Vercel project, Resend, Supabase and Removals Manager accounts should be recorded
here and access given to the client.
