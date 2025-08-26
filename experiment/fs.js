/*
 * Titile: fs.js
 * Description: 4mkbs code's
 * Author: Muhammad Khairul Bashar Sakib ( MKBS )
 * Date: 27/08/2025 00:03:23
 */

// fs module
const fs = require("fs");

const fsbasic = () => {
  fs.writeFileSync("hello.txt", "mkbs is sakib");
  console.log(fs.existsSync("hello.txt"));
  fs.readFileSync("hello.txt", "utf-8");
  fs.appendFileSync("hello.txt", " hello");
};

module.exports = { fsbasic };
