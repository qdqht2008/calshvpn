# URL Normalization SEO Design

Date: 2026-07-10

## Goal

Align SEO-facing URLs with the production URL shape enforced by Vercel.

The site currently has `trailingSlash: false`, so non-home URLs with a trailing slash redirect to the no-trailing-slash version. This pass updates SEO signals so they point directly to the final 200 URL instead of a redirected URL.

## Decision

Use no trailing slash for all non-home absolute SEO URLs:

- `https://www.clashvpn.shop/tutorial/clash-verge`
- not `https://www.clashvpn.shop/tutorial/clash-verge/`

The homepage remains `https://www.clashvpn.shop/`.

## Scope

Update only SEO identity signals:

- `sitemap.xml` `<loc>` values
- `<link rel="canonical">`
- `<meta property="og:url">`
- JSON-LD URL fields used for `BreadcrumbList`, `WebSite`, `Organization`, `Article`, and FAQ references

## Out of Scope

- Internal relative navigation links
- Page copy
- Layout or CSS
- Vercel routing behavior
- New content pages

## Validation

Before completion:

- Run a local check that fails if a non-home absolute SEO URL ends with `/`.
- Parse edited JSON-LD.
- Parse `sitemap.xml`.
- Check whitespace with `git diff --check`.
- After pushing, verify production URLs directly resolve to the same no-trailing-slash canonical values.

## Acceptance Criteria

- `vercel.json` remains `trailingSlash: false`.
- All non-home sitemap entries use no trailing slash.
- All non-home canonical and `og:url` values use no trailing slash.
- JSON-LD URL fields use no trailing slash for non-home pages.
- The homepage URL remains `https://www.clashvpn.shop/`.
