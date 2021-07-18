const EventEmitter = require("events");
const doggo = new EventEmitter();

const WUFF_EVENT = 'wuff'

doggo.on(WUFF_EVENT, (message) => {
  console.log(`handler1: received wuff: ${message}`);
});

doggo.on(WUFF_EVENT, (message) => {
  console.log(`handler2: received wuff: ${message}`);
});

doggo.on(WUFF_EVENT, (message) => {
  console.log(`handler3: received wuff: ${message}`);
});

doggo.on(WUFF_EVENT, (message) => {
  console.log(`handler4: received wuff: ${message}`);
});

doggo.emit(WUFF_EVENT, "Hey human!");

/**
 * If event emitter works asynchronously, the following line should be
 * printed before anything else from event handlers
 */
console.log('When will I be printed?')

