const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write(
      '<body><h1><form method="POST" action="/data"><input name="data"/></form></h1></body>'
    );
    res.end();
  } else if (req.url === "/data" && req.method === "POST") {
    req.on("data", (chunk) => {
      console.log(chunk.toString());
    });
    res.end("Data received");
  }
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
  console.log("http://localhost:3000");
});

module.exports = server;

// const { log } = require("console");
// const fs = require("fs");

// const ourReadStream = fs.createReadStream(
//   `${__dirname}/../bigDataForStream.txt`
// );

// ourReadStream.on("data", (chunk) => {
//   console.log("New Chunk Received:");
//   //   console.log(chunk.toString());
//   console.log(chunk);
// });

// log("Reading File...");
// module.exports = ourReadStream;
