import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import heicConvert from "heic-convert";
import sharp from "sharp";

const projectRoot = process.cwd();
const eventsRoot = path.join(projectRoot, "public", "images", "events");
const supportedExtensions = new Set([".jpg", ".jpeg", ".heic"]);

const categories = [
  { source: "birth", target: "birth", prefix: "birth" },
  { source: "babyshower", target: "baby-shower", prefix: "baby-shower" },
  { source: "birthday", target: "birthday", prefix: "birthday" },
  { source: "graduation", target: "graduation", prefix: "graduation" },
  { source: "eventprivate", target: "private-event", prefix: "private-event" },
];

const stats = {
  successful: 0,
  skipped: 0,
  failed: 0,
};

const failures = [];

async function pathExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function listDirectory(dirPath) {
  try {
    return await fs.readdir(dirPath, { withFileTypes: true });
  } catch (error) {
    if (error.code === "ENOENT") {
      return [];
    }

    throw error;
  }
}

function isSupportedSource(fileName) {
  return supportedExtensions.has(path.extname(fileName).toLowerCase());
}

function sourceSort(a, b) {
  return a.localeCompare(b, "en", {
    numeric: true,
    sensitivity: "base",
  });
}

function relative(filePath) {
  return path.relative(projectRoot, filePath);
}

async function normalizeCategoryFolder({ source, target }) {
  const sourceDir = path.join(eventsRoot, source);
  const targetDir = path.join(eventsRoot, target);

  if (source === target) {
    await fs.mkdir(targetDir, { recursive: true });
    return targetDir;
  }

  const sourceExists = await pathExists(sourceDir);
  const targetExists = await pathExists(targetDir);

  if (sourceExists && !targetExists) {
    await fs.rename(sourceDir, targetDir);
    return targetDir;
  }

  await fs.mkdir(targetDir, { recursive: true });

  if (sourceExists && targetExists) {
    const entries = await listDirectory(sourceDir);

    for (const entry of entries) {
      const from = path.join(sourceDir, entry.name);
      const to = path.join(targetDir, entry.name);

      if (await pathExists(to)) {
        stats.skipped += 1;
        console.warn(`Skipped existing file during folder normalization: ${relative(to)}`);
        continue;
      }

      await fs.rename(from, to);
    }

    const remainingEntries = await listDirectory(sourceDir);
    if (remainingEntries.length === 0) {
      await fs.rmdir(sourceDir);
    }
  }

  return targetDir;
}

async function getSourceFiles(categoryDir) {
  const entries = await listDirectory(categoryDir);
  const sourceFiles = [];

  for (const entry of entries) {
    if (!entry.isFile()) {
      continue;
    }

    if (isSupportedSource(entry.name)) {
      sourceFiles.push(entry.name);
    } else if (path.extname(entry.name).toLowerCase() !== ".webp") {
      stats.skipped += 1;
      console.warn(`Skipped unsupported file: ${relative(path.join(categoryDir, entry.name))}`);
    }
  }

  return sourceFiles.sort(sourceSort);
}

async function convertWithSharp(input, outputPath) {
  await sharp(input, { failOn: "error" })
    .rotate()
    .resize({
      width: 1920,
      withoutEnlargement: true,
      fit: "inside",
    })
    .webp({ quality: 82 })
    .toFile(outputPath);
}

async function convertHeicWithFallback(inputPath, outputPath) {
  const inputBuffer = await fs.readFile(inputPath);
  const jpegBuffer = await heicConvert({
    buffer: inputBuffer,
    format: "JPEG",
    quality: 1,
  });

  await convertWithSharp(Buffer.from(jpegBuffer), outputPath);
}

async function convertImage(inputPath, outputPath) {
  const extension = path.extname(inputPath).toLowerCase();

  try {
    await convertWithSharp(inputPath, outputPath);
  } catch (error) {
    if (extension !== ".heic") {
      throw error;
    }

    console.warn(`Retrying HEIC with fallback decoder: ${relative(inputPath)}`);
    await convertHeicWithFallback(inputPath, outputPath);
  }
}

async function validateOutput(inputPath, outputPath) {
  const outputStats = await fs.stat(outputPath);

  if (outputStats.size === 0) {
    throw new Error(`Generated file is zero bytes: ${relative(outputPath)}`);
  }

  const metadata = await sharp(outputPath, { failOn: "error" }).metadata();

  if (metadata.format !== "webp") {
    throw new Error(`Generated file is not WebP: ${relative(outputPath)}`);
  }

  if (!metadata.width || !metadata.height) {
    throw new Error(`Generated file has invalid dimensions: ${relative(outputPath)}`);
  }

  if (!(await pathExists(outputPath))) {
    throw new Error(`Missing WebP for source ${relative(inputPath)}: ${relative(outputPath)}`);
  }
}

async function convertCategory(category) {
  const categoryDir = await normalizeCategoryFolder(category);
  const sourceFiles = await getSourceFiles(categoryDir);

  for (const [index, fileName] of sourceFiles.entries()) {
    const inputPath = path.join(categoryDir, fileName);
    const outputFileName = `${category.prefix}-${String(index + 1).padStart(2, "0")}.webp`;
    const outputPath = path.join(categoryDir, outputFileName);

    try {
      await fs.mkdir(path.dirname(outputPath), { recursive: true });
      await convertImage(inputPath, outputPath);
      await validateOutput(inputPath, outputPath);
      stats.successful += 1;
      console.log(`Converted ${relative(inputPath)} -> ${relative(outputPath)}`);
    } catch (error) {
      stats.failed += 1;
      failures.push(`${relative(inputPath)} -> ${relative(outputPath)}: ${error.message}`);
      console.error(`Failed ${relative(inputPath)} -> ${relative(outputPath)}: ${error.message}`);
    }
  }
}

async function main() {
  await fs.mkdir(eventsRoot, { recursive: true });

  for (const category of categories) {
    await convertCategory(category);
  }

  console.log("");
  console.log("Event image optimization summary");
  console.log(`Successful: ${stats.successful}`);
  console.log(`Skipped: ${stats.skipped}`);
  console.log(`Failed: ${stats.failed}`);

  if (failures.length > 0) {
    console.log("");
    console.log("Failures:");
    for (const failure of failures) {
      console.log(`- ${failure}`);
    }
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
