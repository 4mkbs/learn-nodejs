/*
 * Titile: path.js
 * Description: 4mkbs code's
 * Author: Muhammad Khairul Bashar Sakib ( MKBS )
 * Date: 26/08/2025 23:55:44
 */

// path module
const path = require("path");

const pathbasic = {
  basename: path.basename(__filename),
  dirname: path.dirname(__filename),
  extname: path.extname(__filename),
  parse: path.parse(__filename),
};
// console.log(pathbasic);
console.log(path.join(__dirname, "test", "hello.html"));
// console.log(
//   path.format({
//     root: "/",
//     dir: "/home/sakib/projects/regular/winc/Learnings/learn-nodejs",
//     base: "path.js",
//     ext: ".js",
//     name: "path",
//   })
// );

module.exports = pathbasic;
