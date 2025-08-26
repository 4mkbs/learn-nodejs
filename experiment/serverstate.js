/*
 * Titile: serverstate.js
 * Description: 4mkbs code's
 * Author: Muhammad Khairul Bashar Sakib ( MKBS )
 * Date: 26/08/2025 23:44:24
 */

const os = require("os");
const serverStats = {
  uptime: os.uptime(),
  load: os.loadavg(),
  freeMemory: os.freemem(),
  totalMemory: os.totalmem(),
  cpus: os.cpus().length,
};

module.exports = serverStats;
