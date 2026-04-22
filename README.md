# Learn Node.js Auth API

A simple Node.js authentication API built with Express, MongoDB (Mongoose), JWT, and bcrypt.

## Features

- User signup with hashed password
- User login with JWT token generation
- Protected profile endpoint with Bearer token auth
- Email and password validation
- MongoDB connection with startup error handling

## Tech Stack

- Node.js
- Express
- MongoDB + Mongoose
- bcryptjs
- jsonwebtoken
- dotenv

## Project Structure

```text
learn-nodejs/
  config/
    db.js
  controllers/
    auth.js
  middlewares/
    authMiddleware.js
  models/
    user.js
  routes/
    authRoutes.js
  server.js
  package.json
  .env
```

## Prerequisites

- Node.js 18+
- MongoDB URI (local or Atlas)

## Installation

```bash
npm install
```

## Environment Variables

Create a `.env` file in the project root:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
```

Notes:
- If `PORT` is not set, the server uses `5000` by default.
- `MONGO_URI` and `JWT_SECRET` are required.

## Run the App

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

Health check endpoint:

- `GET /api`

Example:

```bash
curl http://localhost:3000/api
```

## API Endpoints

Base URL:

- `http://localhost:3000/api/auth`

### 1) Signup

- Method: `POST`
- Path: `/signup`

Request body:

```json
{
  "name": "Sakib",
  "email": "sakib@example.com",
  "password": "123456"
}
```

Success response:

- `201 Created`

```json
{
  "msg": "user created successfully."
}
```

Possible errors:

- `400` Valid email is required
- `400` Password must be at least 6 characters
- `400` User already exists

### 2) Login

- Method: `POST`
- Path: `/login`

Request body:

```json
{
  "email": "sakib@example.com",
  "password": "123456"
}
```

Success response:

- `200 OK`

```json
{
  "token": "<jwt_token>"
}
```

Possible errors:

- `400` Email and password are required
- `400` Invalid credentials

### 3) Profile (Protected)

- Method: `GET`
- Path: `/profile`
- Header: `Authorization: Bearer <jwt_token>`

Success response:

- `200 OK`

```json
{
  "msg": "Welcome to your profile",
  "user": {
    "_id": "...",
    "name": "Sakib",
    "email": "sakib@example.com",
    "__v": 0
  }
}
```

Possible errors:

- `401` Unauthorized
- `404` User not found

## Middleware Flow

Protected routes use route-level middleware.

Current flow for profile route:

1. Client sends request to `GET /api/auth/profile` with `Authorization: Bearer <token>`
2. Router runs `authMiddleware` first
3. Middleware validates Bearer format and verifies JWT
4. Middleware attaches decoded payload to `req.user`
5. Controller (`getProfile`) reads `req.user.id` and fetches user data

Code locations:

- Route wiring: `routes/authRoutes.js`
- Middleware: `middlewares/authMiddleware.js`
- Profile controller: `controllers/auth.js`

## Quick cURL Testing Flow

### Signup

```bash
curl -X POST http://localhost:3000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"name":"Sakib","email":"sakib@example.com","password":"123456"}'
```

### Login

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"sakib@example.com","password":"123456"}'
```

Copy the token from the login response.

### Profile

```bash
curl http://localhost:3000/api/auth/profile \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

## Scripts

- `npm start` -> run server with Node
- `npm run dev` -> run server with Nodemon

## Current Improvement Ideas

- Add centralized error handler middleware
- Add request validation library (for example, `express-validator`)
- Add tests (unit + integration)

## License

ISC
