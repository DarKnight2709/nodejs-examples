// by analyzing the runtime schema -> figure out the type of a variable at compile time

let name = "Alex"; // TS tự hiểu là string, không cần viết 'let name: string = "Alex"'
let count = 10; // TS tự hiểu là number

console.log(typeof name);
console.log(typeof count);
