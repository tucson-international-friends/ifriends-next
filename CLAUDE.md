# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm install` - Install dependencies
- `npm run dev` - Start the Astro dev server
- `npm run build` - Build for production (static pages + Vercel serverless functions)
- `npm run preview` - Preview the production build locally

## Code Quality

- TypeScript via Astro's strict config. Note: `astro build` does NOT type-check
  (it strips types). Run `npx astro check` for type-checking (needs `@astrojs/check`).
- Prettier config in `.prettierrc`.

## Project Architecture

A website for Tucson International Friends built with **Astro + Tailwind CSS v4**.

**Core Framework:**
- Astro 6 (file-based routing in `src/pages/*.astro`)
- Tailwind CSS v4 via the `@tailwindcss/vite` plugin (CSS-first config — no `tailwind.config.js`)
- Svelte 5 for interactive islands (`@astrojs/svelte`)
- Deployed to Vercel via `@astrojs/vercel`

**Rendering model:**
- `output: 'static'` by default — most pages are prerendered to HTML at build.
- `about` and `newsletters` opt into SSR with `export const prerender = false` because they fetch live data from Notion. These run as Vercel serverless functions.

**Data Layer:**
- Notion API via `@notionhq/client` (requires `NOTION_API_KEY`, set in Vercel project env). See `.env.example`.
- Page/nav configuration in `src/data/*.json`; route resolution in `src/lib/page.js`.

**Structure:**
- `src/pages/` - one `.astro` file per route
- `src/layout/MainLayout.astro` - wraps every page with `<head>` (meta, GTM/GA tags), Navbar, and Footer
- `src/components/` - section + UI components (`.astro`), plus `Signup.svelte` (the only JS island)
- `src/lib/` - Notion client, page routing, image URL helpers, markdown rendering (`marked`)
- `src/styles/global.css` - Tailwind import + `@theme` (brand palette, fonts, custom breakpoints) + base rules
- `public/` - static assets (images, logos, favicon, newsletter PDF)

**Key Patterns:**
- The visual theme lives in `src/styles/global.css` `@theme`: brand colors (main-brand `#47789e`, dark-shades `#212b40`, etc.), Open Sans body / Poppins headings, and custom breakpoints (sm 460 / md 850 / lg 1024 / xl 1440) that mirror the original Bootstrap grid.
- Interactivity is CSS-only where possible (FAQ = `<details>`, guidelines tabs = radio inputs, navbar collapse = checkbox). Only the Signup modal ships JS, hydrated `client:idle`.
- Markdown content strings are rendered at build/SSR via `src/lib/markdown.js` (no client-side markdown).

**Environment:**
- Deployed via Vercel; redirects in `vercel.json`.
- `master` branch auto-deploys on merge.
