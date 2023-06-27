#!/usr/bin/env node
// const path = require("path");
const fs = require("fs");
const CWD = process.cwd();
const program = require("commander");
program.version(require("../package.json").version);

program.command("init <name>").description("init project...").action(require("./init"));

program
  .command("config")
  .description("读取配置文件")
  .action((appName, options) => {
    let config = {
      path: "svg",
    };
    const configPath = CWD + "/kkb.config.js";
    // 如果使用了配置文件，则以配置文件为准
    if (fs.existsSync(configPath)) {
      const userConfig = require(configPath);
      config = { ...config, ...userConfig };
      console.log(`存在配置文件kkb.config.js，获取到的名字为`, userConfig);
    } else {
      console.log(`不存在配置文件`);
    }
  });

program.parse(process.argv);
