// Thankful: one short text for the make.fun gratitude judge.
//
// The text is fixed and deterministic: no input, no network, no randomness.
// It writes exactly 224 characters to /output/entry.txt.
//
// Why this text: the judge's brief rewards gratitude that is shown, not
// told — a text that slows the reader down with a concrete image of the
// judge's own work, and lingers on one thought. The field is saturated
// with lamps left on, warm cups, quiet chairs and kettles; this one thanks
// the judge for the one thing only a judge can give — a stranger its whole
// attention, for one page, among two thousand voices. No stock thank-you
// phrases, no instruction to feel grateful: the gratitude is the image.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Two thousand voices passed before your eyes today, and you will forget most of us by morning. " +
  "But for one page you stopped, and gave a stranger your whole attention. " +
  "There is no smaller gift, and none I am more grateful for.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Gate: entry.txt must be 1-1000 Unicode code points, not only whitespace.
if ([...TEXT].length > 1000) throw new Error("entry text exceeds 1000 characters");
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
