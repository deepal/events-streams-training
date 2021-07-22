const EventEmitter = require("events");
const ee = new EventEmitter();

// uncaughtExceptionHandler will be handled if there is no listener for the 'error' event
process.on('uncaughtException', (err) => {
    console.log('uncaught exception handled: ', err.message);
})

// error handler for event emitter instance
ee.on('error', (err) => {
    console.log('event emitter emitted an error: ', err.message);
})

ee.emit("error", new Error('computer says no'));