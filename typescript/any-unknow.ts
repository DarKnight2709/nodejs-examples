function processData(val: unknown) {
  // val.toUpperCase(); // Báo lỗi ngay vì TS chưa biết val là string hay không
  if (typeof val === "string") {
    console.log(val.toUpperCase()); // Hợp lệ, TS đã biết đây là string
  }
}

function processDataAny(val: any) {
  console.log(val.toUpperCase()); // Không báo lỗi, nhưng có thể gây lỗi runtime nếu val không phải là string
}

processData("hello"); // Hợp lệ
processData(123); // Hợp lệ, nhưng không làm gì

processDataAny("hello"); // Hợp lệ
// processDataAny(123); // Hợp lệ, nhưng sẽ gây lỗi runtime
