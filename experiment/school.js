const EventEmitter = require("events");

class School extends EventEmitter {
  start() {
    console.log("School started");

    //raise an event
    setTimeout(() => {
      this.emit("bell", {
        name: "Ding Dong!",
        day: new Date().getDate(),
      });
    }, 1000);
  }
}

module.exports = School;
