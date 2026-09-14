import fs from "node:fs/promises";
import path from "node:path";

const root = path.resolve(".");
const output = path.join(root, "dist");
await fs.rm(output, { recursive: true, force: true });
await fs.mkdir(output, { recursive: true });
for (const file of ["index.html", "product.html", "product.css", "product.js", "privacy.html", "terms.html", "legal.css", "favicon.svg"]) {
  await fs.copyFile(path.join(root, file), path.join(output, file));
}
console.log("Public site built into dist");
