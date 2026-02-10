import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

function parseArgs() {
  const args = process.argv.slice(2);
  const out = {};
  for (let i = 0; i < args.length; i += 1) {
    const arg = args[i];
    if (arg.startsWith("--")) {
      const key = arg.slice(2);
      const value = args[i + 1] && !args[i + 1].startsWith("--") ? args[i + 1] : true;
      out[key] = value;
      if (value !== true) i += 1;
    }
  }
  return out;
}

function repairJson(raw) {
  let inString = false;
  let escaped = false;
  let out = "";
  for (let i = 0; i < raw.length; i += 1) {
    const ch = raw[i];
    if (inString) {
      if (escaped) {
        out += ch;
        escaped = false;
        continue;
      }
      if (ch === "\\") {
        out += ch;
        escaped = true;
        continue;
      }
      if (ch === "\"") {
        out += ch;
        inString = false;
        continue;
      }
      if (ch === "\n") {
        out += "\\n";
        continue;
      }
      if (ch === "\r") {
        continue;
      }
      out += ch;
      continue;
    }
    if (ch === "\"") {
      out += ch;
      inString = true;
      continue;
    }
    out += ch;
  }
  return out;
}

function normalizeKey(text) {
  return String(text || "").toLowerCase().replace(/[^a-z0-9]+/g, "");
}

function pubTypeFromItem(item) {
  const type = String(item.type || "").toLowerCase();
  if (type.includes("conference") || type.includes("paper-conference")) return "conference";
  if (type.includes("article-journal")) return "journal";
  if (type.includes("article")) return "journal";
  return "";
}

function buildMaps(items) {
  const doiMap = new Map();
  const titleMap = new Map();
  for (const item of items) {
    const pubType = pubTypeFromItem(item);
    if (!pubType) continue;
    const doi = item.DOI || item.doi;
    if (doi) doiMap.set(normalizeKey(doi), pubType);
    const title = item.title;
    if (title) titleMap.set(normalizeKey(title), pubType);
  }
  return { doiMap, titleMap };
}

function guessFromVenue(venue) {
  const text = String(venue || "").toLowerCase();
  const confTokens = [
    "proceedings",
    "proc.",
    "conference",
    "conf.",
    "spie",
    "icml",
    "neurips",
    "nips",
    "aaai",
    "cvpr",
    "iccv",
    "eccv",
    "icra",
    "iros",
    "miccai",
    "isbi",
    "em bc",
    "emnc",
    "biophotonics congress",
    "nonlinear photonics",
  ];
  if (confTokens.some((token) => text.includes(token))) return "conference";
  return "journal";
}

function updateFrontMatter(filePath, pubType) {
  const raw = fs.readFileSync(filePath, "utf8");
  const lines = raw.split(/\r?\n/);
  if (lines[0] !== "---") return false;
  const endIndex = lines.indexOf("---", 1);
  if (endIndex === -1) return false;

  const fmLines = lines.slice(1, endIndex);
  if (fmLines.some((line) => line.trim().startsWith("pub_type:"))) {
    return false;
  }

  let insertIndex = fmLines.findIndex((line) => line.trim().startsWith("category:"));
  if (insertIndex === -1) {
    insertIndex = fmLines.findIndex((line) => line.trim().startsWith("collection:"));
  }
  if (insertIndex === -1) {
    insertIndex = fmLines.length;
  } else {
    insertIndex += 1;
  }

  fmLines.splice(insertIndex, 0, `pub_type: ${pubType}`);
  const updated = ["---", ...fmLines, "---", ...lines.slice(endIndex + 1)].join("\n");
  fs.writeFileSync(filePath, updated, "utf8");
  return true;
}

function parseFrontMatter(lines) {
  const fm = {};
  for (const line of lines) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    if (value.startsWith("\"") && value.endsWith("\"")) {
      value = value.slice(1, -1);
    }
    fm[key] = value;
  }
  return fm;
}

function main() {
  const args = parseArgs();
  const zoteroPath = args.zotero;
  const pubDir = args["pub-dir"] || path.join(repoRoot, "_publications");
  if (!zoteroPath) {
    console.error("Missing --zotero path.");
    process.exit(1);
  }

  const raw = fs.readFileSync(zoteroPath, "utf8");
  const repaired = repairJson(raw);
  let items = [];
  try {
    items = JSON.parse(repaired);
  } catch (error) {
    console.error("Failed to parse Zotero JSON:", error.message);
    process.exit(1);
  }

  const { doiMap, titleMap } = buildMaps(items);
  const files = fs.readdirSync(pubDir).filter((file) => file.endsWith(".md"));
  let updated = 0;
  let skipped = 0;

  for (const file of files) {
    const filePath = path.join(pubDir, file);
    const rawFile = fs.readFileSync(filePath, "utf8");
    const lines = rawFile.split(/\r?\n/);
    if (lines[0] !== "---") {
      skipped += 1;
      continue;
    }
    const endIndex = lines.indexOf("---", 1);
    if (endIndex === -1) {
      skipped += 1;
      continue;
    }
    const fmLines = lines.slice(1, endIndex);
    const fm = parseFrontMatter(fmLines);
    if (fm.pub_type) {
      skipped += 1;
      continue;
    }

    let pubType = "";
    const doi = fm.doi ? normalizeKey(fm.doi) : "";
    if (doi && doiMap.has(doi)) pubType = doiMap.get(doi);
    if (!pubType && fm.title) {
      const titleKey = normalizeKey(fm.title);
      if (titleMap.has(titleKey)) pubType = titleMap.get(titleKey);
    }
    if (!pubType) {
      pubType = guessFromVenue(fm.venue);
    }

    if (pubType) {
      const didUpdate = updateFrontMatter(filePath, pubType);
      if (didUpdate) updated += 1;
    } else {
      skipped += 1;
    }
  }

  console.log(`pub_type added to ${updated} files. Skipped ${skipped}.`);
}

main();
