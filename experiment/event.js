/*
 * Titile: event.js
 * Description: 4mkbs code's
 * Author: Muhammad Khairul Bashar Sakib ( MKBS )
 * Date: 27/08/2025 19:59:47
 */

const School = require("./school");

const school = new School();

// register an event listener for the "bell" event
school.on("bell", ({ name, day }) => {
  console.log("Bell event received:", name, "today is", day);
});

// raise the "bell" event every 5 seconds
school.start();

module.exports = { school };
