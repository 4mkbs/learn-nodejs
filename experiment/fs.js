/*
 * Titile: fs.js
 * Description: 4mkbs code's
 * Author: Muhammad Khairul Bashar Sakib ( MKBS )
 * Date: 27/08/2025 00:03:23
 */

// fs module
const { log } = require("console");
const fs = require("fs");

const fsbasic = () => {
  fs.writeFileSync("hello.txt", "mkbs is sakib");
  console.log(fs.existsSync("hello.txt"));
  fs.readFileSync("hello.txt", "utf-8");
  fs.appendFileSync("hello.txt", " hello");
};

// const data = fs.readFileSync("hello.txt");
// log(data.toString());
const data = fs.readFile("hello.txt", "utf-8", (err, data) => {
  if (err) throw err;
  log(data);
});
console.log("First showing");
module.exports = { fsbasic };
