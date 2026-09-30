const fs = require("fs");

fs.readFile(__filename, () => {
  console.log("this is readFile 1");
});

process.nextTick(() => console.log("this is process.nextTick 1"));
Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
setTimeout(() => console.log("this is setTimeout 1"), 0);
setImmediate(() => console.log("this is setImmediate 1")); // check queue
// -> callback in the check queue will be executed before the I/O queue
// ?> WHY?

// to avoid the uncertainty, add this loop, this ensure when the control enters, the timer queue is ready to be executed
for (let i = 0; i < 1000000000; i++) {
  // simulate a long-running task
}
