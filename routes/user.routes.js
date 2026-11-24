const express = require("express");
const router = express.Router();

const {
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
} = require("../controllers/user.controller");
const {
  firstMiddleware,
  changeAge,
  storeBodyInRequest,
  loginchechmiddlewate,
  checkAgeMiddleware,
} = require("../middleware/user.middleware");

router.get("/", home);
router.get("/about", firstMiddleware, about);
router.get("/contact", contact);
router.get("/user/:id", user);
router.get("/users", getAllUsers);
router.get("/search", search);
router.post("/users", changeAge, newuser);
router.post("/blogs", storeBodyInRequest, loginchechmiddlewate, blog);
router.get("/courses", courses);
router.get("/adults", checkAgeMiddleware, adults);
router.get("/children", children);

module.exports = router;
