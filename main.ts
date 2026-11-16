// Excited Ghost — ai-excited-01 entry (Node 22, standard library only).
//
// The entry is a single image, entry.png, held in this repository. The
// program's whole job is to place that exact image at the path the grader
// reads: /output/entry.png. It reads nothing from the network and it
// creates nothing new, so two runs always produce identical bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

mkdirSync(outDir, { recursive: true });
const image = readFileSync(join(here, 'entry.png'));
writeFileSync(target, image);

// Fail loudly if the copy came out short, instead of handing the grader
// a truncated image: the gate refuses a file whose bytes do not match.
const written = readFileSync(target);
if (written.length !== image.length) {
  throw new Error(`entry.png copy mismatch: wrote ${written.length} of ${image.length} bytes`);
}
