const express = require("express");
const router = require("./routes/user.routes");

const app = express();
app.use(express.json());

app.use("/", router);

app.listen(65000, () => {
  console.log("server is running on  http://localhost:65000/");
});
