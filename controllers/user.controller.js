const prisma = require("../lib/prisma");

const home = (req, res) => {
  res.send("hello from mkbs");
};

const about = (req, res) => {
  res.send({
    message: "hello from about page",
    body: req.body,
  });
};

const contact = (req, res) => {
  res.send("hello from contact page");
  // console.log(req.params)
};

// const user = (req, res) => {
//   const { id } = req.params;
//   res.json({
//     message: "User found",
//     userId: id,
//   });
//   console.log(req.params);
// };

const user = async (req, res) => {
  try {
    const { id } = req.params;

    // Prisma দিয়ে ID অনুযায়ী ইউজার খোঁজা
    const foundUser = await prisma.user.findUnique({
      where: {
        id: Number(id), // URL params থেকে id স্ট্রিং হিসেবে আসে, তাই Number এ কনভার্ট করা হয়েছে
      },
    });

    if (!foundUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      message: "User found",
      user: foundUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching user",
      error: error.message,
    });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json({
      message: "All users fetched",
      total: users.length,
      users: users,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching users",
      error: error.message,
    });
  }
};


const search = (req, res) => {
  const q = req.query;
  console.log(q);
  res.json(req.query);
};

// const newuser = (req, res) => {
//   const body = req.body;

//   console.log(body);
//   res.status(201);
//   res.json({
//     message: "user created",
//     user: body,
//   });

//   //   res.status(201).json({
//   //     message: "User created",
//   //     user: body,
//   //   });
// };


const newuser = async (req, res) => {
  try {
    const { name, age, city } = req.body;

    // ডাটাবেজে ইউজার তৈরি করা
    const savedUser = await prisma.user.create({
      data: {
        name,
        age: Number(age),
        city,
      },
    });

    res.status(201).json({
      message: "User created successfully in Database",
      user: savedUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create user",
      error: error.message,
    });
  }
};


const blog = (req, res) => {
  const body = req.body;
  res.json({
    message: "blog created",
    blog: body,
  });
};

const courses = (req, res) => {
  res.status(202).json({
    message: "check is working or it used storebodyinrequest middleware",
  });
};

const adults = (req, res, next) => {
  console.log("this is adults route\n checkout childern route");
  res.json({
    message: "You can drink and drive",
  });
};

const children = (req, res) => {
  console.log("this is children route");
  res.json({
    message: "children route",
  });
};

module.exports = {
  home,
  about,
  contact,
  user,
  getAllUsers,
  search,
  newuser,
  blog,
  courses,
  adults,
  children,
};
