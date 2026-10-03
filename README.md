# Bisley Removals & Storage — website

Next.js 15 (App Router), TypeScript, Tailwind CSS 3, Lucide icons, Zod. Font: Archivo (self-hosted via Fontsource).

## Run
```
npm install
cp .env.example .env.local   # leave blank for demo mode
npm run dev
```

## Forms
`/api/quote` and `/api/contact` validate with Zod (shared with the client), check a honeypot and rate-limit per IP.
- `RESEND_API_KEY` + `BUSINESS_EMAIL` → emails the business (customer confirmation too if `RESEND_FROM_EMAIL` is a verified domain).
- `SUPABASE_URL` + `SUPABASE_SERVICE_ROLE_KEY` → stores in `enquiries` (run `supabase/schema.sql`).
- Neither set → demo mode: the form validates and tells the visitor plainly it was not sent, with the phone number.

## Before launch — search the code for `CONFIRM`
- Photos load from the client's current GoDaddy host (`img1.wsimg.com`). Replace with originals in `/public`.
- Office days (only "09:00–17:00" is published).
- Review attribution (read from their carousel).
- Furniture removals as a standalone service.
- Storage calculator container ranges (general guide, no prices shown).
- Privacy policy: add email and effective date.

## Deploy
Push to GitHub → import in Vercel (framework preset: Next.js). Set env vars, set `NEXT_PUBLIC_SITE_URL` to the live domain.
