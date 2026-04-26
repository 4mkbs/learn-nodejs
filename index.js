const path = require("path");
const express = require("express");
const session = require("express-session");
const blogRoutes = require("./src/routes/blogRoutes");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: process.env.SESSION_SECRET || "dev-personal-blog-secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(blogRoutes);

app.use((req, res) => {
  res.status(404).render("errors/not-found", {
    title: "Page Not Found",
    message: "The page you requested does not exist.",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
