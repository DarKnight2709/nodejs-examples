// --- Traditional Prototype Syntax ---
function UserOld(name) {
  this.name = name;
}
UserOld.prototype.sayHi = function () {
  return `Hi, ${this.name}`;
};

// classical inheritance
function AdminOld(name, role) {
   // Call super constructor
   // 1. This call the UserOld contructor function with `this` set to the new AdminOld instance
   // This is technically not true inheritnace (just code borrowing or constructor stealing)
  UserOld.call(this, name);
  this.role = role;
}
// To make it actual inheritance (add prototype linking)
// 2. Inherit methods (Prototypes)
AdminOld.prototype = Object.create(UserOld.prototype);

// 3. Set the constructor property back to AdminOld because it's pointing to UserOld
AdminOld.prototype.constructor = AdminOld;

console.log(AdminOld.__proto__ === UserOld); // false


// --- ES6 Class Syntax ---
class UserNew {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    return `Hi, ${this.name}`;
  }
}

// ES6 class inheritance
// class is actually just a function, function is a special object.
class AdminNew extends UserNew {
  constructor(name, role) {
    super(name); // Automatically handles constructor borrowing (Step 1)
    this.role = role;
  }
}
// JavaScript automatically handles prototype linking (Step 2) 
// and constructor fixing (Step 3) behind the scenes!

console.log(AdminNew.prototype.sayHi()); // Hi, undefined
// AdminNew.prototype is an object the created from the UserNew.prototype object like I said above in classic inheritance.
console.log(AdminNew.prototype.__proto__ === UserNew.prototype);
// the difference between the classic way and the ES6 way.
// it matters when calling a static method on UserNew (just AdminNew.someStaticMethod()).
console.log(AdminNew.__proto__ === UserNew); // true;