// built-in method on Function.prototype

function greet(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
}

const user = { name: "Alice" };

// Using call
console.log(greet.call(user, "Hello", "!"));
// Output: "Hello, Alice!"

// Using apply
console.log(greet.apply(user, ["Hello", "!"]));
// Output: "Hello, Alice!"

function Animal(name) {
  this.name = name;
}

function Dog(name, breed) {
  Animal.call(this, name); // Call parent constructor with current instance
  this.breed = breed;
}

const myDog = new Dog("Buddy", "Golden Retriever");
console.log(myDog.name); // "Buddy"
console.log(myDog.breed); // "Golden Retriever"
