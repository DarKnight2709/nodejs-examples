// A mixed sync/async API (Zalgo problem)
const cache = new Map([
  [1, "Alice"],
  [2, "Bob"],
  [3, "Charlie"],
]);

const table = new Map([
  [1, "Alice"],
  [2, "Bob"],
  [3, "Charlie"],
  [4, "David"],
  [5, "Evans"],
]);

const db = {
  query(sql, userId, callback) {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ id: userId, name: table.get(userId) });
      }, 1000);
    }).then((user) => {
      console.log(user);
      callback(null, user);
    });
  },
};

function getUserData(userId, callback) {
  if (cache.has(userId)) {
    // Bug: Executes synchronously right now!
    return callback(null, { id: userId, name: cache.get(userId) });
  }
  // Executes asynchronously later
  db.query("SELECT * FROM users WHERE id = ?", userId, callback);
}

// fix: use process.nextTick
// ensure the callback is always asynchronous, even on cache hits
// Defers execution until the current synchronous code finishes, running immediately before the event loop advances.
function getUserDataFixed(userId, callback) {
  if (cache.has(userId)) {
    // Defers just long enough for the caller's stack to clear
    return process.nextTick(callback, null, {
      id: userId,
      name: cache.get(userId),
    });
  }
  db.query("SELECT * FROM users WHERE id = ?", userId, callback);
}

let isDone = false;
getUserDataFixed(1, (err, user) => {
  if (err) return console.error(err);
  console.log("Cache hit user:", user);
  console.log("Is done executed first?", isDone); // true
});
isDone = true;

getUserDataFixed(4, (err, user) => {
  if (err) return console.error(err);
  console.log("DB hit user:", user);
});
