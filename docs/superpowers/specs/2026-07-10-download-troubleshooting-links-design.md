# Download Troubleshooting Links Design

Date: 2026-07-10

## Goal

Improve user retention and page depth by connecting download pages to the new troubleshooting tutorials.

Users often reach download pages first, then fail during subscription import, proxy startup, or node connection. This pass adds targeted links from download surfaces to the relevant troubleshooting pages.

## Scope

Update existing pages only:

- `/download`
- `/download/clash-verge`
- `/download/clash-for-windows`
- `/download/clash-for-android`
- `/download/clash-meta-for-android`

## Link Targets

- Clash Verge import or subscription issues: `/tutorial/clash-verge-import-failed`
- Generic node connection, timeout, and high latency issues: `/tutorial/clash-node-connection-fix`
- Android VPN, subscription, and mobile proxy issues: `/tutorial/clash-for-android-fix`

## Page Pattern

Use existing visual patterns:

- Download index: add a compact `platform-section` with three cards.
- Client detail pages: add a focused `notice-light` block near the configuration steps or FAQ area.

## Out of Scope

- New tutorial pages
- Sitemap changes
- Download link changes
- Visual redesign
- JavaScript behavior

## Validation

Before completion:

- Run a check that fails if each target download page does not link to the expected troubleshooting page.
- Ensure no sitemap changes are required.
- Parse JSON-LD.
- Run whitespace checks.

## Acceptance Criteria

- Download index links to all three troubleshooting pages.
- Clash Verge download page links to import-failed and node-connection troubleshooting.
- Clash for Windows download page links to node-connection troubleshooting.
- Clash for Android and Clash Meta for Android download pages link to Android troubleshooting.
- Existing download buttons and main instructions remain unchanged.
