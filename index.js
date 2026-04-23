const express = require("express");
const app = express();
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({
    msg: "Learn Node.js starter is running.",
  });
});

app.get("/", (req, res) => {
  res.send("Learn Node.js starter is running.");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}/api`);
});
