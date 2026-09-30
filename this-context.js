const obj = {
  name: "Alice",

  // Regular function: 'this' depends on the caller
  regularMethod: function () {
    setTimeout(function () {
      console.log(this.name); // Output: undefined (Because 'this' lost its context inside setTimeout)
    }, 100);
  },

  // Arrow function: 'this' is lexically bound to 'obj'
  arrowMethod: function () {
    setTimeout(() => {
      console.log(this.name); // Output: "Alice" (Inherits 'this' from arrowMethod's scope)
    }, 100);
  },
};

obj.regularMethod();
obj.arrowMethod();
