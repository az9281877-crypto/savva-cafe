import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { site } from "../src/content/site.ts";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = resolve(root, "dist");
const templatePath = resolve(dist, "index.html");

function escapeAttribute(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function replaceRequired(html, pattern, replacement, label) {
  if (!pattern.test(html)) {
    throw new Error(`Missing ${label} in the Vite HTML output`);
  }

  return html.replace(pattern, replacement);
}

function setMeta(html, attribute, key, content) {
  const pattern = new RegExp(
    `<meta\\b(?=[^>]*\\b${attribute}="${key}")[^>]*>`,
    "i",
  );

  return replaceRequired(
    html,
    pattern,
    `<meta ${attribute}="${key}" content="${escapeAttribute(content)}" />`,
    `${attribute}="${key}"`,
  );
}

function localizeHtml(template, { locale, notFound = false }) {
  const dir = locale === "ar" ? "rtl" : "ltr";
  const title = notFound
    ? `404 | ${site.identity.name[locale]}`
    : site.seo.title[locale];
  const alternate = locale === "ar" ? "en" : "ar";
  let html = template;

  html = replaceRequired(
    html,
    /<html\b[^>]*>/i,
    `<html lang="${locale}" dir="${dir}">`,
    "html language attributes",
  );
  html = replaceRequired(
    html,
    /<title>[\s\S]*?<\/title>/i,
    `<title>${title}</title>`,
    "title",
  );
  html = setMeta(html, "name", "description", site.seo.description[locale]);
  html = setMeta(
    html,
    "name",
    "robots",
    notFound ? "noindex, nofollow" : "index, follow",
  );
  html = setMeta(html, "property", "og:title", site.seo.title[locale]);
  html = setMeta(
    html,
    "property",
    "og:description",
    site.seo.description[locale],
  );
  html = setMeta(html, "property", "og:locale", site.seo.locale[locale]);
  html = setMeta(
    html,
    "property",
    "og:locale:alternate",
    site.seo.locale[alternate],
  );

  return html;
}

function assertContains(html, expected, outputPath) {
  if (!html.includes(expected)) {
    throw new Error(`${outputPath} is missing: ${expected}`);
  }
}

const template = await readFile(templatePath, "utf8");
const outputs = [
  {
    path: resolve(dist, "index.html"),
    html: localizeHtml(template, { locale: "ar" }),
    expected: ['lang="ar" dir="rtl"', site.seo.title.ar, 'content="ar_SA"'],
  },
  {
    path: resolve(dist, "en/index.html"),
    html: localizeHtml(template, { locale: "en" }),
    expected: ['lang="en" dir="ltr"', site.seo.title.en, 'content="en_US"'],
  },
  {
    path: resolve(dist, "404.html"),
    html: localizeHtml(template, { locale: "ar", notFound: true }),
    expected: ['<title>404 | ساڤا</title>', 'content="noindex, nofollow"'],
  },
];

for (const output of outputs) {
  for (const expected of output.expected) {
    assertContains(output.html, expected, output.path);
  }

  await mkdir(dirname(output.path), { recursive: true });
  await writeFile(output.path, output.html);
}

console.log("Generated localized HTML: /, /en/, /404.html");
