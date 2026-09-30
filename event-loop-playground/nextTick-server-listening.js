// Problem 2: The Setup Race Condition (The .listen() / .on() Pattern)

// Bug: the listening callback may not be fired when the server attach the port synchronously and emmit the listening event before the listening event is registered

import net from "net";
const server = net.createServer(() => {}).listen(8083);
// -> Node use nextTick internally in the listen() method.

// Listener attached on the line right AFTER listen() was invoked:
server.on("listening", () => {
  console.log("Server is ready!");
});

// ? Why not use setImmediate() instead of process.nextTick()?
// what if use setImmediate() instead of process.nextTick()
const server2 = net.createServer();
server2.on("connection", (conn) => {});
server2.listen(8080);
server2.on("listening", () => {});

// -> the listening emit event will be queued in the check queue
// when a sudden connection from client comes, the poll phase gets the connection event first -> connection emit before listening emit -> wrong order
