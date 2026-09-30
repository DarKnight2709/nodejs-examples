// transform an object into a array of key-value pairs

const stock = { apples: 10, bananas: 0, oranges: 25 };

console.log(Object.entries(stock));
// [ ['apples', 10], ['bananas', 0], ['oranges', 25] ]

for (const [fruit, count] of Object.entries(stock)) {
  console.log(`${fruit}: ${count} left`);
}

const nestedObject = {
  user: {
    id: 1,
    name: "Alice",
    role: "admin",
    profile: {
      age: 25,
    },
  },
  status: "active",
  createdAt: 1625097600000,
};

console.log(Object.entries(nestedObject));
for (const [key, value] of Object.entries(nestedObject)) {
  console.log(`${key}:`, value);
}
