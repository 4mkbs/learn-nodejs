const fs = require("fs/promises");
const path = require("path");
const crypto = require("crypto");

const articlesDir = path.join(__dirname, "..", "..", "data", "articles");

function toSafeSlug(input) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

async function ensureArticlesDir() {
  await fs.mkdir(articlesDir, { recursive: true });
}

async function readArticleFile(filePath) {
  const raw = await fs.readFile(filePath, "utf8");
  return JSON.parse(raw);
}

async function getAllArticles() {
  await ensureArticlesDir();

  const files = await fs.readdir(articlesDir);
  const jsonFiles = files.filter((file) => file.endsWith(".json"));

  const articles = await Promise.all(
    jsonFiles.map(async (file) => {
      const fullPath = path.join(articlesDir, file);
      return readArticleFile(fullPath);
    })
  );

  return articles.sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
  );
}

async function getArticleById(id) {
  await ensureArticlesDir();

  const filePath = path.join(articlesDir, `${id}.json`);

  try {
    return await readArticleFile(filePath);
  } catch (error) {
    if (error.code === "ENOENT") {
      return null;
    }

    throw error;
  }
}

async function getArticleBySlug(slug) {
  const articles = await getAllArticles();
  return articles.find((article) => article.slug === slug) || null;
}

function isSlugTaken(slug, articles, ignoreId = null) {
  return articles.some(
    (article) => article.slug === slug && article.id !== ignoreId
  );
}

function buildUniqueSlug(baseSlug, articles, ignoreId = null) {
  const fallback = baseSlug || "article";

  if (!isSlugTaken(fallback, articles, ignoreId)) {
    return fallback;
  }

  let counter = 2;
  let nextSlug = `${fallback}-${counter}`;

  while (isSlugTaken(nextSlug, articles, ignoreId)) {
    counter += 1;
    nextSlug = `${fallback}-${counter}`;
  }

  return nextSlug;
}

function validateArticleInput(input) {
  const errors = [];

  if (!input.title || !input.title.trim()) {
    errors.push("Title is required.");
  }

  if (!input.content || !input.content.trim()) {
    errors.push("Content is required.");
  }

  if (!input.publishedAt || Number.isNaN(Date.parse(input.publishedAt))) {
    errors.push("Valid publication date is required.");
  }

  return errors;
}

async function createArticle(input) {
  const validationErrors = validateArticleInput(input);
  if (validationErrors.length > 0) {
    return { errors: validationErrors };
  }

  const articles = await getAllArticles();
  const id = crypto.randomUUID();
  const baseSlug = toSafeSlug(input.title);
  const slug = buildUniqueSlug(baseSlug, articles);

  const article = {
    id,
    slug,
    title: input.title.trim(),
    content: input.content.trim(),
    publishedAt: new Date(input.publishedAt).toISOString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  const filePath = path.join(articlesDir, `${id}.json`);
  await fs.writeFile(filePath, JSON.stringify(article, null, 2), "utf8");

  return { article, errors: [] };
}

async function updateArticle(id, input) {
  const existing = await getArticleById(id);
  if (!existing) {
    return { article: null, errors: ["Article not found."] };
  }

  const validationErrors = validateArticleInput(input);
  if (validationErrors.length > 0) {
    return { article: null, errors: validationErrors };
  }

  const articles = await getAllArticles();
  const baseSlug = toSafeSlug(input.title);
  const slug = buildUniqueSlug(baseSlug, articles, id);

  const updatedArticle = {
    ...existing,
    slug,
    title: input.title.trim(),
    content: input.content.trim(),
    publishedAt: new Date(input.publishedAt).toISOString(),
    updatedAt: new Date().toISOString(),
  };

  const filePath = path.join(articlesDir, `${id}.json`);
  await fs.writeFile(filePath, JSON.stringify(updatedArticle, null, 2), "utf8");

  return { article: updatedArticle, errors: [] };
}

async function deleteArticle(id) {
  const filePath = path.join(articlesDir, `${id}.json`);

  try {
    await fs.unlink(filePath);
    return true;
  } catch (error) {
    if (error.code === "ENOENT") {
      return false;
    }

    throw error;
  }
}

function toDateInputValue(isoDate) {
  if (!isoDate) {
    return "";
  }

  return new Date(isoDate).toISOString().split("T")[0];
}

module.exports = {
  getAllArticles,
  getArticleById,
  getArticleBySlug,
  createArticle,
  updateArticle,
  deleteArticle,
  toDateInputValue,
};
