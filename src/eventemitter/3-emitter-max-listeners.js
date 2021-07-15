const EventEmitter = require("events");
const ee = new EventEmitter();

ee.on("hello", (message) => {
  console.log(`Received hello: ${message}`);
});

ee.setMaxListeners(5) // set maximum listeners to 15

ee.on('hello', () => {})
// TODO: add more listeners here

ee.emit("hello", "Hey there!");
