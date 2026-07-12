# Google and Bing Topic Cluster SEO Implementation Plan

## Goal

Implement the approved topic cluster with one primary page per search intent, minimal new content, and explicit checks for canonical ownership, page semantics, internal links, and sitemap coverage.

## Steps

1. Add a deterministic Node check that expresses the approved page ownership and content intent, then run it and confirm it fails on the current site.
2. Upgrade `/download/clash-verge/` to use the current Clash Verge Rev name in metadata and visible copy without changing download URLs.
3. Resolve the duplicate `/tutorial/clash-verge/` intent by pointing its canonical and prominent reader path to `/download/clash-verge/`.
4. Improve `/download/` with platform/use-case selection copy and a link to one new comparison guide.
5. Add `/tutorial/clash-verge-rev-vs-clash-meta/` for the distinct client-choice intent and add it to `sitemap.xml`.
6. Improve `/jichang/` with concise, non-promotional selection criteria and links to the existing line-selection and avoid-traps guides.
7. Run focused and repository-wide structural checks, serve locally, and inspect changed pages at desktop and mobile widths.

## Constraints

- Do not change existing download targets or airport commercial details.
- Do not add free nodes, free subscriptions, or traffic/ranking guarantees.
- Do not add a separate general client recommendation article; the download index owns that intent.
- Follow existing HTML, CSS variable, navigation, footer, and comment patterns.
