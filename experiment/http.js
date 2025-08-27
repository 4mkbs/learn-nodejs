/*
 * Titile: http.js
 * Description: 4mkbs code's
 * Author: Muhammad Khairul Bashar Sakib ( MKBS )
 * Date: 27/08/2025 22:22:36
 */

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Hello, World!" }));
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "About Page" }));
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Contact Page" }));
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Not Found" }));
  }
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
  console.log("http://localhost:3000");
});

module.exports = server;
