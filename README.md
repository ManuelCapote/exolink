# ExoLink

A personal link-sharing and product showcase app — a custom alternative to Linktree built with Next.js.

**Live:** https://kitlink-vgfskw6qu-manuelcapotes-projects.vercel.app

## Features

- **Profile section** with bio, social links, and freelance availability status
- **Product showcase** with curated recommendations, descriptions, and discount badges
- **Category tabs** to filter links by section (Gear, Setups, Tools) with URL hash support
- **Dark/light mode** with system preference detection and localStorage persistence
- **Config-driven content** — all profile data, links, and sections live in JSON files for easy editing
- **Accessible** — semantic HTML, ARIA labels, keyboard navigation with visible focus indicators
- **SEO-ready** — Open Graph and Twitter Card meta tags via Next.js metadata API

## Tech Stack

- Next.js 16 (App Router) + React 19
- CSS with CSS custom properties for theming
- Deployed on Vercel
- Plausible analytics with outbound link tracking

## Getting Started

```bash
npm install
npm run dev
```

Runs at [http://localhost:3000](http://localhost:3000).

## Editing Content

All content is managed through JSON config files in `src/data/`:

| File | What it controls |
|------|-----------------|
| `profile.json` | Name, bio, email, social links, freelance status |
| `sections.json` | Link categories and items (name, description, image, link, discount) |
| `site.json` | Site title, meta description, OG image |

Images are placed in `public/images/` and referenced by filename in the JSON.

## Project Structure

```
public/
  images/               # Product and UI images
src/
  app/
    layout.jsx          # Root layout + metadata
    page.jsx            # Home page
    globals.css         # Global styles
  data/                 # JSON config files + image path helper
  components/
    Header.js           # Profile section
    CategoryTabs.js     # Tab bar for filtering sections
    Links.js            # Items list with tab filtering
    items/
      LinkItem.js       # Individual product card
    Discount.js         # Conditional discount badge
    Footer.js           # Copyright footer
    ErrorBoundary.js    # Client error boundary
  App.js                # Root component, theme management
```

## Deployment

Connected to Vercel via GitHub. Pushes to `main` deploy automatically.

Manual deploy:

```bash
vercel --prod
```
