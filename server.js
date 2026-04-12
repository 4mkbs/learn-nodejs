require("dotenv").config();

const express = require("express");
const mongos = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const userScema = new mongos.Schema({
  name: String,
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
});

const User = mongos.model("User", userScema);

app.get("/", (req, res) => {
  res.json({
    msg: "tug dug tug dug tadew",
  });
});

app.post("/singup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exist." });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = new User({
      name,
      email,
      password: hashedPassword,
    });
    await user.save();
    res.json({ msg: "user created successfully." });
  } catch (err) {
    console.log(err);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "invalid creadentials" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ msg: "মনেহয় পাসওয়ার্ড ঠিক আছে। আমি ভুল করতেসি" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/profile", (req, res) => {
  try {
    const token = req.header.authorization;
    if (!token) {
      return res.status(401).json({ msg: "Unauthorized" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.json({ msg: "Welcome to your profile", userId: decoded });
  } catch (error) {
    res.status(401).json({ msg: "Unauthorized" });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);

  try {
    if (process.env.MONGO_URI) {
      await mongos.connect(process.env.MONGO_URI);
      console.log("Connected to MongoDB");
    } else {
      console.log("MONGO_URI is not defined in .env file");
    }
  } catch (err) {
    console.log("Failed to connect to MongoDB", err);
  }
});
