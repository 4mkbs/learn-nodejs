#! /usr/bin/env node
const username = process.argv[2];

if (!username) {
  console.log("Please provide a username as an argument");
  process.exit(1);
}

console.log(`Hello, ${username}! Welcome to Node.js!`);
(async function () {
  try {
    const res = await fetch(
      "https://api.github.com/users/" + username
    );
    const data = await res.json();
    if (!res.ok) {
      console.error("Error fetching GitHub data:", data.message);
      return;
    }

    displayActivity(data);
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
  }
})();


function displayActivity(data) {
  console.log(`GitHub User: ${data.login}`);
  console.log(`Name: ${data.name}`);
  console.log(`Public Repos: ${data.public_repos}`);
  console.log(`Followers: ${data.followers}`);
  console.log(`Following: ${data.following}`);
  console.log(`Profile URL: ${data.html_url}`);
}