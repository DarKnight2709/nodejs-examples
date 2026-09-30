// find: browser and return first element that match condition

// Early-Exit Search

const orders = [
  { id: 101, status: "pending" },
  { id: 102, status: "shipped" },
];
const shippedOrder = orders.find((order) => order.status === "shipped");
// Result: { id: 102, status: 'shipped' }

console.log(shippedOrder);
