// object

// constructor function/class

class User {}
const alice = new User();

// User (Constructor/Class)
User.prototype; // The shared methods bucket for instances
User.__proto__; // Function.prototype

// alice (Instance Object)
alice.prototype; // undefined (plain objects do not have .prototype)
alice.__proto__; // User.prototype (points to the shared bucket)

console.log("The end");
