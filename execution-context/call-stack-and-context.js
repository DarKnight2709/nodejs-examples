greet();

function greet() {
  console.log("Hello from hoisted function!");
}

console.log("\n=== 2. CALL STACK (LIFO Execution) ===");

function firstFunction() {
  console.log("[Stack Push] -> firstFunction()");
  secondFunction();
  console.log("[Stack Pop]  <- firstFunction() done");
}

function secondFunction() {
  console.log("  [Stack Push] -> secondFunction()");
  thirdFunction();
  console.log("  [Stack Pop]  <- secondFunction() done");
}

function thirdFunction() {
  console.log("    [Stack Push] -> thirdFunction()");
  console.log("\n    --- Current Call Stack Snapshot ---");
  console.log("    ------------------------------------\n");
  console.log("    [Stack Pop]  <- thirdFunction() done");
}

firstFunction();
