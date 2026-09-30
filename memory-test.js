// memory-test.js

function stackFrameOne() {
  let primitiveA = 42;
  let primitiveB = "Hello Stack";
  let a = [1, 2, 3, 4, 5];

  stackFrameTwo();
}

function stackFrameTwo() {
  let primitiveC = 100;

  // Heap objects
  let userA = { name: "Alice", role: "Developer" };
  let userB = userA; // Points to the exact same object on the heap

  userB.role = "Lead Architect"; // Mutates the heap object

  debugger;
}

stackFrameOne();
