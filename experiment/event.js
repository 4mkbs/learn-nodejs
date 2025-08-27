const eve = require("events");
const eventEmitter = new eve.EventEmitter();

// register an event listener for the "bell" event
eventEmitter.on("bell", ({ name, day }) => {
  console.log("Bell event received:", name, "today is", day);
});

// raise the "bell" event every 5 seconds
setTimeout(() => {
  // eventEmitter.emit("bell", "Ding Dong!");// Emitting with a message
  eventEmitter.emit("bell", {
    name: "Ding Dong!",
    day: new Date().getDate(),
  }); // Emitting with a message
}, 1000);

module.exports = { eventEmitter };
