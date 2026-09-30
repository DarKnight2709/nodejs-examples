function outerFunction() {
  let counter = 0; // outer scope variable
  function innerFunction() {
    counter++;
    console.log(counter);
  }
  return innerFunction;
}
const increment = outerFunction(); // outerFunction executed
increment(); // Output: 1
increment(); // Output: 2
increment(); // Output: 3
increment(); // Output: 4

// Data privacy / Encapsulation
function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      if (amount <= balance) {
        balance -= amount;
        return balance;
      } else {
        return "Insufficient funds!";
      }
    },
    getBalance() {
      return balance;
    },
  };
}
const account = createBankAccount(1000);
console.log(account.deposit(500)); // 1500
console.log(account.withdraw(300)); // 1200
console.log(account.balance); //  undefined (private variable)

// currying function
function curry(f) {
  return function (a) {
    return function (b) {
      return f(a, b);
    };
  };
}

function sum(a, b) {
  return a + b;
}

let curriedSum = curry(sum);
console.log(curriedSum(1)(2));
// 3

// Event listener
function setupButton() {
  let count = 0;
  document.getElementById("myBtn").addEventListener("click", function () {
    count++;
    console.log("Button clicked " + count + " times");
  });
}
setupButton();

// BAD: keep the hugeData reachable -> GC can't collect
const taskQueue = [];
function createTasks() {
  // A huge dataset (takes up ~40 MB of RAM)
  // this hugeData will NOT be cleaned after createTasks finishes because there are functions referencing to it
  const hugeData = new Array(5000000).fill("heavy data");

  // this function reference to the hugeData -> hugeData is retained in memory and shared by other functions
  const helper = () => {
    console.log(hugeData);
  };

  for (let i = 0; i < 1000; i++) {
    // this function reference to the hugeData because the shared scope is retained in memory
    // See in the debug mode
    taskQueue.push(function getIndex() {
      return i;
    });
  }
}
createTasks();

// GOOD: Define the function once outside the loop or pass data cleanly
const taskQueue2 = [];

// Clean function: only captures 'index', has no access to any big data
function makeTask(index) {
  return function () {
    return index;
  };
}

function createTasksClean() {
  const hugeData = new Array(5000000).fill("heavy data");

  // this function reference to the hugeData -> hugeData is retained in memory and shared by other functions
  const helper = () => {
    console.log(hugeData);
  };

  for (let i = 0; i < 1000; i++) {
    taskQueue2.push(makeTask(i));
  }
}

createTasksClean();

console.log("The end");

// <!> V8 only puts a variable into an outer Closure scope if some nested function actually closes over (references) it -> createTasksClean will not be in the Outer Closure, so the helper closure doesn't have that.
// -> It only stores a function/variable in the outer Closure context if at least one inner function actually references (captures) it so save memory
