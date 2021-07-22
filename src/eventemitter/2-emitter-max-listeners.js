const EventEmitter = require("events");
const ee = new EventEmitter();

ee.setMaxListeners(5)

ee.on("hello", (message) => {
  console.log(`Listener 1: Received hello: ${message}`);
});
ee.on("hello", (message) => {
  console.log(`Listener 2: Received hello: ${message}`);
});
ee.on("hello", (message) => {
  console.log(`Listener 3: Received hello: ${message}`);
});
ee.on("hello", (message) => {
  console.log(`Listener 4: Received hello: ${message}`);
});
ee.on("hello", (message) => {
  console.log(`Listener 5: Received hello: ${message}`);
});
ee.on("hello", (message) => {
  console.log(`Listener 6: Received hello: ${message}`);
});

// This will cause a warning from the Node process.
ee.emit("hello", "Hey there!");
