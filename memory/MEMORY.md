# Junova Site Memory

## Stack
- Next.js 16, React 19, TypeScript, Tailwind CSS, Framer Motion
- `@tailwindcss/typography` installed for prose content
- No database — content stored in TypeScript data files
- Deployed on Vercel

## Project Structure
- `app/` — Next.js App Router pages
- `components/NavBar.tsx` — sticky navbar with links array
- `components/Footer.tsx` — footer
- `components/SiteShell.tsx` — layout wrapper (wraps NavBar + main + Footer; no route suppression needed)
- Tailwind config: `tailwind.config.js`

## Pages (as of April 2026 redesign)
- `/` — Personal landing (Nicole name, tagline, featured cards, social links)
- `/writing` — Articles (Medium API) + Appearances (YouTube API); client component
- `/projects` — Portfolio of built projects; data in `app/projects/projects.ts`
- `/about` — Bio + current role callout + nicole.jpg photo
- `/contact` — Simple link cards (LinkedIn, Medium, GitHub, email); no form

## API Routes (kept)
- `/api/medium` — Fetches RSS from Medium @nicole_68130
- `/api/youtube` — Fetches playlist PL6JaEFg7KI7dPH_zKbynhFU2SLOTYepOR from YouTube Data API

## Redirects (in next.config.mjs)
- `/people` → `/about`
- `/processes`, `/product`, `/client-login`, `/studio` → `/`
- `/media`, `/learn`, `/learn/:path*` → `/writing`

## Projects Data
- Hardcoded in `app/projects/projects.ts` as TypeScript array
- 4 projects: CommissionFlow, ARFlow, BPM Drop, Acumatica ERP Skill
- CommissionFlow, ARFlow, BPM Drop have placeholder `null` URLs (TODO: fill in)
- Acumatica ERP Skill GitHub: https://github.com/Nikki72581/acumatica-erp-skill

## Deleted (April 2026 redesign)
- Sanity CMS (sanity/, lib/sanity/, app/studio/, sanity.config.ts, sanity.cli.ts)
- Pages: /people, /processes, /product, /media, /learn, /client-login
- Packages: sanity, next-sanity, @portabletext/react, styled-components

## Nicole's Links
- LinkedIn: https://www.linkedin.com/in/nicole-ronchetti-65242523/
- Medium: https://medium.com/@nicole_68130
- GitHub: https://github.com/Nikki72581
- Instagram: https://www.instagram.com/nicoleronchetti/
- Email: nicole@junova.io
- Employer: Stellar One (https://www.stellarone.io/) — Acumatica Gold-Certified Partner
