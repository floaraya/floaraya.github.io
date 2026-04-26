import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const clientDist = resolve(__dirname, "dist", "client");
const rootDist = resolve(__dirname, "dist");

const assetsDir = resolve(clientDist, "assets");
const files = fs.readdirSync(assetsDir);
const jsFile = files.find(f => f.startsWith("index-") && f.endsWith(".js"));
const cssFile = files.find(f => f.endsWith(".css"));

const imagesDir = resolve(clientDist, "images");
let imgFile = null;
if (fs.existsSync(imagesDir)) {
  const imgFiles = fs.readdirSync(imagesDir);
  imgFile = imgFiles[0];
}

// Copy client to root
const copyDir = (src, dest) => {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  for (const f of fs.readdirSync(src)) {
    const srcPath = resolve(src, f);
    const destPath = resolve(dest, f);
    fs.statSync(srcPath).isDirectory() 
      ? copyDir(srcPath, destPath) 
      : fs.copyFileSync(srcPath, destPath);
  }
};

copyDir(clientDist, rootDist);

// Generate correct HTML
const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flora Araya | Marketing B2B</title>
    <meta name="description" content="Professional B2B marketing services for businesses.">
    ${cssFile ? `<link rel="stylesheet" href="/assets/${cssFile}">` : ""}
  </head>
  <body>
    <div id="root"></div>
    ${jsFile ? `<script type="module" src="/assets/${jsFile}"></script>` : ""}
  </body>
</html>`;

fs.writeFileSync(resolve(rootDist, "index.html"), html);
console.log("Generated index.html at root with files:", { jsFile, cssFile, imgFile });