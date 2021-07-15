const EventEmitter = require("events");
const ee = new EventEmitter();

// TODO: write your handlers here

ee.emit("error", new Error(''));
