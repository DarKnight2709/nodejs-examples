// EXPERIMENT 1: The Basics (Stack vs Micro vs Macro)
function runExperiment1() {
  console.log("1. Script start");

  setTimeout(() => {
    console.log("2. setTimeout (Macrotask)");
  }, 0);

  Promise.resolve().then(() => {
    console.log("3. Promise.then (Microtask)");
  });

  console.log("4. Script end");
}

// A: Start
// F: End
// D: Microtask 1
// E: Nested Microtask 2
// B: Timeout 1
// C: Prosmise inside Timeout 1

// EXPERIMENT 2: Nested Microtasks & Starvation
function runExperiment2() {
  console.log("A: Start");

  setTimeout(() => {
    console.log("B: Timeout 1");
    Promise.resolve().then(() => {
      console.log("C: Promise inside Timeout 1");
    });
  }, 0);

  Promise.resolve().then(() => {
    console.log("D: Microtask 1");
    Promise.resolve().then(() => {
      console.log("E: Nested Microtask 2");
    });
  });

  console.log("F: End");
}

// Start Node
// End Node
// process.nextTick microtask
// Promise microtask
// setTimeout (Timer phase)
// setImmediate (Check phase)

// EXPERIMENT 3: Node.js Specifics (nextTick vs Promise vs Timers)
function runExperiment3() {
  console.log("Start Node");

  setImmediate(() => {
    console.log("setImmediate (Check phase)");
  });

  setTimeout(() => {
    console.log("setTimeout (Timer phase)");
  }, 0);

  Promise.resolve().then(() => {
    console.log("Promise microtask");
  });

  process.nextTick(() => {
    console.log("process.nextTick microtask");
  });

  console.log("End Node");
}

// Choose your experiment to run:
// runExperiment1();
// runExperiment2();
runExperiment3();
