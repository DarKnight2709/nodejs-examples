const originalUser = {
  name: "Alice",
  role: "Admin",
  address: {
    city: "Hanoi",
    zip: 100000,
  },
};

const shallowUser1 = { ...originalUser };
const shallowUser2 = Object.assign({}, originalUser);

shallowUser1.name = "Bob";
shallowUser1.address.city = "Da Nang";

console.log("SHALLOW COPY");
console.log("Original City:", originalUser.address.city);
console.log("Shallow 1 City:", shallowUser1.address.city);

const deepUser = structuredClone(originalUser);
deepUser.address.city = "Ho Chi Minh";

console.log("\nDEEP COPY (structuredClone)");
console.log("Original City:", originalUser.address.city);
console.log("Deep Copy City:", deepUser.address.city);
