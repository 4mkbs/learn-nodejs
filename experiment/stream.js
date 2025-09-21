const { log } = require("console");
const fs = require("fs");

const ourReadStream = fs.createReadStream(
  `${__dirname}/../bigDataForStream.txt`
);

ourReadStream.on("data", (chunk) => {
  console.log("New Chunk Received:");
  //   console.log(chunk.toString());
  console.log(chunk);
});

log("Reading File...");
module.exports = ourReadStream;
