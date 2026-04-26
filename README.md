# Personal Blog (Express + EJS + File Storage)

A server-rendered personal blog where guests can read articles and admin can create, edit, and delete posts.

## Features

- Guest section:
  - Home page with article list
  - Individual article page with publish date
- Admin section:
  - Login page
  - Dashboard listing all posts
  - Add article form
  - Edit article form
  - Delete action
- Filesystem storage:
  - Each article saved as one JSON file in `data/articles`

## Tech

- Node.js
- Express
- EJS templates
- express-session

## Project Structure

```text
.
├── data/
│   └── articles/
├── public/
│   └── styles.css
├── src/
│   ├── config/
│   │   └── adminConfig.js
│   ├── controllers/
│   │   └── blogController.js
│   ├── middleware/
│   │   └── auth.js
│   ├── routes/
│   │   └── blogRoutes.js
│   └── services/
│       └── articleService.js
├── views/
│   ├── admin/
│   ├── errors/
│   ├── guest/
│   └── partials/
├── index.js
└── package.json
```

## Setup

1. Install dependencies:

```bash
npm install
```

2. Run app:

```bash
npm start
```

3. Open:

```text
http://localhost:5000
```

## Admin Login

Default credentials:

- Username: `admin`
- Password: `admin123`

You can override using environment variables:

- `ADMIN_USERNAME`
- `ADMIN_PASSWORD`
- `SESSION_SECRET`

## Routes

- Guest:
  - `GET /`
  - `GET /article/:slug`
- Admin:
  - `GET /admin/login`
  - `POST /admin/login`
  - `POST /admin/logout`
  - `GET /admin/dashboard`
  - `GET /admin/articles/new`
  - `POST /admin/articles/new`
  - `GET /admin/articles/:id/edit`
  - `POST /admin/articles/:id/edit`
  - `POST /admin/articles/:id/delete`
