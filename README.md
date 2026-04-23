# GitHub User Info CLI

A simple Node.js CLI tool to fetch and display basic GitHub user information by username.

## Features

- Takes a GitHub username as a command-line argument
- Fetches user data from the GitHub API
- Prints:
  - Username
  - Name
  - Public repositories count
  - Followers
  - Following
  - Profile URL

## Requirements

- Node.js 18+ (uses built-in `fetch`)

## Installation

```bash
npm install
```

## Usage

### Run directly with Node

```bash
node index.js <github-username>
```

Example:

```bash
node index.js octocat
```

### Run as CLI command (`ghact`)

This project defines a bin command in `package.json`.

```bash
npm link
ghact <github-username>
```

Example:

```bash
ghact octocat
```

## Example Output

```text
Hello, octocat! Welcome to Node.js!
GitHub User: octocat
Name: The Octocat
Public Repos: 8
Followers: 22403
Following: 9
Profile URL: https://github.com/octocat
```

## Error Handling

- If no username is provided:
  - `Please provide a username as an argument`
- If the GitHub API request fails:
  - Prints an error message from the API response

## Notes

- GitHub unauthenticated requests are rate-limited.
- If the rate limit is exceeded, the API may return an error until the limit resets.
