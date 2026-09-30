Promise.resolve(1)
  .then((val) => {
    return val + 1; // Implicitly wrapped into Promise.resolve(2) under the hood
  })
  .then((val) => {
    console.log(val); // 2
  });

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;

    if (success) {
      resolve({
        id: 1,
        name: "Trần Duy Quyến",
      }); // Transitions Pending -> Fulfilled
    } else {
      reject(new Error("Failed to fetch data")); // Transitions Pending -> Rejected
    }
  }, 1000);
})
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

Promise.resolve(1)
  .then((val) => {
    const callback1 = () => console.log("this is the callback function 1");

    const callback2 = () => console.log("this is the callback function 2");

    return [callback1, callback2]; // Implicitly wrapped into Promise.resolve([callback1, callback2]) under the hood
  })
  .then(([callback1, callback2]) => {
    console.log("this is the callback function");
    callback1();
    callback2();
  });

// .then(onFulfilled, onRejected)}
// Using .then() with both onFulfilled and onRejected arguments
// A promise that randomly resolves or rejects
const checkInventory = new Promise((resolve, reject) => {
  let itemInStock = true; // Change to false to test rejection

  if (itemInStock) {
    resolve("Item is ready to ship!");
  } else {
    reject("Out of stock!");
  }
});

checkInventory.then(
  // 1. onFulfilled handler (runs if the promise resolves)
  (successMessage) => {
    console.log("SUCCESS:", successMessage);
  },

  // 2. onRejected handler (runs if the promise rejects)
  (errorMessage) => {
    console.log("FAILURE:", errorMessage);
  },
);

// .catch();
// or use then(null, onRejected) to handle errors
// 1. Using .catch() - Clean and idiomatic
function fetchUserData() {
  return Promise.resolve({
    id: 1,
    name: "Alice",
  })
    .then((user) => {
      // Simulate an unexpected error in processing
      throw new Error("Failed to parse user settings!");
    })
    .catch((error) => {
      console.error("Caught by .catch():", error.message);
      // Fallback value to keep the chain alive
      return {
        id: 1,
        name: "Guest",
      };
    });
}

// 2. Using .then(null, onRejected) - Exactly equivalent behavior
function fetchUserDataEquivalent() {
  return Promise.resolve({
    id: 1,
    name: "Alice",
  })
    .then((user) => {
      throw new Error("Failed to parse user settings!");
    })
    .then(null, (error) => {
      console.error("Caught by .then(null, ...):", error.message);
      return {
        id: 1,
        name: "Guest",
      };
    });
}

// finally()
Promise.resolve("Original Success Value")
  .finally(() => {
    // This runs, but returns a completely different value
    console.log("finally block executed");
  })
  .then((result) => {
    // The original value passes right through untouched!
    console.log(result); // Output: "Original Success Value"
  });

// COMPLETE EXAMPLE OF PROMISE CHAINING

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    // fetch doesn't reject on 404/500 errors by default, so we check response.ok
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // Parse the JSON from the response
  })
  .then((data) => {
    console.log(data); // Resolve the outer promise with the actual user data
  })
  .catch((error) => {
    console.log(error); // Reject the outer promise if network or parsing fails
  })
  .finally(() => {
    console.log("Promise chain completed.");
  });
