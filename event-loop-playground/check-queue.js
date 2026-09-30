const fs = require("fs");

setImmediate(() => console.log("this is setImmediate"));
process.nextTick(() => console.log("this is process.nextTick"));
Promise.resolve().then(() => console.log("this is Promise.resolve"));
