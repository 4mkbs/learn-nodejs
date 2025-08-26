// const express = require("express");

// const app = express();

// app.use(express.json());

// app.get("/", (req, res) => {
//   res.json({ message: "Hello, World!" });
// });
// app.post("/", (req, res) => {
//   const { name } = req.body;
//   res.json({ message: `Hello, ${name}!` });
// });

// app.listen(65000, () => {
//   console.log("listening on url http://localhost:65000");
// });

//file dir name
// console.log(__dirname);
// console.log(__filename);

// imports
// const file1 = require("./index");
// console.log(file1.log);
// console.log(file1.http);
// console.log(file1.fs);
// console.log(file1.server);

// //iffi
// (function () {
//   console.log("IIFE");
// })();

// path module
// const path = require("path");
// console.log(path.basename(__filename));
// console.log(path.dirname(__filename));
// console.log(path.extname(__filename));

//os module
const os = require("os");
// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.availableParallelism());
// console.log(os.freemem());
// let total = os.totalmem();
// total = total / (1024 * 1024 * 1024);
// console.log(Math.ceil(total) + "gb");
// console.log(os.homedir());
// console.log(os.tmpdir());
// console.log(os.uptime());
// console.log(os.userInfo());

// fs module
const fs = require("fs");
fs.writeFileSync("own.txt", "sakib");
