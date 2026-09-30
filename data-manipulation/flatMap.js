// flatMap: map and flatten

const ordersWithTags = [
  { orderId: 1, tags: ["urgent", "express"] },
  { orderId: 2, tags: ["standard"] },
];

const allTags = ordersWithTags.flatMap((order) => order.tags);
// Result: ['urgent', 'express', 'standard']
console.log(allTags);

console.log(ordersWithTags.flatMap((order) => [order.orderId]));
// [1, 2]
