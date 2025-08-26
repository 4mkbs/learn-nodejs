const serverStats = require("./experiment/serverstate");
// const { server } = require("./experiment/littleserver");
// const app = require("./express");
// const osModule = require("./experiment/os");
// const pathModule = require("./experiment/path");
const fsmodule = require("./experiment/fs");

//log
// console.log(serverStats);
// osModule.status();
// console.log(osModule.osbasic);
// console.log(pathModule);
fsmodule.fsbasic();
