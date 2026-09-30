const animal = {
  eats: true,
  walk() {
    return "Moving...";
  }
};

// rabbit links directly to animal as its prototype
const rabbit = Object.create(animal);
rabbit.jumps = true;

console.log(rabbit.jumps); // true (own property)
console.log(rabbit.eats);  // true (found on animal via [[Prototype]])
console.log(rabbit.fly);   // undefined (traversed to Object.prototype -> null)

console.log(rabbit.__proto__.eats); // animal


// --- Traditional Prototype Syntax ---
function UserOld(name) {
  this.name = name;
}
UserOld.prototype.sayHi = function () {
  return `Hi, ${this.name}`;
};

const userOld = new UserOld("Alice");
console.log(userOld.name);
console.log(userOld.sayHi());
console.log(userOld.__proto__ === UserOld.prototype); // true

const userOld2 = new UserOld("Charlie");
console.log(userOld2.name);
console.log(userOld2.sayHi());


// --- ES6 Class Syntax ---
class UserNew {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    return `Hi, ${this.name}`;
  }
}

const userNew = new UserNew("Bob");
console.log(userNew.name);
console.log(userNew.sayHi());

