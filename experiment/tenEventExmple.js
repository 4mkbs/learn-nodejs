/*
 * Titile: tenEventExmple.js
 * Description: 4mkbs code's
 * Author: Muhammad Khairul Bashar Sakib ( MKBS )
 * Date: 27/08/2025 21:48:55
 */

const EventEmitter = require("events");

// 1.order emitter
const orderEmitter = new EventEmitter();

orderEmitter.on("orderPlaced", (order) => {
  console.log(`Order placed: ${order.id}`);
});

orderEmitter.on("orderPlaced", (order) => {
  console.log(`Sending confirmation email to ${order.customer}`);
});

const order = { id: "ORD123", customer: "john@example.com" };
orderEmitter.emit("orderPlaced", order);

// 2. user emitter
const userEmitter = new EventEmitter();

userEmitter.on("userRegistered", (user) => {
  console.log(`Welcome email sent to ${user.email}`);
});

userEmitter.on("userRegistered", (user) => {
  console.log(`User profile created for ${user.username}`);
});

const user = { username: "johndoe", email: "john@example.com" };
userEmitter.emit("userRegistered", user);

// 3. chat emitter
const chatEmitter = new EventEmitter();

chatEmitter.on("messageReceived", (msg) => {
  console.log(`[${msg.user}]: ${msg.text}`);
});

const message = { user: "Alice", text: "Hello, world!" };
chatEmitter.emit("messageReceived", message);

// 4. file emitter
const fileEmitter = new EventEmitter();

fileEmitter.on("fileUploaded", (file) => {
  console.log(`File uploaded: ${file.name}`);
});

fileEmitter.on("fileUploaded", (file) => {
  console.log(`Validating file: ${file.name}`);
});

const file = { name: "resume.pdf" };
fileEmitter.emit("fileUploaded", file);

// 5. payment emitter
const paymentEmitter = new EventEmitter();

paymentEmitter.on("paymentSuccess", (payment) => {
  console.log(`Payment received: $${payment.amount}`);
});

paymentEmitter.on("paymentSuccess", (payment) => {
  console.log(`Invoice generated for ${payment.customer}`);
});

const payment = { amount: 250, customer: "John Doe" };
paymentEmitter.emit("paymentSuccess", payment);

// 6. log emitter
const logEmitter = new EventEmitter();

logEmitter.on("error", (err) => {
  console.error(`Error: ${err.message}`);
});

logEmitter.on("warning", (warn) => {
  console.warn(`Warning: ${warn}`);
});

logEmitter.emit("error", new Error("Something went wrong"));
logEmitter.emit("warning", "Low disk space");

// 7. email emitter
const emailEmitter = new EventEmitter();

emailEmitter.on("emailSent", (email) => {
  console.log(`Email sent to ${email}`);
});

emailEmitter.on("emailFailed", (email) => {
  console.log(`Failed to send email to ${email}`);
});

emailEmitter.emit("emailSent", "user@example.com");
emailEmitter.emit("emailFailed", "fail@example.com");

// 8. device emitter
const deviceEmitter = new EventEmitter();

deviceEmitter.on("sensorTriggered", (sensor) => {
  console.log(`Sensor triggered: ${sensor.id}`);
});

deviceEmitter.on("deviceDisconnected", (device) => {
  console.log(`Device disconnected: ${device.name}`);
});

deviceEmitter.emit("sensorTriggered", { id: "sensor-01" });
deviceEmitter.emit("deviceDisconnected", { name: "Thermostat" });

// 9. data emitter
const dataEmitter = new EventEmitter();

dataEmitter.on("dataReceived", (data) => {
  console.log(`Data received: ${data}`);
});

dataEmitter.on("dataProcessed", (data) => {
  console.log(`Data processed: ${data.toUpperCase()}`);
});

dataEmitter.emit("dataReceived", "temperature=22");
dataEmitter.emit("dataProcessed", "temperature=22");

// 10. game emitter
const gameEmitter = new EventEmitter();

gameEmitter.on("playerJoined", (player) => {
  console.log(`${player.name} has joined the game.`);
});

gameEmitter.on("playerScored", (player) => {
  console.log(`${player.name} scored ${player.score} points!`);
});

const player = { name: "Alex", score: 100 };
gameEmitter.emit("playerJoined", player);
gameEmitter.emit("playerScored", player);

// exports
module.exports = {
  orderEmitter,
  userEmitter,
  chatEmitter,
  fileEmitter,
  paymentEmitter,
  logEmitter,
  emailEmitter,
  deviceEmitter,
  dataEmitter,
  gameEmitter,
};
