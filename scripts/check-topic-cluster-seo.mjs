import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const count = (text, pattern) => (text.match(pattern) || []).length;

const verge = read('download/clash-verge/index.html');
assert.match(verge, /<title>[^<]*Clash Verge Rev/,
  'The current download page must own the Clash Verge Rev title intent');
assert.match(verge, /<h1[^>]*>[^<]*Clash Verge Rev/,
  'The current download page must visibly identify Clash Verge Rev');
assert.match(verge, /Clash Verge Rev 和 Clash Meta 怎么选/,
  'The current download page must link to the client comparison');

const legacyVerge = read('tutorial/clash-verge/index.html');
assert.match(legacyVerge, /<link rel="canonical" href="https:\/\/www\.clashvpn\.shop\/download\/clash-verge">/,
  'The duplicate tutorial URL must consolidate canonical ownership on the download page');
assert.match(legacyVerge, /href="\/download\/clash-verge\/"/,
  'The duplicate tutorial URL must give readers a direct path to the primary page');
assert.match(legacyVerge, /<meta property="og:url" content="https:\/\/www\.clashvpn\.shop\/download\/clash-verge">/,
  'The duplicate tutorial URL must not publish a conflicting social identity');

const downloadIndex = read('download/index.html');
assert.match(downloadIndex, /Clash Verge Rev/,
  'The download index must use the maintained client name');
assert.match(downloadIndex, /按平台和使用场景选择/,
  'The download index must explain why its client selection content exists');
assert.match(downloadIndex, /<meta property="og:description" content="[^"]*Clash Verge Rev/,
  'The download index social description must use the maintained client name');
assert.match(downloadIndex, /<meta name="twitter:description" content="[^"]*Clash Verge Rev/,
  'The download index Twitter description must use the maintained client name');
assert.match(downloadIndex, /href="\/tutorial\/clash-verge-rev-vs-clash-meta\/"/,
  'The download index must link to the distinct comparison intent');

const airportIndex = read('jichang/index.html');
assert.match(airportIndex, /机场线路怎么选/,
  'The airport index must help readers evaluate line types');
assert.match(airportIndex, /购买前检查/,
  'The airport index must provide non-promotional selection criteria');

const comparison = read('tutorial/clash-verge-rev-vs-clash-meta/index.html');
assert.equal(count(comparison, /<h1\b/g), 1,
  'The comparison guide must have exactly one H1');
assert.match(comparison, /<link rel="canonical" href="https:\/\/www\.clashvpn\.shop\/tutorial\/clash-verge-rev-vs-clash-meta">/,
  'The comparison guide must have the normalized canonical URL');
assert.match(comparison, /Windows|macOS/,
  'The comparison must explain the desktop client platform');
assert.match(comparison, /Android/,
  'The comparison must explain the Android client platform');
assert.doesNotMatch(comparison, /免费节点|免费订阅/,
  'The comparison guide must stay inside the approved content boundary');

const sitemap = read('sitemap.xml');
assert.equal(count(sitemap, /<loc>https:\/\/www\.clashvpn\.shop\/tutorial\/clash-verge-rev-vs-clash-meta<\/loc>/g), 1,
  'The new comparison guide must appear in the sitemap exactly once');
assert.equal(count(sitemap, /<loc>https:\/\/www\.clashvpn\.shop\/tutorial\/clash-verge<\/loc>/g), 0,
  'The duplicate legacy tutorial URL must not remain in the sitemap');

console.log('Topic cluster SEO checks passed.');
