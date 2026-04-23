require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");


const app = express();
app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes);


app.get("/api", (req, res) => {
  res.json({
    msg: "tug dug tug dug tadew",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>{
  console.log(`Server is running on port http://localhost:${PORT}/api`);
});
