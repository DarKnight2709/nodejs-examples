// Các hàm tiện ích toán học
function add(a: number, b: number): number {
  return a + b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

// Biến hằng số
const PI = 3.14159;

// Class Calculator
class Calculator {
  info(): string {
    return "Simple Math Utility v1.0 (CommonJS)";
  }
}

// Trong CommonJS, ta export bằng cách gán vào module.exports (hoặc exports)
// Đối với Named Export: gán một object chứa các thuộc tính cần export
module.exports = {
  add,
  multiply,
  PI,
  Calculator,
};
