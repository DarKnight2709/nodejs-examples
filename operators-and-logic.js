console.log("=== 1. EQUALITY: == vs === ===");

console.log("'5' == 5         :", '5' == 5);
console.log("0 == false       :", 0 == false);
console.log("null == undefined:", null == undefined);

console.log("'5' === 5        :", '5' === 5);
console.log("0 === false      :", 0 === false);
console.log("null === undefined:", null === undefined);

console.log("\n=== 2. ?? (Nullish) vs || (Logical OR) ===");

const count = 0;
const speed = "";

console.log("count || 10      :", count || 10);
console.log("speed || 'normal':", speed || "normal");

console.log("count ?? 10      :", count ?? 10);
console.log("speed ?? 'normal':", speed ?? "normal");

console.log("\n=== 3. OPTIONAL CHAINING (?.) ===");

const apiResponse = {
  data: {
    user: {
      name: "Alex",
    },
  },
};

console.log("City:", apiResponse.data?.profile?.address?.city);
console.log("Method call:", apiResponse.data?.user?.getDetails?.());

console.log("\n=== 4. SHORT-CIRCUIT LOGIC ===");

const isLoggedIn = true;
const hasPermission = false;

const renderButton = isLoggedIn && "Render Admin Button";
console.log("Short-circuit &&:", renderButton);
console.log("!hasPermission  :", !hasPermission);
