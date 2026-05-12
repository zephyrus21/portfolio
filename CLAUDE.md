# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server (localhost:4321)
npm run build     # production build → dist/
npm run preview   # serve the dist/ build locally
```

No linter or test suite is configured.

## Architecture

Single-page Astro portfolio. No framework integrations — all interactivity is vanilla JS via `<script is:inline>` blocks.

**Entry point:** `src/pages/index.astro` — imports and composes all components in order.

**Layout:** `src/layouts/Layout.astro` — owns the `<html>/<head>`, Google Fonts, global CSS import, and all page-wide scripts (custom cursor, magnetic hover, scroll reveal, scroll progress, `applyTweaks`/`window.__applyTweaks`). Theme is applied in `<head>` before paint to prevent FOUC.

**Styles:** `src/styles/global.css` — all CSS lives here (no scoped component styles). CSS custom properties on `:root` drive theming (`--bg`, `--ink`, `--ink-soft`, `--rule`, `--serif`, `--sans`, `--mono`, `--gutter`, `--pad-y`). Four theme variants (`theme-warm`, `theme-dark`, `theme-mono`, `theme-cool`) swap those vars via body class.

**Components** (`src/components/`): Each `.astro` file is a self-contained section. Components that need interactivity include their own `<script is:inline>` at the bottom:
- `Chrome.astro` — fixed nav, mobile hamburger, theme toggle, scramble text effect
- `Hero.astro` — parallax letter-tilt via pointer position + `window.__heroMotion` mode flag
- `Ticker.astro` — fills dual marquee rows with JS
- `Work.astro` — hover-follows-cursor work preview panel
- `About/Experience/Writing/Contact/Footer.astro` — static markup only

**Script globals:** `window.__TWEAK_DEFAULTS__`, `window.__applyTweaks`, `window.__heroMotion` — set in Layout, consumed by Chrome and Hero. Use `is:inline` (not bundled modules) to preserve execution order and these globals.

**`index.html` at root** — legacy single-file version kept as reference; the Astro build output in `dist/` is the canonical artifact.
