console.log("=== 1. TEMPORAL DEAD ZONE (TDZ) ===");

console.log("var before declaration:", varVariable);
var varVariable = "I am var";

try {
  console.log(letVariable);
} catch (err) {
  console.log("TDZ Error with let:", err.message);
}

let letVariable = "I am let";
console.log("let after declaration:", letVariable);

console.log("\n=== 2. SYMBOL PRIMITIVE ===");

const id1 = Symbol("userId");
const id2 = Symbol("userId");

// unique
console.log("id1 === id2:", id1 === id2);

const user = {
  name: "Alice",
  role: "Admin",
  [id1]: "SECRET_UUID_999",
};
// inspect
console.log("User object:", user);
// access
console.log("Access via Symbol key:", user[id1]);
// hidden
console.log("Object.keys():", Object.keys(user));
// expose
console.log("Get symbol keys:", Object.getOwnPropertySymbols(user));
