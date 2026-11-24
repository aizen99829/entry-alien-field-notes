import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Earth: the locals queue politely for coffee, then scream at each other in metal boxes. Five stars, would invade again.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
