# Kabir Lastik Varna - website

Next.js (App Router) + TypeScript + Tailwind CSS v4, Persian RTL.

```bash
npm install
npm run dev
```

## Before it looks right
1. Export the logos from Figma (page `02 Logo`) as SVG into `public/brand/`:
   - `logo-bilingual-light.svg` (on ivory)
   - `logo-bilingual-dark.svg` (on navy)
2. Optional: put a real photo at `public/images/hero.jpg` (shows behind the hero drawing).
3. Fonts: Vazirmatn via `next/font/google`. Change in `app/layout.tsx` if 04 Typography uses another font.

## Where things live
- `app/globals.css`: brand colour tokens (from 03 Colors), base type, `container-x`
- `lib/site.ts`: all company text, contact details, categories, certificates
- `components/`: TopBar, Header, Footer, Button, Logo, FloatingContact (mobile call bar), GasketMark (hero drawing), Marquee, CategoryBento + CategoryIcon, StatsBand + CountUp, Features, CertificateList, NewsBanner, QuoteForm (opens WhatsApp, no backend yet)
- Images to add: `public/images/hero.jpg`, `public/images/iran-plast.jpg`
- Motion is limited to: hero drawing (once), product marquee, number count-up; all respect `prefers-reduced-motion`
- `app/about/page.tsx`: contains the "ماموریت ما" text

Contact links in `lib/site.ts` use real numbers (the old site had template placeholders in `tel:` / `mailto:`).
