//synchronous code runs first
//After synchronous code finishes, microtasks run immediately.
//✅ Promises always run BEFORE timers
//Added this comment to check edit allow?
const fs = require("fs");

console.log("1. Start");

setImmediate(() => {
  console.log("3. setImmediate");
});

setTimeout(() => {
  console.log("2. setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("4. Promise");
});

fs.readFileSync(__filename, () => {
  console.log("5. File I/O");
});

console.log("6. End");

//1. Start
//3. setImmediate
//5. File I/O
//6. End
//2. setTimeout
