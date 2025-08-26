function log(any) {
  console.log(any);
}

const http = require("http");
const fs = require("fs").promises;

// fs.writeFileSync("hello.txt", "sakib is the man");
// const ok = fs.readFileSync("hello.txt");

fs.readFile("hello.txt", "utf-8")
  .then((data) => log(data))
  .catch((err) => log(err));
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-type", "text/  json");
  // res.end(ok);
  res.end("some dhgkhgks");
});

server.listen(3333, "localhost", () => {
  log("running");
});

module.exports = {
  // all
  log,
  http,
  fs,
  server,
};
