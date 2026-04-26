const {
  getAllArticles,
  getArticleBySlug,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
  toDateInputValue,
} = require("../services/articleService");
const { ADMIN_USERNAME, ADMIN_PASSWORD } = require("../config/adminConfig");

function formatLongDate(isoDate) {
  return new Date(isoDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function mapArticlesForView(articles) {
  return articles.map((article) => ({
    ...article,
    displayDate: formatLongDate(article.publishedAt),
  }));
}

async function showHome(req, res) {
  const articles = await getAllArticles();

  return res.render("guest/home", {
    title: "Home",
    articles: mapArticlesForView(articles),
  });
}

async function showArticle(req, res) {
  const article = await getArticleBySlug(req.params.slug);

  if (!article) {
    return res.status(404).render("errors/not-found", {
      title: "Article Not Found",
      message: "Sorry, the article you are looking for does not exist.",
    });
  }

  return res.render("guest/article", {
    title: article.title,
    article: {
      ...article,
      displayDate: formatLongDate(article.publishedAt),
    },
  });
}

function showLogin(req, res) {
  if (req.session.isAdmin) {
    return res.redirect("/admin/dashboard");
  }

  return res.render("admin/login", {
    title: "Admin Login",
    error: null,
  });
}

function login(req, res) {
  const { username, password } = req.body;

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    req.session.isAdmin = true;
    return res.redirect("/admin/dashboard");
  }

  return res.status(401).render("admin/login", {
    title: "Admin Login",
    error: "Invalid username or password.",
  });
}

function logout(req, res) {
  req.session.destroy(() => {
    res.redirect("/");
  });
}

async function showDashboard(req, res) {
  const articles = await getAllArticles();

  return res.render("admin/dashboard", {
    title: "Dashboard",
    articles: mapArticlesForView(articles),
  });
}

function showCreateForm(req, res) {
  return res.render("admin/article-form", {
    title: "Add Article",
    mode: "create",
    action: "/admin/articles/new",
    errors: [],
    article: {
      title: "",
      content: "",
      publishedAt: new Date().toISOString().split("T")[0],
    },
  });
}

async function createArticleHandler(req, res) {
  const payload = {
    title: req.body.title,
    content: req.body.content,
    publishedAt: req.body.publishedAt,
  };

  const { errors } = await createArticle(payload);

  if (errors.length > 0) {
    return res.status(400).render("admin/article-form", {
      title: "Add Article",
      mode: "create",
      action: "/admin/articles/new",
      errors,
      article: payload,
    });
  }

  return res.redirect("/admin/dashboard");
}

async function showEditForm(req, res) {
  const article = await getArticleById(req.params.id);

  if (!article) {
    return res.status(404).render("errors/not-found", {
      title: "Article Not Found",
      message: "The article you want to edit does not exist.",
    });
  }

  return res.render("admin/article-form", {
    title: "Edit Article",
    mode: "edit",
    action: `/admin/articles/${article.id}/edit`,
    errors: [],
    article: {
      ...article,
      publishedAt: toDateInputValue(article.publishedAt),
    },
  });
}

async function updateArticleHandler(req, res) {
  const articleId = req.params.id;
  const payload = {
    title: req.body.title,
    content: req.body.content,
    publishedAt: req.body.publishedAt,
  };

  const { article, errors } = await updateArticle(articleId, payload);

  if (errors.length > 0) {
    return res.status(400).render("admin/article-form", {
      title: "Edit Article",
      mode: "edit",
      action: `/admin/articles/${articleId}/edit`,
      errors,
      article: {
        ...payload,
        id: articleId,
      },
    });
  }

  if (!article) {
    return res.status(404).render("errors/not-found", {
      title: "Article Not Found",
      message: "The article you want to update does not exist.",
    });
  }

  return res.redirect("/admin/dashboard");
}

async function deleteArticleHandler(req, res) {
  await deleteArticle(req.params.id);
  return res.redirect("/admin/dashboard");
}

module.exports = {
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
};
