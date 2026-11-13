// coolest-art-01 v3 entry: copies entry.png to /output/entry.png.
// Node 22, standard library only. Deterministic: two runs write the same bytes.
//
// The image: a majestic glowing golden koi dragon with flowing luminous fins,
// soaring through a rain-soaked neon cyberpunk city at night — epic and
// awe-inspiring, back to the majestic style of v1 (the highest-scoring of
// our entries at 930,859), made more dramatic with cinematic lighting,
// teal and magenta neon reflections, and golden sparkles.
import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const ENTRY = join(dirname(fileURLToPath(import.meta.url)), 'entry.png');

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(ENTRY, join(OUTPUT_DIR, 'entry.png'));
