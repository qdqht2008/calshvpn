# v2rayN and Shadowrocket Search Content Design

Date: 2026-07-13

## Goal

Expand the site's qualified Chinese-language search coverage beyond the Clash ecosystem with two established client topics: v2rayN for desktop users and Shadowrocket for Apple users. Each page must answer a distinct download and setup intent without publishing unverified installers, shared accounts, pirated applications, free nodes, or free subscriptions.

## Research Basis

Google Trends returned HTTP 429 during this research pass, so the project has no reliable relative-interest index or absolute search volume for these terms. The candidates were selected using search-result intent, official project activity, and public product popularity signals instead of presenting result counts as volume data.

- The official `2dust/v2rayN` repository describes v2rayN as a GUI client for Windows, Linux, and macOS, with more than 100,000 GitHub stars and active 2026 releases at research time.
- Search results for v2rayN consistently emphasize download, Windows 10/11, release-file choice, installation, subscription import, and system proxy configuration.
- Apple's App Store listing identifies Shadowrocket with app ID `932747118` and developer Shadow Launch Technology Limited.
- Public App Store ranking history and search results show mature Shadowrocket demand around purchase availability, iOS installation, subscription import, QR-code import, VPN permission, and connection troubleshooting.

These observations justify the first content wave but do not support traffic or ranking guarantees.

## Chosen Approach

Create two focused download/setup pages and integrate them into the existing homepage, download index, and tutorial index. Do not create a broad new proxy-client recommendation article in this wave; the existing download index owns platform-selection intent.

## Page Ownership

### `/download/v2rayn/`

Primary intent:

- `v2rayN 下载`
- `v2rayN 使用教程`

Supporting intent:

- v2rayN Windows 11
- v2rayN 订阅导入
- v2rayN 系统代理
- v2rayN x64 / ARM64
- v2rayN 更新或启动问题

The page will explain that v2rayN supports Windows, macOS, and Linux, while prioritizing Windows because that is the dominant Chinese search intent. It will link to the official repository, official Releases page, and official release-file guide. It will not hardcode a current version number or link directly to a version-specific asset.

### `/download/shadowrocket/`

Primary intent:

- `Shadowrocket 下载`
- `小火箭下载`
- `Shadowrocket 使用教程`

Supporting intent:

- Shadowrocket iOS
- Shadowrocket App Store
- Shadowrocket 订阅导入
- Shadowrocket 扫码添加
- Shadowrocket VPN 权限
- Shadowrocket 无法连接

The page will link only to Apple's App Store listing for app ID `932747118`. It will state that the application is paid and that price, regional availability, and supported Apple platforms must be checked on the current App Store listing. It will not instruct readers to use shared Apple IDs, unofficial stores, enterprise certificates, pirated IPA files, or redemption-code sellers.

## Page Content

Both pages follow the existing download-page structure:

- One H1 with the current client name and download/setup intent.
- A concise introduction that distinguishes the client from a server or subscription service.
- An official download section with platform and source guidance.
- A step-by-step section for importing an existing valid subscription and enabling the system or VPN proxy.
- Troubleshooting links to the site's existing subscription-import and node-connection guides where the steps genuinely apply.
- A visible FAQ section with matching `FAQPage` JSON-LD only if every structured question is answered visibly.
- Giscus comments using the existing page pattern.

The pages must not imply that installing a client supplies nodes or connectivity by itself.

## Internal Linking

- Add v2rayN to the Windows section of `/download/`.
- Add Shadowrocket to the iOS section of `/download/`.
- Add both clients to the relevant platform tables on the homepage without expanding homepage prose.
- Add two task cards to `/tutorial/` that point to the canonical download/setup pages.
- Link each new page back to `/download/` and only to relevant existing troubleshooting pages.
- Add each canonical URL to `sitemap.xml` exactly once.

## Metadata and Structured Data

- Align title, meta description, H1, Open Graph, and Twitter metadata with each page's assigned intent.
- Use canonical URLs without trailing slashes: `https://www.clashvpn.shop/download/v2rayn` and `https://www.clashvpn.shop/download/shadowrocket`.
- Add `BreadcrumbList` JSON-LD.
- If FAQ content is included, its question names and answers must match the visible page.
- Do not add `SoftwareApplication` structured data because current price, operating-system compatibility, and release details would require ongoing authoritative synchronization.

## Safety and Accuracy Constraints

- Official v2rayN links are restricted to `github.com/2dust/v2rayN` and its wiki/releases paths.
- The Shadowrocket purchase link is restricted to `apps.apple.com/.../id932747118`.
- No shared accounts, unofficial IPA files, cracking, sideload certificates, or third-party account sellers.
- No free node or free subscription lists.
- No exact Shadowrocket price or regional-availability promise.
- No hardcoded v2rayN latest version or version-specific binary link.
- No unsupported safety, speed, access, or ranking guarantees.

## Out of Scope

- Hiddify, sing-box, v2rayNG, Stash, Surge, or other new client pages
- A new general client-comparison article
- Changes to airport offers or download links on existing pages
- Global navigation or CSS redesign
- Search-engine submission or index guarantees

## Validation

Before completion:

- Run a failing intent-focused check before implementing the pages.
- Confirm each new page has one H1, one normalized canonical, aligned social metadata, and only approved official download hosts.
- Confirm visible FAQ questions match FAQPage JSON-LD exactly.
- Confirm prohibited phrases and unofficial-install patterns do not appear.
- Parse every JSON-LD block across the site.
- Check every local link on changed pages resolves to a file or index page.
- Confirm both new URLs occur in `sitemap.xml` exactly once.
- Run the existing topic-cluster checks and `git diff --check`.
- Serve locally and inspect both new pages at desktop and mobile widths.

## Acceptance Criteria

- v2rayN and Shadowrocket each have one useful, canonical download/setup page with distinct platform intent.
- Official download/purchase sources are clear and no unverified distribution method is offered.
- Homepage, download index, tutorial index, and sitemap provide consistent discovery paths.
- Existing navigation, download pages, comments, and styling remain intact.
- All required checks run explicitly; skipped or failed checks are reported rather than described as passing.
