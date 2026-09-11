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

const user = (req, res) => {
  const { id } = req.params;
  res.json({
    message: "User found",
    userId: id,
  });
  console.log(req.params);
};

const search = (req, res) => {
  const q = req.query;
  console.log(q);
  res.json(req.query);
};

const newuser = (req, res) => {
  const body = req.body;

  console.log(body);
  res.status(201);
  res.json({
    message: "user created",
    user: body,
  });

  //   res.status(201).json({
  //     message: "User created",
  //     user: body,
  //   });
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
  search,
  newuser,
  blog,
  courses,
  adults,
  children,
};
