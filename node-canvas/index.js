#!/usr/bin/env node
// 创建一个新的canvas对象
const { createCanvas } = require("canvas");
const canvas = createCanvas(200, 200);

// 通过绘制矩形来填充一个区域的颜色
const ctx = canvas.getContext("2d");
ctx.fillRect(0, 0, 100, 200);

ctx.font = "30px Impact";
ctx.rotate(0.1);
ctx.fillText("Hello World!", 50, 100);

// 创建一个png编码的Buffer，将图像写入到文件中的方法
const fs = require("fs");
const out = fs.createWriteStream(__dirname + "/text.png");
const stream = canvas.createPNGStream();
stream.pipe(out);
out.on("finish", () => console.log("The PNG file was created."));
