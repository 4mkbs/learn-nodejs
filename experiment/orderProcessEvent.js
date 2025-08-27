/*
 * Titile: orderProcessEvent.js
 * Description: 4mkbs code's
 * Author: Muhammad Khairul Bashar Sakib ( MKBS )
 * Date: 27/08/2025 21:02:07
 */

// order system
const EventEmitter = require("events");

// create an emitter instance
class OrderSystem extends EventEmitter {}
const orderSystem = new OrderSystem();

orderSystem.on("order placed", (order) => {
  console.log(`📦 Order received: ${order.id} for ${order.customer}`);
  saveToDatabase(order);
});

orderSystem.on("order placed", (order) => {
  sendEmail(order.customer);
});

orderSystem.on("order placed", (order) => {
  updateInventory(order.items);
});

orderSystem.on("order placed", (order) => {
  logEvent(order);
});

orderSystem.on("order shipped", (order) => {
  console.log(`🚚 Order ${order.id} has been shipped.`);
});

orderSystem.on("order delivered", (order) => {
  console.log(`📦 Order ${order.id} has been delivered.`);
});

function saveToDatabase(order) {
  console.log(`💾 Saving order ${order.id} to database...`);
}

function sendEmail(customerEmail) {
  console.log(`📧 Sending order confirmation email to ${customerEmail}...`);
}
function updateInventory(items) {
  console.log(`📦 Updating inventory for items: ${items.join(", ")}...`);
}

function logEvent(order) {
  console.log(`📝 Logging event for order ${order.id}...`);
}

const order = {
  id: "A213",
  customer: "john@gmail.com",
  items: ["laptop", "mouse"],
};

orderSystem.emit("order placed", order);
orderSystem.emit("order shipped", order);
orderSystem.emit("order delivered", order);

module.exports = orderSystem;
