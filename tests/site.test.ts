import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { site } from "../src/content/site.ts";
import { isRiyadhNight } from "../src/hooks/useRiyadhNight.ts";
import { stripBase, withBase } from "../src/lib/paths.ts";

test("project paths work locally and below a GitHub Pages repository base", () => {
  assert.equal(withBase("/", "/en/"), "/en/");
  assert.equal(withBase("/savva-cafe/", "/en/"), "/savva-cafe/en/");
  assert.equal(withBase("/savva-cafe/", "/qr/instagram.svg"), "/savva-cafe/qr/instagram.svg");
  assert.equal(stripBase("/savva-cafe/", "/savva-cafe/"), "/");
  assert.equal(stripBase("/savva-cafe/en/", "/savva-cafe/"), "/en/");
  assert.equal(stripBase("/another-path/", "/savva-cafe/"), "/another-path/");
});

test("the brief's menu prices and business links stay intact", () => {
  const prices = Object.fromEntries(site.menu.map(({ id, priceSar }) => [id, priceSar]));

  assert.deepEqual(prices, {
    espresso: 14,
    cortado: null,
    latte: null,
    americano: 17,
    "iced-coffee-milk": 20,
    "iced-latte-condensed": 22,
    "iced-tea-savva": 20,
    hibiscus: 20,
    "iced-white-mocha": 22,
    "iced-americano": 17,
    "iced-matcha": 20,
    "matcha-spanish-latte": 22,
    "savva-matcha": 24,
    "savva-melon": null,
    "danish-cinnamon": null,
    "chocolate-cake": null,
    "blueberry-cheesecake": null,
    "madini-spice-cookie": 14,
  });
  assert.equal(new Set(site.menu.map(({ id }) => id)).size, site.menu.length);
  assert.equal(site.links.whatsapp, "https://wa.me/966564370303");
  assert.equal(site.links.instagram, "https://www.instagram.com/savva_cafe");
  assert.equal(site.links.maps, "https://maps.app.goo.gl/geB2uSVz2UD7soM46");
  assert.equal(site.links.website, "https://az9281877-crypto.github.io/savva-cafe/");
  assert.equal(site.links.menu, "https://az9281877-crypto.github.io/savva-cafe/#menu");
  assert.equal(site.menu.find(({ id }) => id === "savva-melon")?.unknownPriceLabel?.ar, "اسأل الباريستا");
});

test("the Riyadh atmosphere changes at 18:00 and 07:00", () => {
  assert.equal(isRiyadhNight(new Date("2026-01-01T14:59:00.000Z")), false);
  assert.equal(isRiyadhNight(new Date("2026-01-01T15:00:00.000Z")), true);
  assert.equal(isRiyadhNight(new Date("2026-01-02T03:59:00.000Z")), true);
  assert.equal(isRiyadhNight(new Date("2026-01-02T04:00:00.000Z")), false);
});

test("SEO content and generated QR targets stay tied to the site config", async () => {
  assert.equal(site.seo.locale.ar, "ar_SA");
  assert.equal(site.seo.locale.en, "en_US");

  const generator = await readFile(
    new URL("../scripts/generate-qr.mjs", import.meta.url),
    "utf8",
  );
  assert.match(generator, /site\.links\.maps/);
  assert.match(generator, /site\.links\.instagram/);
  assert.match(generator, /site\.links\.website/);
  assert.match(generator, /site\.links\.menu/);

  const qrTargets = {
    "google-maps.svg": site.links.maps,
    "instagram.svg": site.links.instagram,
    "website.svg": site.links.website,
    "menu.svg": site.links.menu,
  };

  assert.deepEqual(qrTargets, {
    "google-maps.svg": site.links.maps,
    "instagram.svg": site.links.instagram,
    "website.svg": site.links.website,
    "menu.svg": site.links.menu,
  });

  for (const fileName of Object.keys(qrTargets)) {
    const svg = await readFile(new URL(`../public/qr/${fileName}`, import.meta.url), "utf8");
    assert.match(svg, /^<svg/);
    assert.match(svg, /viewBox=/);
    assert.match(svg, /#1A1410/i);
  }
});
