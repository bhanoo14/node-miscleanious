// const os = require("os");

// console.log(os.userInfo());

// const express = require("express");
// console.log(express);

// const path = require("path");

// console.log(path);

// const http =  require("http");
// console.log(http);const path = require("path");
// const fs = require("fs");

// const index = fs.readFileSync("./index.html", "utf8");

// const http = require("http");
// const fs = require("fs");

// const index = fs.readFileSync(
//   "/Users/Prem/OneDrive/Desktop/fullstack/server/files/hello.html",
//   "utf8"
// );

// const server = http.createServer((req, res) => {
//   res.end(index);
// });

// server.listen(8585, () => {
//   console.log("server is running on http://localhost:8585");
// });

// const http = require("http");
// const port = 8585;
// const server = http.createServer((req, res) => {
//   //   console.log(req.method, req.url);
//   //   switch ((req.method, req.ip, req.url)) {
//   //     case "/":
//   //       res.end("Welcome");
//   //       break;
//   //     case "/api":
//   //       res.end("post api");
//   //       break;
//   //     case "/put":
//   //       res.end("put api");
//   //       break;
//   //     case "/delete":
//   //       res.end("delete api");
//   //       break;
//   //     default:
//   //       res.end("unknown method");
//   //   }
// });

// // req ip method , headers  url

// server.listen(port, () =>
//   console.log(`server is running on http://localhost:${port}`)
// );

// const express = require("express");

// const express = require("express");

// const app = express();
// const port = 8585;
// const path = require("path");
// const fs = require("fs");

// const dir = path.join(__dirname, "public");

// for (i = 0; i <= 10; i++) {
//   fs.unlinkSync(`${dir}/file${i}.txt`);
// }

// console.log(process.argv);

// const input = process.argv;

// // console.log(input);

// if (input[2] === "add") {
//   fs.writeFileSync(input[3], input[4]);
// } else if (input[2] === "remove") {
//   fs.unlinkSync(input[3]);

// ! read directory
const express = require("express");
const app = express();
const port = 8585;
const fs = require("fs");
const path = require("path");

// const dir = path.join(__dirname, "hello");

// fs.rename(dir, "images", (err, d) => {
//   console.log(d);
// });
// console.log(d);

// fs.readdir(dir, (err, file) => {
//   console.log(file);
// });

const dir = path.join(__dirname, "images");

const index = fs.readFileSync(`${dir}/index.html`, "utf-8");

const product = JSON.parse(fs.readFileSync("db.json", "utf-8"));

const data = product.products;
// console.log(product);

app.get("/", (req, res) => {
  const id = req.query.id;

  const newProduct = data.find((item) => item.id === +id);

  const newIndex = index
    .replace("**title**", newProduct.title)
    .replace("**description**", newProduct.description)
    .replace("**price**", newProduct.price);

  res.send(newIndex);
});

app.get("/data", (req, res) => {
  res.send(data);
});

app.get("/product/:name", (req, res) => {
  const name = req.params.name;
  console.log(name);

  res.send("hello world");
});

app.get("/about", (req, res) => {
  const pass = req.query.pass;

  if (pass !== "123") {
    console.log("");
    res.send("<h1>Please enter a valid password</h1>");
  } else {
    console.log(pass);
    res.send("<h1>hello world</h1>");
  }
  //   console.log(name);
});

app.listen(port, () => {
  console.log(`server listening on http://localhost:${port}`);
});

// const dir = path.join(__dirname, "images");

// fs.readdir(dir, (err, files) => {
//   files.forEach((item) => {
//     console.log("file name is : " + item);
//   });
// });

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });

// !  file system
// 1. create file
// 2. create multiple file
// 3. create files in folder
// how to use path module
// how to fs module
// create file using terminal
//  rename file = const directory = path.join(__dirname, 'yourFolderName'); // Replace 'yourFolderName' with your actual folder name
// const oldFilename = 'oldFilename.txt';
// const newFilename = 'newFilename.txt';

// // Construct the full paths
// const oldPath = path.join(directory, oldFilename);
// const newPath = path.join(directory, newFilename);

// // Use fs.rename to rename the file
// fs.rename(oldPath, newPath, (err) => {
//   if (err) {
//     console.error('Error renaming the file:', err);
//   } else {
//     console.log('File renamed successfully');
//   }

// ! rename folder
// const oldFolderPath = path.join(__dirname, 'a'); //
// const newFolderPath = path.join(__dirname, 'b'); //

// fs.rename(oldFolderPath, newFolderPath, (err) => {
//   if (err) {
//     console.error('Error renaming the folder:', err);
//   } else {
//     console.log('Folder renamed successfully');
//   }
// });

// ! read directory

// const dir = path.join(__dirname, "images");

// fs.readdir(dir, (err, files) => {
//   files.forEach((item) => {
//     console.log("file name is : " + item);
//   });
// });

// ! send data dynamically

// const express = require("express");
// const app = express();
// const port = 8585;
// const path = require("path");
// const fs = require("fs");

// const data = JSON.parse(fs.readFileSync("./db.json", "utf8"));

// const product = data.products;
// const dir = path.join(__dirname, "images");
// const index = fs.readFileSync(`${dir}/index.html`, "utf8");

// app.get("/", (req, res) => {
//   const id = +req.query.id;

//   const newProduct = product.find((item) => item.id === id);
//   const changeData = index.replace("**hello world**", newProduct.title);
//   res.send(changeData);
// });

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });

// const obj = {
//   p: [
//     {
//       name: "abc",
//       email: "abc@example.com",
//       mobile: 5465454,
//       pass: "password",
//     },
//   ],
// };

// console.log(obj);

// console.log(JSON.parse(obj));
// const d = JSON.stringify(obj);
// console.log(d);
// console.log(obj);
