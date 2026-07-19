# v2rayN and Shadowrocket Content Implementation Plan

## Goal

Add two canonical, official-source-only client guides and integrate them into the existing discovery paths while correcting the conflicting Potatso App Store link.

## Steps

1. Add a deterministic Node check for page ownership, official sources, prohibited distribution patterns, internal links, sitemap entries, and the Potatso ID correction; run it and confirm the current site fails.
2. Add `/download/v2rayn/` using the existing download-page structure, official `2dust/v2rayN` links, platform guidance, setup steps, troubleshooting, visible FAQs, and matching JSON-LD.
3. Add `/download/shadowrocket/` using the official App Store ID, iOS setup guidance, availability caveats, troubleshooting, visible FAQs, and matching JSON-LD.
4. Add discovery links to the homepage, download index, and tutorial index.
5. Correct `/download/potatso/` to use App Store ID `1239860606`.
6. Add both new canonical URLs to `sitemap.xml` exactly once.
7. Run focused and full structural checks, then inspect desktop and mobile layouts locally.

## Constraints

- Do not hardcode a v2rayN release number or version-specific asset.
- Do not publish unofficial installers, account-sharing instructions, pirated applications, free nodes, or free subscriptions.
- Do not redesign shared CSS or navigation.
- Preserve existing download links except for the factually incorrect Potatso App Store ID.
