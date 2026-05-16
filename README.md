# jomlimteh.com — Wedding Website

Yan Yang & Bee Hui · 20 September 2026 · Count Cuisine, KL

## What's new in this version

- **Italiana** display font for the hero names (replaces Cormorant Garamond at large sizes)
- **Vertical Chinese poem** on hero right edge (喜结良缘 / 天作之合) — desktop only
- **Red 囍 seal stamps** as accent elements
- **Story rewritten** as a vertical timeline with your real 8-year arc (2018 → 2022 → 2024 → 2026)
- **Parents block** alignment fixed — 先严 label space reserved on both columns
- **Dress Code and FAQ sections removed**
- **Background music** — Lee Seung Chul "My Love" plays on autoplay attempt with a floating play/pause pill bottom-right as fallback
- **Dinner time updated** to 7:30 PM
- **Next.js patched** to 14.2.33 (no more security warning)

---

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

---

## Section order

Hero → Countdown → Story → Schedule → Venue → RSVP → Footer

Music player floats bottom-right on all sections.

---

## Where to edit things

- All wedding content: `src/lib/config.ts`
- Story timeline copy: `src/components/Story.tsx` (the `milestones` array at the top)
- Background music: replace `public/music/wedding.mp3` with any other MP3
- FAQ — deleted. If you want to add it back later, restore from git history.

---

## Deploy

See `DEPLOY.md` for the GitHub + Vercel + DNS walkthrough.

囍
