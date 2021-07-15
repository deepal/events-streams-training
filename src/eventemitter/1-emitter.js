const EventEmitter = require("events");
const ee = new EventEmitter();

ee.on("hello", (message) => {
  // TODO: write your code here
});

ee.emit("hello", "Hey there!");
