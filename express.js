const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});
app.post("/", (req, res) => {
  const { name } = req.body;
  res.json({ message: `Hello, ${name}!` });
});

app.listen(65000, () => {
  console.log("listening on url http://localhost:65000");
});

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


module.exports = app;
