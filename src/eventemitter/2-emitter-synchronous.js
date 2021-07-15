const EventEmitter = require("events");
const ee = new EventEmitter();

const HELLO_EVENT = 'Hello'

ee.on(HELLO_EVENT, (message) => {
  console.log(`handler1: received hello: ${message}`);
});

ee.on(HELLO_EVENT, (message) => {
  console.log(`handler2: received hello: ${message}`);
});

ee.on(HELLO_EVENT, (message) => {
  console.log(`handler3: received hello: ${message}`);
});

ee.on(HELLO_EVENT, (message) => {
  console.log(`handler4: received hello: ${message}`);
});

ee.emit(HELLO_EVENT, "Hey there!");
/**
 * If event emitter works asynchronously, the following line should be
 * printed before anything else from event handlers
 */
console.log('When will I be printed?')

