// Export có tên (Named Export) - nên ưu tiên dùng vì dễ autocomplete
export function add(a: number, b: number): number {
  return a + b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

// Biến hằng số
export const PI = 3.14159;

// Export mặc định (Default Export) - một file chỉ có tối đa 1 default export
export default class Calculator {
  info(): string {
    return "Simple Math Utility v1.0";
  }
}
