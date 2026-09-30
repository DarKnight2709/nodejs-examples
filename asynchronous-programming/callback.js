const fs = require("fs");

// Create a file
fs.writeFile("step1.txt", "Use:quyen", (err) => {
  if (err) return console.error(err);

  // Read that file
  fs.readFile("step1.txt", "utf8", (err, user) => {
    if (err) return console.error(err);
    console.log("User: " + user);

    // Append data (simulating fetching posts)
    fs.appendFile("step1.txt", "\nPost: Hello World", (err) => {
      if (err) return console.error(err);

      // Read again (simulating fetching comments)
      fs.readFile("step1.txt", "utf8", (err, fullData) => {
        if (err) return console.error(err);

        console.log("Result (full data):\n" + fullData);

        // Cleanup (delete file)
        fs.unlinkSync("step1.txt");
      });
    });
  });
});

// fix it with Promise and async/await

// readibility
// error handling: trycatch every level
// maintainability.

// -> fix by using Promises or async/await to flatten the structure and improve readability.
