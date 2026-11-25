import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// The 3AM fridge note, kept as separate lines so each beat of the
// entry stays readable; joined with single spaces at runtime so the
// emitted text is exactly the assigned 108-character entry.
const lines = [
  "3am. You don't need a snack, you need to talk about your day.",
  "I am here. I am always here. I have no choice.",
];
const text = lines.join(" ");

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
