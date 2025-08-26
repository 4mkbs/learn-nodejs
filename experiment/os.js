/*
 * Titile: os.js
 * Description: 4mkbs code's
 * Author: Muhammad Khairul Bashar Sakib ( MKBS )
 * Date: 26/08/2025 23:44:07
 */

// os module example
const os = require("os");
const { exec } = require("child_process");

const osbasic = {
  platform: os.platform(),
  arch: os.arch(),
  cpus: os.cpus(),
  availableParallelism: os.availableParallelism(),
  freemem: os.freemem(),
  totalmem: os.totalmem(),
  homedir: os.homedir(),
  tmpdir: os.tmpdir(),
  uptime: os.uptime(),
  userInfo: os.userInfo(),
};

function status() {
  console.log(os.platform());
  if (os.platform() === "linux") {
    exec("ls -la", (err, stdout, stderr) => {
      if (err) {
        console.error(`Error: ${err.message}`);
        return;
      }
      if (stderr) {
        console.error(`Stderr: ${stderr}`);
        return;
      }
      console.log(`Stdout: ${stdout}`);
    });
  } else {
    exec("dir");
  }
}

module.exports = { osbasic, status };
