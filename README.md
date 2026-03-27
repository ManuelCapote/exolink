# ExoLink

A personal link-sharing and product showcase app — a custom alternative to Linktree built with React.

**Live:** [kitlink.app](https://kitlink.app/)

## Features

- **Profile section** with bio, social links, and freelance availability status
- **Product showcase** with curated recommendations, descriptions, and discount badges
- **Category tabs** to filter links by section (Gear, Setups, Tools) with URL hash support
- **Dark/light mode** with system preference detection and localStorage persistence
- **Config-driven content** — all profile data, links, and sections live in JSON files for easy editing
- **Accessible** — semantic HTML, ARIA labels, keyboard navigation with visible focus indicators
- **SEO-ready** — Open Graph and Twitter Card meta tags

## Tech Stack

- React 17 (Create React App)
- CSS with CSS custom properties for theming
- GitHub Pages via `gh-pages`

## Getting Started

```bash
npm install
npm start
```

Runs at [http://localhost:3000](http://localhost:3000).

## Editing Content

All content is managed through JSON config files in `src/data/`:

| File | What it controls |
|------|-----------------|
| `profile.json` | Name, bio, email, social links, freelance status |
| `sections.json` | Link categories and items (name, description, image, link, discount) |
| `site.json` | Site title, meta description, OG image |

Images are placed in `src/assets/images/` and referenced by filename in the JSON.

## Project Structure

```
src/
  data/           # JSON config files + image loader
  assets/images/  # Product and UI images
  components/
    Header.js         # Profile section
    CategoryTabs.js   # Tab bar for filtering sections
    Links.js          # Items list with tab filtering
    items/
      LinkItem.js     # Individual product card
    Discount.js       # Conditional discount badge
    Footer.js         # Copyright footer
  App.js              # Root component, theme management
  index.js            # Entry point
```

## Deployment

```bash
npm run deploy
```

Builds and deploys to GitHub Pages.
