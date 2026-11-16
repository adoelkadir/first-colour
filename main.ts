import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const dir = dirname(fileURLToPath(import.meta.url));
const dest = process.env.OUTPUT_DIR
  ? join(process.env.OUTPUT_DIR, "entry.png")
  : "/output/entry.png";

mkdirSync(dirname(dest), { recursive: true });
copyFileSync(join(dir, "entry.png"), dest);
console.log(`First Colour delivered: ${statSync(dest).size} bytes to ${dest}`);
