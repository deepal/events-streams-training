const EventEmitter = require("events");
const doggo = new EventEmitter();

doggo.on("wuff", (message) => {
  console.log("hey there doggo! you said: ", message);
});

setTimeout(() => {
  doggo.emit("wuff", "Hello human!");
}, 1000)
