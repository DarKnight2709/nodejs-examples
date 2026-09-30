const users = [
  { id: 1, active: true },
  { id: 2, active: false },
  { id: 3, active: true }
];

const activeUsers = users.filter(user => user.active);
// Result: [{ id: 1, active: true }, { id: 3, active: true }]
console.log(activeUsers);