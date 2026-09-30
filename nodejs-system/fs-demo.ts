import path from "node:path";
import fsSync from "node:fs";
import fs from "node:fs/promises";

// 1. Path Resolution
console.log("=== 1. PATH RESOLUTION ===");
console.log("OS Separator (path.sep):", path.sep);

// dùng path.join() để nối path, tương thích với mỗi hđh
const dirPath = path.join(process.cwd(), "storage");
const filePath = path.join(dirPath, "data.json");
const syncFilePath = path.join(dirPath, "sync-data.txt");

console.log("File path:", filePath);
console.log("Basename :", path.basename(filePath));
console.log("Extension:", path.extname(filePath));
console.log("Dirname  :", path.dirname(filePath));

async function main() {
  await fs.mkdir(dirPath, { recursive: true });

  // 2. Sync Operations (Blocking)
  console.log("\n=== 2. FS SYNC (BLOCKING) ===");
  fsSync.writeFileSync(syncFilePath, "Hello from Sync write", "utf-8");
  const syncContent = fsSync.readFileSync(syncFilePath, "utf-8");
  console.log("Sync read content:", syncContent);

  // 3. Async Operations (Non-blocking)
  console.log("\n=== 3. FS ASYNC (NON-BLOCKING) ===");
  const data = {
    appName: "NodeCoreDemo",
    createdAt: new Date().toISOString(),
    version: 1,
  };

  await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");

  const readPromise = fs.readFile(filePath, "utf-8").then((content) => {
    console.log("[Async Callback] Read done:", JSON.parse(content).appName);
  });
  console.log("[Main Thread] Executing without waiting for read to finish");
  await readPromise;

  // 4. File Existence
  try {
    await fs.access(filePath);
    console.log("\n[File Access] File exists and is accessible.");
  } catch {
    console.log("\n[File Access] File does not exist.");
  }
}

main().catch(console.error);
