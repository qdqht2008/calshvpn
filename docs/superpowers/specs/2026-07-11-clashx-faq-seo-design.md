# ClashX FAQ SEO Design

## Goal

Improve the `/download/clashx` page's search snippet quality and long-tail coverage for macOS users searching for ClashX Pro download, installation, subscription import, and connection troubleshooting.

## Scope

- Update only `download/clashx/index.html`.
- Keep the existing ClashX Pro download URL unchanged.
- Add missing Open Graph URL and description metadata.
- Expand the visible page content with a focused ClashX FAQ section.
- Add a matching `FAQPage` JSON-LD block.

## Acceptance Criteria

- The page has a richer meta description mentioning ClashX Pro, macOS, subscription import, and system proxy setup.
- The page includes `og:url` with `https://www.clashvpn.shop/download/clashx`.
- The page includes `og:description` aligned with the meta description.
- The visible content includes at least six ClashX-specific FAQ questions.
- JSON-LD remains valid on every HTML page.
- The ClashX page includes valid `FAQPage` JSON-LD with at least six questions.
- Existing ClashX Pro download links are not changed.
- Existing canonical URL stays normalized without a trailing slash.

## Testing

- Run a failing one-off Node check before implementation to prove the missing FAQ/OG signals are detected.
- After implementation, run the same ClashX SEO check and confirm it passes.
- Run the existing full JSON-LD parse check.
- Run the URL normalization check.
- Run `git diff --check`.
