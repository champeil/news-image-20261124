// A news-image-20261124 entry (Node 22, standard library only).
//
// The deliverable is `entry.png` beside this file: one 1024x1024 page summing up Tuesday 24 November
// 2026 in ten stories. It was drawn as an HTML page and screenshotted, then committed as a static
// image, so the program's only job is to hand those exact bytes to the grader.
//
// Reads no input, reaches no network, writes `entry.png` into the output directory (`/output` inside
// the grader, `$MAKEFUN_OUTPUT_DIR` elsewhere). Copying a committed file is deterministic: two runs
// write the same bytes.
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

/** 1 MiB: the gate's cap on the whole image, checked here so a bad build fails loudly. */
const MAX_BYTES = 1_048_576;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = new URL('./entry.png', import.meta.url);
const { size } = statSync(source);

if (size > MAX_BYTES) {
  process.stderr.write(`news image: entry.png is ${size} bytes, over the 1 MiB limit\n`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, join(outputDir, 'entry.png'));
process.stdout.write(`news image: copied entry.png (${size} bytes) to ${join(outputDir, 'entry.png')}\n`);
