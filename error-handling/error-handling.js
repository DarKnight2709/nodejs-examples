// 1. Tạo Custom Error có gắn HTTP status code
class AppError extends Error {
  constructor(message, statusCode = 500) {
    super(message);
    this.statusCode = statusCode;
    this.name = "AppError";
    Error.captureStackTrace(this, this.constructor); // Giữ sạch stack trace
  }
}

// 2. Hàm giả lập async I/O (gọi DB hoặc gọi API bên ngoài)
async function fetchUserFromDb(id) {
  if (id <= 0) {
    throw new AppError("Invalid User ID", 400); // Bad Request
  }
  if (id === 999) {
    throw new AppError("User not found", 404); // Not Found
  }
  return {
    id,
    name: "Alice",
  };
}

// 3. Controller xử lý request: Pattern try/catch/finally chuẩn
async function handleGetUserRequest(userId) {
  let dbConnectionLocked = true;
  console.log("DB connection opened...");

  try {
    const user = await fetchUserFromDb(userId);
    console.log("Response 200:", user);
  } catch (error) {
    // Xử lý lỗi tập trung: Phân biệt lỗi nghiệp vụ (AppError) và lỗi hệ thống
    if (error instanceof AppError) {
      console.error(`Client Error [${error.statusCode}]: ${error.message}`);
    } else {
      console.error("Unknown Server Error [500]:", error);
    }
  } finally {
    // Luôn chạy: Dọn dẹp tài nguyên
    dbConnectionLocked = false;
    console.log("DB connection closed. State:", dbConnectionLocked);
  }
}

// Chạy thử
async function main() {
  await handleGetUserRequest(-1); // Lỗi 400
  console.log("---");
  await handleGetUserRequest(999); // Lỗi 404
  console.log("---");
  await handleGetUserRequest(1); // Thành công 200
}

main();
