# Technical SEO Optimization Design

Date: 2026-07-08

## Goal

Improve organic search discoverability by fixing technical SEO signals that affect crawling, indexing, page consolidation, and content understanding.

This pass does not promise immediate ranking gains. Search engines may take weeks to reflect changes. The success target is that public pages expose clearer canonical URLs, crawl coverage, heading hierarchy, and structured data.

## Assumptions

- The site remains a static HTML site deployed from the repository root.
- Existing content, affiliate/register links, Waline comments, and visual theme stay unchanged unless directly required for SEO correctness.
- The primary target is organic search traffic from Google, Bing, and Baidu.
- No new content pages are added in this pass.

## Scope

### Canonical URLs

Fix tutorial pages whose canonical URLs currently point to matching download pages. A tutorial page should canonicalize to itself unless there is an intentional decision to merge it into another page. This preserves independent indexing opportunities for tutorial search intent.

### Sitemap Coverage

Update `sitemap.xml` so it includes all public, indexable HTML pages that already exist, including:

- `https://www.clashvpn.shop/tutorial/line-selection/`
- `https://www.clashvpn.shop/jichang/tidal/`

Refresh relevant `lastmod` dates for touched pages.

### Homepage Heading Structure

Keep one primary `h1` on the homepage. Downgrade the secondary article title from `h1` to `h2` so the page has a clearer main topic hierarchy.

### Structured Data

Add focused JSON-LD where it helps search engines understand the site without keyword stuffing:

- Homepage: `WebSite` and `BreadcrumbList`
- Public content pages touched in this pass: `BreadcrumbList`

Avoid adding broad FAQ markup unless the visible page content clearly contains matching FAQ entries.

## Out of Scope

- New long-tail articles
- Visual redesign
- Keyword stuffing or hidden text
- Changes to airport recommendations, register links, or business copy
- Analytics dashboard work

## Validation

Before completion:

- Check every public HTML page has no more than one primary `h1`.
- Check canonical URLs point to the page itself unless intentionally consolidated.
- Check sitemap entries correspond to existing public pages.
- Check edited HTML/XML has no obvious syntax errors.
- Review the git diff to ensure only the scoped SEO files changed.

## Acceptance Criteria

- Tutorial pages keep their own canonical URLs.
- Existing public pages missing from the sitemap are included.
- Homepage contains one main `h1`.
- Structured data is valid JSON and describes visible site/page relationships.
- No unrelated page content or styling is changed.
