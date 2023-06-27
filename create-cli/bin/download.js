#!/usr/bin/env node
const { promisify } = require("util");
module.exports = {
  onClone: async (repo, desc) => {
    const onDownload = promisify(require("download-git-repo"));
    const ora = require("ora");
    const oraProgress = ora(`下载中...${repo}`);
    oraProgress.start();
    await onDownload(repo, desc);
    oraProgress.succeed();
  },
};
