# ZCHPC Astro Site

Static Astro website for the Zimbabwe Centre for High Performance Computing (ZCHPC), with multilingual routing and GitHub Pages deployment.

## Features

- Static Astro output (`dist/`) suitable for GitHub Pages.
- Language routes for English, Shona, and Ndebele:
  - `/en/`
  - `/sn/`
  - `/nd/`
- Root redirect from `/` to `/<default-language>/` (`/en/` by default).
- Global 404 page with a return link to `/en/`.
- Footer compliance links and GISP attribution on all language pages.
- Blog pages that soft-link to live-site articles from a config file (`src/config/blogLinks.ts`).
- Remote-only brand assets from absolute URLs (`src/config/brand.ts`) with no local media committed.

## Local development

```bash
npm ci
npm run dev
```

Build and preview:

```bash
npm run build
npm run preview
```

Type checks:

```bash
npm run check
```

## Deployment (GitHub Pages)

The workflow at `.github/workflows/deploy.yml` deploys on every push to `main`.

It runs:
1. `npm ci`
2. `npm run build`
3. Uploads `dist`
4. Deploys with `actions/deploy-pages`

## Base path and site URL configuration

`astro.config.mjs` reads:

- `SITE_URL` (default: `https://zchpc.ac.zw`)
- `BASE_PATH` (default: `/`)

### Examples

Custom domain (root deploy):

```bash
SITE_URL=https://zchpc.ac.zw BASE_PATH=/ npm run build
```

Project pages deploy (`https://<org>.github.io/<repo>/`):

```bash
SITE_URL=https://<org>.github.io BASE_PATH=/zchpc-site/ npm run build
```

## Translations

- Languages and defaults: `src/i18n/languages.ts`
- UI string files:
  - `src/i18n/ui.en.json`
  - `src/i18n/ui.sn.json`
  - `src/i18n/ui.nd.json`

Edit labels there to update navigation, CTA text, and footer labels.

## Remote asset URLs (no local media)

Update remote logo/hero/pattern URLs in:

- `src/config/brand.ts`

The app intentionally uses absolute URLs and does not store image/media files in this repository.

## Blog soft links (external articles only)

Add/update entries in:

- `src/config/blogLinks.ts`

Each item requires:

- `title`
- `url` (live-site article URL)
- `date` (`YYYY-MM-DD`)
- `lang` (`en` | `sn` | `nd`)
- optional `excerpt`

Blog pages (`/{lang}/blog`) filter by language and open links in a new tab.

## Compliance pages

Draft placeholders are present per language for:

- Privacy Policy
- Accessibility
- Data Policy
- Acceptable Use
- Contact

## Optional custom domain setup (later)

Do **not** add `public/CNAME` by default.

When ready for a GitHub Pages custom domain, add:

- `public/CNAME` containing `zchpc.ac.zw`

and configure the domain in repository Pages settings.

## Asset stability warning

Hotlinking to paths such as `/build/assets/...` on the current live website may break if that site is rebuilt.

Prefer stable brand assets under `https://zchpc.ac.zw/brand/` when available. The `BRAND` config centralises URLs so you can switch endpoints later with minimal code changes.
