const fs = require('node:fs');
function someAsyncOperation(callback) {
  // Assume this takes 95ms to complete
  fs.readFile('/path/to/file', callback);
}
const timeoutScheduled = Date.now();
setTimeout(() => {
  const delay = Date.now() - timeoutScheduled;
  console.log(`${delay}ms have passed since I was scheduled`);
}, 100);
// do someAsyncOperation which takes 95 ms to complete
someAsyncOperation(() => {
  const startCallback = Date.now();
  // do something that will take 10ms...
  while (Date.now() - startCallback < 10) {
    // do nothing
  }
});

// it will take total 105ms to complete the setTimeout callback, because there is not setImmediate, the event loop will wait in the poll phase until there is a callback scheduled in the timer queue, but the timer takes longer than the poll phase, it will have the poll event first to execute and take 105 ms to reach to the timer (setTimeout) callback.