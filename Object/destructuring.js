// Basic & Aliasing (Renaming):
const user = { id: 101, username: "alice", is_active: true };

const { username, is_active: isActive } = user;

console.log(username); // 'alice'
console.log(isActive); // true

// Default Values & Nested Destructuring
const response = {
  data: {
    profile: { name: "Bob" },
  },
};

// Nested extraction with a default fallback
const {
  data: {
    profile: { name, age = 18 },
  },
} = response;

console.log(name, age); // 'Bob', 18

// Rest Pattern in Destructuring:
const product = { id: 99, title: "Laptop", price: 1200, stock: 15 };

// Separate identity from metadata
const { id, ...details } = product;

console.log(id); // 99
console.log(details); // { title: 'Laptop', price: 1200, stock: 15 }
