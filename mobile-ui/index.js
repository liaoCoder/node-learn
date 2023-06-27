const fs = require("fs");
const CWD = process.cwd();
const path = require("path");
// fs.stat(`${CWD}/message.js`, (err, stats) => {
//   console.log("stats", stats);
// });
const files = fs.readdirSync(`${CWD}/lib`);
const content = files.reduce((acc, item) => {
  if (item.startsWith("Wl")) {
    acc += `export { default as ${item} } from "./${item}/index.js";`;
  }
  return acc;
}, "");
fs.writeFileSync("./lib/enter.js", content);

// console.log(path.basename(`${CWD}/lib`));
// fs.readdir('./public',(err,files)=>{
// 	if (err) {
// 		console.log(err);
// 	} else{
// 		// console.log(files); 返回的文件是个数组,可以用forEach循环输出文件名
// 		 files.forEach((x)=>{
// 			 console.log('有'+ x +'这个文件');
// 		 })
// 	}
// })
