# Personal Portfolio

A minimal, typography-first personal portfolio built with Astro and deployed on Vercel. Features a blog powered by Notion as a CMS, a photography gallery, smooth scroll animations, a custom cursor, and a multi-theme system.

> UI designed with **Claude** (Claude Design) · Developed with **Claude Code**

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Astro](https://astro.build) v6 (SSR) |
| Deployment | [Vercel](https://vercel.com) (`@astrojs/vercel` adapter) |
| CMS | [Notion API](https://developers.notion.com) |
| Markdown | [notion-to-md](https://github.com/souvikinator/notion-to-md) + [marked](https://marked.js.org) |
| Styling | Vanilla CSS (custom properties, no framework) |
| Interactivity | Vanilla JavaScript (`<script is:inline>`) |
| Language | TypeScript (lib layer) |
| Fonts | Google Fonts |

---

## Features

- **Multi-theme system** — four themes (warm, dark, mono, cool) toggled via a FAB/nav picker, persisted in `localStorage`, applied before paint to prevent FOUC
- **Blog** — posts authored in Notion, fetched at request time via the Notion API, rendered to HTML with `notion-to-md` + `marked`
- **Photography gallery** — masonry layout driven by a Notion database with aspect-ratio metadata
- **Animated hero** — parallax letter-tilt effect responding to pointer position
- **Magnetic hover + scroll reveal** — CSS-driven entrance animations with JS triggers
- **Custom cursor** — pointer follower for desktop
- **Ticker marquee** — dual-row scrolling text band
- **Smooth scroll** — native-feel page navigation

---

## Project Structure

```
src/
├── components/
│   ├── Chrome.astro        # Fixed nav, hamburger, theme toggle, scramble effect
│   ├── Hero.astro          # Parallax letter-tilt hero
│   ├── Ticker.astro        # Scrolling marquee band
│   ├── About.astro         # About section
│   ├── Work.astro          # Work/projects with hover preview panel
│   ├── Experience.astro    # Timeline / experience
│   ├── Contact.astro       # Contact section
│   └── Footer.astro        # Footer
├── layouts/
│   └── Layout.astro        # <html>, global CSS, page-wide scripts, theme init
├── lib/
│   └── notion.ts           # Notion API client — blog + gallery data fetching
├── pages/
│   ├── index.astro         # Home (composes all sections)
│   ├── blog.astro          # Blog listing
│   ├── blog/[slug].astro   # Individual post
│   └── gallery.astro       # Photography gallery
└── styles/
    └── global.css          # All styles — CSS custom properties, theme variants
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- A Notion integration token and database IDs (for blog + gallery)

### Environment Variables

Copy `.env.example` to `.env` and fill in:

```env
NOTION_TOKEN=
NOTION_DATABASE_ID=
NOTION_GALLERY_DATABASE_ID=
```

### Development

```bash
npm install
npm run dev       # http://localhost:4321
```

### Build & Preview

```bash
npm run build     # production build → dist/
npm run preview   # serve dist/ locally
```

---

## Deployment

The project uses the Astro Vercel adapter with SSR (`output: 'server'`). Push to your connected Vercel project and it deploys automatically. Environment variables must be set in the Vercel dashboard.

---

## Design & Development Credits

- **UI Design** — [Claude](https://claude.ai) (Claude Design)
- **Development** — [Claude Code](https://claude.ai/code)

---

## License

MIT
