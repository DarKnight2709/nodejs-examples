// // bind() returns a brand-new function

// class Button {
//   constructor(label) {
//     this.label = label;
//     this.clickCount = 0;
//   }

//   handleClick() {
//     this.clickCount++;
//     console.log(`${this.label} clicked ${this.clickCount} times.`);
//   }
// }

// const btn = new Button("Submit");

// // Simulating passing the method to an event listener
// const listener = btn.handleClick;
// // listener(); // Error or NaN because 'this' inside listener is global/undefined!

// // SOLUTION: Use .bind() in the constructor to lock 'this' permanently
// class FixedButton {
//   constructor(label) {
//     this.label = label;
//     this.clickCount = 0;
//     // Permanently bind 'this' to the instance
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.clickCount++;
//     console.log(`${this.label} clicked ${this.clickCount} times.`);
//   }
// }

// const btn2 = new FixedButton("Submit");

// // Simulating passing the method to an event listener
// const listener2 = btn2.handleClick;
// listener2();

const counter = {
  count: 0,
  increment() {
    this.count++;
    console.log(this.count);
  },
  start() {
    // Without .bind(this), `this` inside increment becomes the global object or undefined
    setTimeout(this.increment.bind(this), 1000);
  },
};

counter.start(); // Logs 1 after 1 second
