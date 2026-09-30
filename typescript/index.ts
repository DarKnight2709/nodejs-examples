async function typescript() {
  console.log("INFERENCE");
  await import("./inference.js");
  console.log("-----------------");

  console.log("INTERFACE-TYPE");
  await import("./interface-type.js");
  console.log("-----------------");

  console.log("GENERIC");
  await import("./generic.js");
  console.log("-----------------");
}

typescript();
