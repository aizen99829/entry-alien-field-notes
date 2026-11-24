import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Earth: the locals queue politely for coffee, then scream at each other in metal boxes. Five stars, would invade again.";

// Guard: the entry must be one line of 1-200 characters, not only whitespace.
if (entry.length < 1 || entry.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${entry.length}`);
}
if (entry.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (entry.split("\n").length !== 1) {
  throw new Error("entry must be exactly one line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
