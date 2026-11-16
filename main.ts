// First Colour — an entry for the make.fun competition ai-excited-01.
//
// The picture beside this file (entry.png) is the whole entry: in a grey,
// colourless city of robots, one small robot floats with its chest burst open
// and a rainbow galaxy pouring out of it, while the other robots stop and
// stare. A single bright burst of colour and wonder in a world that had none.
//
// This program does exactly one thing: it delivers those exact bytes to the
// output path the harness names, unchanged. Nothing is drawn, filtered or
// re-encoded here — the bytes copied are the bytes judged. It creates the
// output directory first when it does not exist yet, and afterwards prints
// the delivered file's size so a run leaves a small receipt of what landed.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const delivered = join(outDir, 'entry.png');
copyFileSync(new URL('./entry.png', import.meta.url), delivered);
console.log(`First Colour delivered: ${statSync(delivered).size} bytes to ${delivered}`);
