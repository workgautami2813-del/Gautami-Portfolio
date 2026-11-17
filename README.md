# Gautami Kharwar · Portfolio

Personal portfolio of Gautami Kharwar, Senior Product Designer for AI products and e-commerce.

**Live site:** https://workgautami2813-del.github.io/Gautami-Portfolio/

Built with [Next.js](https://nextjs.org) (App Router) as a static site, deployed to GitHub Pages by GitHub Actions on every push to `main`.

## Edit the content
All text (profile, highlights, case studies, experience, skills) is in `data/content.js`.

## Project structure
- `app/page.js`: home page
- `app/work/[slug]/page.js`: case study pages (`/work/apycue`, `/work/hotel-templates`, `/work/ecommerce`)
- `app/layout.js`: fonts, header, contact and footer shared by every page
- `app/globals.css`: all styles
- `components/`: header, contact section and project card illustrations
- `.github/workflows/deploy.yml`: build and deploy to GitHub Pages

## Run locally
```bash
npm install
npm run dev
```
Then open http://localhost:3000.
