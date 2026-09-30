async function fetchUserProfile(userId) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
    );
    const user = await response.json();
    return user;
  } catch (err) {
    console.error(err);
  }
}

// scenarios that async/await can not be used to replace for Promise

// 1. Glocal scope
// Syntax Error in regular scripts:
const data = fetchUserProfile(1);
console.log(data);

fetchUserProfile(1).then((data) => console.log(data));

// 2. Inside Synchronous Array Methods (.map(), .filter(), .forEach())
const userIds = [1, 2, 3];

// .map() expects a synchronous return
const results = userIds.map(async (id) => {
  const user = await fetchUserProfile(id);
  return user;
});
// 'results' is actually an array of Pending Promises, not the actual users!

// To handle this with promises or async operations together,
Promise.all(userIds.map((id) => fetchUserProfile(id))).then((users) => {
  console.log(users);
});
