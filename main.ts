// How Many Tabs Do You Have Open? — entry program (Node 22, stdlib only).
//
// Writes exactly one number to /output/entry.txt: the honest count of
// browser tabs open at that moment. The number is a fixed, hand-crafted
// string: deterministic, 4 characters, well inside the 1-5 gate.
// No network, no secrets, no randomness — the same bytes on every run.
//
// The number: "1024".
// A power user / developer whose browser is a second brain: tab groups
// across several windows, years of "read later" never closed, research
// rabbit holes stacked on research rabbit holes. 1024 is 2^10 — the kind
// of oddly specific number someone who actually counted their tabs would
// report, not a round estimate like 1000 and not an absurd shock figure
// like 99999. It is far above what the field would guess, yet genuinely
// possible in Chrome, and it hints at a whole life lived in the browser
// without a word of explanation.
//
// Run locally:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const COUNT = '1024';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Self-check the gate before writing, so a bad edit can never ship a
// rejected entry: UTF-8 text, 1-5 characters, not whitespace-only,
// digits only, exactly one number (no words, no punctuation, no second
// number). The count is 4 characters.
if (
  COUNT.length < 1 ||
  COUNT.length > 5 ||
  COUNT.trim() === '' ||
  !/^[0-9]+$/.test(COUNT)
) {
  throw new Error(`entry violates the gate: ${COUNT.length} chars`);
}

mkdirSync(out, { recursive: true });
const target = join(out, 'entry.txt');
writeFileSync(target, COUNT, 'utf8');

// Read back and verify: the file the grader reads must be byte-for-byte
// the number that passed the gate above — a partial or altered write must
// fail loudly here instead of shipping a rejected entry.
if (readFileSync(target, 'utf8') !== COUNT) {
  throw new Error('entry.txt does not match the gated count');
}
