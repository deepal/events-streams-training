const EventEmitter = require("events");
const doggo = new EventEmitter();

doggo.on("wuff", (message) => {
  // TODO: write your code here
});

doggo.emit("wuff", "Hello human!");
