// 1. Import từ module do mình viết
import Calculator, { add, multiply, PI } from "./math.helper";

// 2. Đường dẫn trong ES Module hiện đại (Node.js >= 20.11)
// import.meta.filename và import.meta.dirname được tích hợp sẵn
const __filename = import.meta.filename;
const __dirname = import.meta.dirname;

console.log("=== ES MODULE PATHS ===");
console.log("__filename :", __filename);
console.log("__dirname  :", __dirname);

console.log("\n=== 1. TEST MODULE IMPORT ===");
const calc = new Calculator();
console.log(calc.info());
console.log(`Add: 5 + 3 = ${add(5, 3)}`);
console.log(`Multiply: 5 * 3 = ${multiply(5, 3)}`);
console.log(`PI constant: ${PI}`);

console.log("\n=== 2. KHÁM PHÁ GLOBALS (process) ===");
// Đọc thư mục đang gõ lệnh chạy
console.log("Current Working Directory (cwd):", process.cwd());

// Đọc thông số phiên bản Node
console.log("Node Version:", process.version);
console.log("Process ID (PID):", process.pid);

// Đọc biến môi trường (Environment Variable)
// Giả sử chạy lệnh: PORT=8080 npx tsx app.ts
const appPort = process.env.PORT || 3000;
console.log(`Configured PORT: ${appPort}`);

// Xử lý sự kiện khi app chuẩn bị tắt
process.on("exit", (code: number) => {
  console.log(`\n[Process Exit] Tiến trình đã dừng với mã thoát: ${code}`);
});
