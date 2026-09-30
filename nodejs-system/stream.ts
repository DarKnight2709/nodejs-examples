import { Readable, Writable, Transform } from "stream";

// Creating a Readable Stream from arrays
// console.log(typeof Readable);
// console.log(typeof Writable);

// const name = ["Alex", "John", "Bob"];

// const readableStream = Readable.from(name);

// readableStream.on("data", (chunk) => {
//   console.log(chunk);
// });

// readableStream.on("end", () => {
//   console.log("end");
// });

// Custom Writable Streams (write, end, 'finish')
// const collection: Buffer[] = [];
// const writableStream = new Writable({
//   write(
//     chunk: Buffer,
//     encoding: BufferEncoding,
//     callback: (error?: Error | null) => void,
//   ) {
//     collection.push(chunk);
//     callback();
//   },
// });

// const isDone = writableStream.write("John", () => {
//   console.log("Done processing the chunk");
// });
// console.log(isDone);
// writableStream.end("Doe", () => {
//   console.log("Done processing the final chunk");
//   console.log(collection);
// });

// Piping a Readable into a Writeable
// const collection2: Buffer[] = [];
// let readableStream2 = Readable.from(["one", "two", "three"]);
// let writableStream2 = new Writable({
//   write(
//     chunk: Buffer,
//     encoding: BufferEncoding,
//     callback: (error?: Error | null) => void,
//   ) {
//     collection2.push(chunk);
//     callback();
//   },
// });
// writableStream2.on("finish", () => {
//   console.log("Done processing the final chunk");
//   console.log(collection2);
// });
// readableStream2.pipe(writableStream2);

let upper = new Transform({
  transform(chunk, encoding, callback) {
    console.log("This is first ");
    callback(null, chunk.toString().toUpperCase());
  },
});
let readable = Readable.from(["hello"]);
upper.on("data", (chunk) => console.log(chunk.toString()));
readable.pipe(upper);
