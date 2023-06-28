const fs = require("fs");

const onReadFile = () => {
  //异步
  fs.readFile("./text.html", (err, date) => {
    console.log(date.toString());
  });

  //同步
  const data = fs.readFileSync("./text.html");
  console.log(data.toString());
};

const onWriteFile = () => {
  //异步版本的写入
  fs.writeFile("./text.html", "我是写入的内容", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("文件写入成功");
    }
  });

  //同步版本的写入
  fs.writeFileSync("./text.html", "我是同步写入的文件");
};

const onDeleteFile = () => {
  //异步操作删除
  fs.unlink("./text.html", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("删除文件成功");
    }
  });

  //同步操作删除
  fs.unlinkSync("./text.html");
};

const onCreateDir = () => {
  //异步操作创建文件夹
  fs.mkdir("./public", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("public文件夹创建成功");
    }
  });

  //同步操作创建文件夹
  fs.mkdirSync("./public");
};

const onDeleteDir = () => {
  //异步操作删除文件夹
  fs.rmdir("./public", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("删除public文件夹");
    }
  });

  //同步操作删除文件夹
  fs.rmdirSync("./public");
};

const onGetFileInfo = () => {
  //获取text.html文件信息
  fs.stat("./text.html", (err, info) => {
    if (err) {
      console.log(err);
    } else {
      // info.isFile() 判断是不是一个文件 返回结果为true
      console.log(info.isFile());
    }
  });

  //获取public文件夹信息
  fs.stat("./public", (err, info) => {
    if (err) {
      console.log(err);
    } else {
      // info.isDirectory() 判断是不是一个文件 返回结果为true
      console.log(info.isDirectory());
    }
  });
};

const onGetAllFileInDir = () => {
  //异步读取文件夹里面的所有文件
  fs.readdir("./public", (err, files) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(files); 返回的文件是个数组,可以用forEach循环输出文件名
      files.forEach((x) => {
        console.log("有" + x + "这个文件");
      });
    }
  });

  //同步获取文件夹里面的所有文件
  let files = fs.readdirSync("./public");
  console.log(files); //返回的是一个数组
};

const onRenameFile = () => {
  //第二个参数如果是目录里面的文件的话他就会把文件移动
  //如果单独只是文件名的话他就会把文件重命名
  //异步操作移动并重命名文件
  fs.rename("./text.html", "./public/index.html", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("已经移动并更改");
    }
  });

  // 同步操作移动并重命名文件
  fs.renameSync("./text.html", "./public/index.html");
};

const onCopyFile = () => {
  //异步复制并重命名文件
  fs.copyFile("./index.html", "./public/index.html", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("已经复制并移动");
    }
  });

  // 同步操作复制并重命名文件
  fs.copyFileSync("./index.html", "./public/index.html");
};

// onReadFile();
// onWriteFile();
// onDeleteFile();
// onCreateDir();
// onDeleteDir();
// onGetFileInfo();
// onGetAllFileInDir();
// onRenameFile();
onCopyFile();
