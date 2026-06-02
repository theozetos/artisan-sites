# Empire Artisan Sites

Three distinct demo websites for French plumbing/heating artisans, built on a single Next.js 15 app.

Built for **Outbound Empire** to showcase what an artisan website can look like beyond the generic AI/Tailwind template look.

## Demos

| URL | Client | Vibe |
|---|---|---|
| `/` | Index gallery | Black, all 3 demos |
| `/gs-climatech` | GS Climatech (Laurent Caillaud, Écouflant) | Premium, navy + copper, 20 years, 209 reviews |
| `/h2eau` | H₂eau (Giovanni Vicini, Amiens) | Dark mode, cyan glow, 60-min response promise |
| `/ur-beroa` | Ur Beroa (Raphael Pacou, Bayonne) | Basque country, red + cream, artisan heritage |

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Tech

- Next.js 15 (App Router) · React 19 · TypeScript
- Tailwind CSS v3
- framer-motion (page transitions, scroll reveals)
- lucide-react (icons)
- Google Fonts: Fraunces, Inter, Inter Tight, Lora, Geist, Geist Mono

## Deploy

```bash
vercel
```

No env vars needed — all data is hardcoded in `lib/clients.ts`.

<!-- redeploy trigger -->
