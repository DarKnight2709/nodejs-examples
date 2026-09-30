const fs = require("fs");

setTimeout(() => console.log("this is setTimeout 1"), 0);
fs.readFile(__filename, () => {
  console.log("this is the readFile 1");
});

// !> sometime the readFile callback will be executed before the setTimeout callback
// ?> Why
// because the uncertainty of the amount of time it takes for the setTimeout delay (can be delay over 1ms) and how the CPU is busy with other tasks, so the readFile callback can be executed before or after the setTimeout callback

fs.readFile(__filename, () => {
  console.log("this is readFile 1");
});

process.nextTick(() => console.log("this is process.nextTick 1"));
Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
setTimeout(() => console.log("this is setTimeout 1"), 0);

// to avoid the uncertainty, add this loop, this ensure when the control enters, the timer queue is ready to be executed
for (let i = 0; i < 1000000000; i++) {
  // simulate a long-running task
}
