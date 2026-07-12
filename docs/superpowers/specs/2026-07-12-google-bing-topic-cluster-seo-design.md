# Google and Bing Topic Cluster SEO Design

Date: 2026-07-12

## Goal

Increase qualified Chinese-language search visibility from Google and Bing by strengthening existing high-value pages and adding a small set of task-focused client guides. The work must not publish free nodes, unverified subscriptions, or claims that guarantee rankings, traffic, availability, or connection quality.

## Research Basis

Google Trends comparisons used worldwide Google Web Search data for the previous 12 months:

- `机场推荐` had average relative interest 45.
- `Clash Verge Rev` had average relative interest 29 and rose materially during spring 2026.
- `Clash 下载` and `Clash 节点` had average relative interest 14 and 13.
- Among compared client terms, `Clash Meta` scored 57, `Clash Verge` 31, `FlClash` 7, and `Mihomo Party` 2.

These values are relative indices within each Google Trends comparison, not absolute search volume and not directly comparable across separate comparisons.

Bing results for `Clash Verge Rev` emphasized download and installation, Windows 11, macOS Apple Silicon, subscription import, node switching, updates, and troubleshooting. Bing is therefore used as search-intent evidence, not described as a trend-volume source.

## Chosen Approach

Use a topic cluster: upgrade existing core pages, add only pages that address a distinct search task, and connect them with contextual internal links. This avoids thin content and keyword cannibalization while covering both broad and long-tail intent.

## Target Page Ownership

Each keyword group has one primary landing page:

- Homepage: `Clash 节点`, `Clash 客户端`, and navigation to the major topic clusters.
- Airport index: `机场推荐`, airport selection criteria, line types, and use cases.
- Download index: `Clash 下载`, `Clash 客户端推荐`, and platform-based client selection.
- Clash Verge download page: `Clash Verge Rev 下载`, installation, subscription import, and basic setup. The legacy `Clash Verge` wording remains as a secondary synonym.
- Clash Meta for Android download page: Android installation and client-specific setup.
- Existing troubleshooting pages: subscription import failure, node connection failure, timeout, system proxy failure, and Android connection problems.
- New comparison guide: `Clash Verge Rev 和 Clash Meta 怎么选`, limited to a genuine cross-client decision intent not already owned by a download page.

Do not create a second Clash Verge Rev installation guide if the existing download page can satisfy that intent. Improve the existing page instead.

## Content Changes

### Existing Pages

- Clarify the homepage's client, node, airport, and tutorial entry points without turning it into a long article.
- Expand the download index with concise platform and use-case selection guidance for Clash Verge Rev, Clash Meta, and FlClash.
- Update the Clash Verge page's visible naming and metadata to prioritize `Clash Verge Rev` while retaining legacy-name compatibility.
- Add useful airport selection criteria to the airport index rather than repeating provider names or promotional claims.
- Strengthen contextual links between download pages and the matching import or connection troubleshooting guides.

### New Pages

- Add one comparison guide for Clash Verge Rev versus Clash Meta, with platform support, maintenance status, migration considerations, and clear links to the canonical download/setup pages.
- Add a separate general client-recommendation guide only if the download index cannot clearly satisfy the same search intent without becoming unwieldy. The default is to improve the download index and avoid this extra page.

## On-Page SEO

- Align each page's title, meta description, H1, H2 headings, and opening copy with its assigned search intent.
- Use keywords naturally; do not target density or repeat variants mechanically.
- Add FAQ content and `FAQPage` JSON-LD only when the visible page answers the same questions.
- Preserve one H1 per page and the site's existing HTML and visual conventions.
- Use canonical URLs consistently and avoid duplicate ownership between `/download/` and `/tutorial/` client pages.
- Update `sitemap.xml` only for a genuinely new indexable page.

## Internal Linking

The primary path is homepage to download or airport index, then to a client detail or selection page, then to the relevant troubleshooting guide. Links must use descriptive text tied to the destination's intent. Reciprocal links are added only where they help a reader continue the same task.

## Out of Scope

- Free node lists or free subscription links
- Unverified download or subscription URLs
- Changes to airport offers, prices, or performance claims without fresh source evidence
- Layout redesign or global CSS refactoring
- Separate Google-specific and Bing-specific page variants
- Ranking, traffic, or indexing guarantees
- Automated publication or search-engine submission

## Validation

Before completion:

- Confirm each target keyword group has one primary landing page.
- Confirm new and changed pages contain one H1 and valid canonical metadata.
- Parse all JSON-LD and verify FAQ schema matches visible questions.
- Check internal links and referenced local targets.
- Check `sitemap.xml` contains every new indexable page exactly once.
- Run the repository's existing URL-normalization and SEO checks when available.
- Serve the static site locally and inspect changed pages at desktop and mobile widths.
- Run `git diff --check`.

## Acceptance Criteria

- Existing core pages provide clearer, non-duplicative coverage of the researched Google and Bing search intents.
- Clash Verge Rev is the primary current product name while legacy wording remains discoverable where useful.
- At most one new comparison page is required by default; any additional page must have a distinct intent that the download index cannot serve cleanly.
- New content contains no free nodes, unverified subscriptions, or unsupported guarantees.
- Existing download links, navigation, styling, and comment functionality continue to work.
- All validation steps run explicitly; skipped or failed checks are reported rather than treated as passing.

## Measurement After Deployment

Use Google Search Console and Bing Webmaster Tools to compare impressions, clicks, click-through rate, indexed pages, and query terms for the affected URLs. Evaluate early indexing and query coverage first; judge traffic impact only after enough post-deployment data exists for a meaningful comparison.
