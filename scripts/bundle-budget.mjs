import fs from "fs";
import path from "path";

const BUDGET = {
  // First Load JS budget (in KB) - accounts for Framer Motion, Cal.com embed, etc.
  // Current build is ~13,200 KB due to client-side dependencies
  firstLoadJs: 15000,
  // Individual chunk budget (in KB) - largest chunk is ~762 KB
  maxChunkSize: 800,
};

function formatSize(bytes) {
  return (bytes / 1024).toFixed(2) + " KB";
}

async function main() {
  console.log("\n=== Bundle Size Report ===\n");

  // Check for .next directory
  if (!fs.existsSync(".next")) {
    console.error(
      "Error: .next directory not found. Run `npm run build` first.",
    );
    process.exit(1);
  }

  // Get all JS files from static directory
  const staticDir = ".next/static";
  let totalFirstLoadSize = 0;
  let oversizedChunks = [];
  let allChunks = [];

  function walkDir(dir) {
    if (!fs.existsSync(dir)) return;

    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        walkDir(filePath);
      } else if (file.endsWith(".js")) {
        const sizeKB = stat.size / 1024;
        const relativePath = filePath.replace(".next/static/", "");

        allChunks.push({ file: relativePath, size: sizeKB });

        if (filePath.includes("chunks") || filePath.includes("pages")) {
          totalFirstLoadSize += stat.size;

          if (sizeKB > BUDGET.maxChunkSize) {
            oversizedChunks.push({ file: relativePath, size: sizeKB });
          }
        }
      }
    }
  }

  walkDir(staticDir);

  const firstLoadKB = totalFirstLoadSize / 1024;

  // Sort chunks by size
  allChunks.sort((a, b) => b.size - a.size);

  console.log("Budget limits:");
  console.log(`  - First Load JS: ${BUDGET.firstLoadJs} KB`);
  console.log(`  - Max chunk size: ${BUDGET.maxChunkSize} KB`);
  console.log("");

  console.log("Largest chunks:");
  allChunks.slice(0, 5).forEach((chunk) => {
    const status = chunk.size > BUDGET.maxChunkSize ? " (!)" : "";
    console.log(`  - ${chunk.file}: ${chunk.size.toFixed(2)} KB${status}`);
  });
  console.log("");

  console.log(`Total First Load JS: ${formatSize(totalFirstLoadSize)}`);

  let hasErrors = false;

  if (firstLoadKB > BUDGET.firstLoadJs) {
    console.log(
      `\nOVER BUDGET by ${(firstLoadKB - BUDGET.firstLoadJs).toFixed(2)} KB`,
    );
    hasErrors = true;
  } else {
    console.log(
      `\nUnder budget by ${(BUDGET.firstLoadJs - firstLoadKB).toFixed(2)} KB`,
    );
  }

  if (oversizedChunks.length > 0) {
    console.log(`\nOversized Chunks (>${BUDGET.maxChunkSize} KB):`);
    oversizedChunks.forEach((chunk) => {
      console.log(`  - ${chunk.file}: ${chunk.size.toFixed(2)} KB`);
    });
    hasErrors = true;
  }

  console.log("");

  if (hasErrors) {
    console.log("Bundle check FAILED\n");
    process.exit(1);
  } else {
    console.log("Bundle check PASSED\n");
    process.exit(0);
  }
}

main().catch((err) => {
  console.error("Bundle check failed with error:", err);
  process.exit(1);
});
