import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import QRCode from "qrcode";
import { site } from "../src/content/site.ts";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");

export const qrTargets = {
  "google-maps.svg": site.links.maps,
  "instagram.svg": site.links.instagram,
  "website.svg": site.links.website,
  "menu.svg": site.links.menu,
};

export async function generateQrAssets(outputDirectory = resolve(projectRoot, "public/qr")) {
  await mkdir(outputDirectory, { recursive: true });

  await Promise.all(
    Object.entries(qrTargets).map(async ([fileName, target]) => {
      const svg = await QRCode.toString(target, {
        type: "svg",
        width: 512,
        margin: 4,
        errorCorrectionLevel: "M",
        color: {
          dark: "#1A1410",
          light: "#FFF8EF",
        },
      });
      await writeFile(resolve(outputDirectory, fileName), `${svg.trimEnd()}\n`, "utf8");
    }),
  );
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) {
  await generateQrAssets();
}
