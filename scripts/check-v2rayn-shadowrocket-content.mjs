import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

const root = new URL('../', import.meta.url);
const read = (path) => readFileSync(new URL(path, root), 'utf8');
const count = (text, pattern) => (text.match(pattern) || []).length;

const v2raynPath = 'download/v2rayn/index.html';
assert.ok(existsSync(new URL(v2raynPath, root)),
  'The v2rayN download and setup page must exist');
const v2rayn = read(v2raynPath);
assert.equal(count(v2rayn, /<h1\b/g), 1,
  'The v2rayN page must have exactly one H1');
assert.match(v2rayn, /<link rel="canonical" href="https:\/\/www\.clashvpn\.shop\/download\/v2rayn">/,
  'The v2rayN page must own its normalized canonical URL');
assert.match(v2rayn, /https:\/\/github\.com\/2dust\/v2rayN\/releases/,
  'The v2rayN page must link to official GitHub Releases');
assert.match(v2rayn, /https:\/\/github\.com\/2dust\/v2rayN\/wiki\/Release-files-introduction/,
  'The v2rayN page must link to the official release-file guide');
assert.doesNotMatch(v2rayn, /github\.com\/2dust\/v2rayN\/releases\/download\//,
  'The v2rayN page must not hardcode a version-specific binary');

const shadowrocketPath = 'download/shadowrocket/index.html';
assert.ok(existsSync(new URL(shadowrocketPath, root)),
  'The Shadowrocket download and setup page must exist');
const shadowrocket = read(shadowrocketPath);
assert.equal(count(shadowrocket, /<h1\b/g), 1,
  'The Shadowrocket page must have exactly one H1');
assert.match(shadowrocket, /<link rel="canonical" href="https:\/\/www\.clashvpn\.shop\/download\/shadowrocket">/,
  'The Shadowrocket page must own its normalized canonical URL');
assert.match(shadowrocket, /https:\/\/apps\.apple\.com\/[^"]*id932747118/,
  'The Shadowrocket page must link to its official App Store ID');
assert.match(shadowrocket, /小火箭/,
  'The Shadowrocket page must explain the common Chinese product name');
assert.doesNotMatch(shadowrocket, /\.ipa\b|共享账号|破解版|企业证书|兑换码商家/,
  'The Shadowrocket page must not contain prohibited distribution guidance');

for (const [name, html] of [['v2rayN', v2rayn], ['Shadowrocket', shadowrocket]]) {
  const blocks = [...html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
    .map((match) => JSON.parse(match[1]));
  const faq = blocks.find((block) => block['@type'] === 'FAQPage');
  assert.ok(faq, `${name} must include FAQPage structured data`);
  for (const item of faq.mainEntity) {
    assert.ok(html.includes(`<h4>${item.name}</h4>`),
      `${name} FAQ question must match a visible H4: ${item.name}`);
  }
}

const downloadIndex = read('download/index.html');
assert.match(downloadIndex, /href="\/download\/v2rayn\/"/,
  'The download index must link to v2rayN');
assert.match(downloadIndex, /href="\/download\/shadowrocket\/"/,
  'The download index must link to Shadowrocket');

const tutorialIndex = read('tutorial/index.html');
assert.match(tutorialIndex, /href="\/download\/v2rayn\/"/,
  'The tutorial index must link to v2rayN');
assert.match(tutorialIndex, /href="\/download\/shadowrocket\/"/,
  'The tutorial index must link to Shadowrocket');

const homepage = read('index.html');
assert.match(homepage, /href="\/download\/v2rayn\/"/,
  'The homepage must expose the v2rayN page');
assert.match(homepage, /href="\/download\/shadowrocket\/"/,
  'The homepage must expose the Shadowrocket page');

const potatso = read('download/potatso/index.html');
assert.match(potatso, /https:\/\/apps\.apple\.com\/[^"]*id1239860606/,
  'The Potatso page must use the actual Potatso App Store ID');
assert.doesNotMatch(potatso, /id932747118/,
  'The Potatso page must not claim the Shadowrocket App Store ID');

const sitemap = read('sitemap.xml');
assert.equal(count(sitemap, /<loc>https:\/\/www\.clashvpn\.shop\/download\/v2rayn<\/loc>/g), 1,
  'The v2rayN URL must occur in the sitemap exactly once');
assert.equal(count(sitemap, /<loc>https:\/\/www\.clashvpn\.shop\/download\/shadowrocket<\/loc>/g), 1,
  'The Shadowrocket URL must occur in the sitemap exactly once');

console.log('v2rayN and Shadowrocket content checks passed.');
