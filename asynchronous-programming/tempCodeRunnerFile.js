const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const success = true;

//     if (success) {
//       resolve({
//         id: 1,
//         name: "Trần Duy Quyến"
//       }); // Transitions Pending -> Fulfilled
//     } else {
//       reject(new Error("Failed to fetch data")); // Transitions Pending -> Rejected
//     }
//   }, 1000);
// });



// Promise.resolve(1)
//   .then(val => {
//     return val + 1; // Implicitly wrapped into Promise.resolve(2) under the hood
//   })
//   .then(val => {
//     console.log(val); // 2
//   });


// Promise.resolve(1)
//   .then(val => {
//     const callback1 = () => console.log("this is the callback function 1");

//     const callback2 = () => console.log("this is the callback function 2");

//     return [callback1, callback2]; // Implicitly wrapped into Promise.resolve([callback1, callback2]) under the hood
//   })
//   .then(([callback1, callback2]) => {
//     console.log("this is the callback function");
//     callback1();
//     callback2();
//   });


// // .then(onFulfilled, onRejected)}
// // Using .then() with both onFulfilled and onRejected arguments
// // A promise that randomly resolves or rejects
// const checkInventory = new Promise((resolve, reject) => {
//   let itemInStock = true; // Change to false to test rejection

//   if (itemInStock) {
//     resolve("Item is ready to ship!");
//   } else {
//     reject("Out of stock!");
//   }
// });

// checkInventory.then(
//   // 1. onFulfilled handler (runs if the promise resolves)
//   (successMessage) => {
//     console.log("SUCCESS:", successMessage);
//   },

//   // 2. onRejected handler (runs if the promise rejects)
//   (errorMessage) => {
//     console.log("FAILURE:", errorMessage);
//   }
// );



// // .catch();
// // or use then(null, onRejected) to handle errors
// // 1. Using .catch() - Clean and idiomatic
// function fetchUserData() {
//   return Promise.resolve({
//       id: 1,
//       name: "Alice"
//     })
//     .then((user) => {
//       // Simulate an unexpected error in processing
//       throw new Error("Failed to parse user settings!");
//     })
//     .catch((error) => {
//       console.error("Caught by .catch():", error.message);
//       // Fallback value to keep the chain alive
//       return {
//         id: 1,
//         name: "Guest"
//       };
//     });
// }

// // 2. Using .then(null, onRejected) - Exactly equivalent behavior
// function fetchUserDataEquivalent() {
//   return Promise.resolve({
//       id: 1,
//       name: "Alice"
//     })
//     .then((user) => {
//       throw new Error("Failed to parse user settings!");
//     })
//     .then(null, (error) => {
//       console.error("Caught by .then(null, ...):", error.message);
//       return {
//         id: 1,
//         name: "Guest"
//       };
//     });
// }



// // complete example of promise chaining.
// const fetchUserDataComplete = new Promise((resolve, reject) => {
//   // replace this with an actual API call ()
//   setTimeout(() => {
//     const success = false;

//     if (success) {
//       resolve({
//         id: 1,
//         name: "Alice"
//       });
//     } else {
//       reject(new Error("Failed to fetch user data"));
//     }
//   }, 1000)
// });

// const userData = fetchUserDataComplete.then((user) => {
//   console.log("user data fetched: ", user);
// }).catch((error) => {
//   console.error("Error fetching user data: ", error.message);
// }).finally(() => {
//   console.log("Promise chain completed.");
// })
