


function testVar() {
  if (true) {
    var leaked = "I leak out of the block!";
  }
  console.log("Inside testVar function:");
  console.log(leaked); // Output: "I leak out of the block!" (Accessible outside the if block!)
}

testVar();