const express = require("express");
const {
  showHome,
  showArticle,
  showLogin,
  login,
  logout,
  showDashboard,
  showCreateForm,
  createArticleHandler,
  showEditForm,
  updateArticleHandler,
  deleteArticleHandler,
} = require("../controllers/blogController");
const { ensureAdmin } = require("../middleware/auth");

const router = express.Router();

router.get("/", showHome);
router.get("/article/:slug", showArticle);

router.get("/admin/login", showLogin);
router.post("/admin/login", login);
router.post("/admin/logout", ensureAdmin, logout);

router.get("/admin/dashboard", ensureAdmin, showDashboard);
router.get("/admin/articles/new", ensureAdmin, showCreateForm);
router.post("/admin/articles/new", ensureAdmin, createArticleHandler);
router.get("/admin/articles/:id/edit", ensureAdmin, showEditForm);
router.post("/admin/articles/:id/edit", ensureAdmin, updateArticleHandler);
router.post("/admin/articles/:id/delete", ensureAdmin, deleteArticleHandler);

module.exports = router;
