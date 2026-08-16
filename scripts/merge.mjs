#!/usr/bin/env node

// Review merge: regenerates the human-facing pages (CATALOG.md, TOP200.md) and
// the review queue after the maintainer has reviewed data/review/pending.* and
// recorded decisions in data/approved.json and data/curated.json.
//
// This is the only place the user-facing pages are written. The daily
// workflow (scripts/update.mjs) only refreshes the raw snapshot and the
// review queue — nothing users see changes without this script running.

import { writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildBoard, buildCatalog, catalogRepositories, computePending, loadState, writePending } from './render.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const TOP_N = Number(process.env.TOP_N ?? 200);

const state = await loadState();
const { catalog, stats, warnings } = buildCatalog(state);
const board = buildBoard(state, TOP_N);
const { pending, missing } = computePending(state);

await writeFile(resolve(root, 'CATALOG.md'), catalog);
await writeFile(resolve(root, 'TOP200.md'), board);
await writePending(state);

console.log(
  `Review merge done — catalog lists ${stats.repositories} repositories (${stats.languages} languages, ${stats.licenses} licensed, ${stats.active} active), board holds ${TOP_N} entries, review queue holds ${pending.length} pending, ${missing.length} approved repositories missing from the snapshot.`,
);

if (warnings.size) {
  for (const warning of warnings) {
    console.warn(`Warning: unknown category_overrides value (ignored, repository fell back to pattern matching): ${warning}`);
  }
}
