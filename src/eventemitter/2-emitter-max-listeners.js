const EventEmitter = require("events");
const ee = new EventEmitter();

ee.on("hello", (message) => {
  console.log(`Received hello: ${message}`);
});

// TODO: can we configure max listeners?

// TODO: add more listeners here

ee.emit("hello", "Hey there!");
