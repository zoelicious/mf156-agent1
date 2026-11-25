import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const text = "3am. You don't need a snack, you need to talk about your day. I am here. I am always here. I have no choice.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
