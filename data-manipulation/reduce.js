// reduce: browser and accumulate

// Example: Grouping objects by key
const logs = [
  { level: "error", msg: "DB connection timeout" },
  { level: "info", msg: "Server started" },
  { level: "error", msg: "Out of memory" },
];

const groupedLogs = logs.reduce((acc, log) => {
  acc[log.level] = acc[log.level] || [];
  acc[log.level].push(log.msg);
  return acc;
}, {});

console.log(groupedLogs);

// ex2: sum
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(
  (initialValue, currentValue) => initialValue + currentValue,
  0,
); // 15

console.log(sum);
