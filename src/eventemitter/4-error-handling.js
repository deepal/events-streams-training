const EventEmitter = require("events");
const ee = new EventEmitter();

// TODO: write your error handlers here

ee.emit("error", new Error('computer says no'));
