const eve = require("events");
const eventEmitter = new eve.EventEmitter();

// register an event listener for the "bell" event
eventEmitter.on("bell", () => {
  console.log("Bell event received");
});

// raise the "bell" event every 5 seconds
setInterval(() => {
  eventEmitter.emit("bell");
}, 5000);

module.exports = { eventEmitter };
