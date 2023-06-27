const clear = require("clear");
const chalk = require("chalk");
const { promisify } = require("util");
const figlet = promisify(require("figlet"));
const { onClone } = require("./download");

const log = (content) => console.log(chalk.green(content));

const spawn = async (...args) => {
  const { spawn } = require("child_process");
  return new Promise((resolve) => {
    const proc = spawn(...args);
    proc.stdout.pipe(process.stdout);
    proc.stderr.pipe(process.stderr);
    proc.on("close", () => {
      resolve();
    });
  });
};

module.exports = async (name) => {
  clear();
  const data = await figlet(name);
  log(`${data} Welcome`);
  log(`🚀创建项目...${name}`);
  await onClone("github:liaoCoder/wltech-cli", name);
  await spawn("pnpm", ["install"], { cwd: `./${name}` });
  log(`🚀下载完成...`);
  await spawn("pnpm", ["dev"], { cwd: `./${name}` });
};
