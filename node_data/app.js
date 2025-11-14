const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");

const app = express();
// 相关配置
app.use(logger("dev"));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false })); // 解析 application/x-www-form-urlencoded 格式的请求体
app.use(bodyParser.json()); // 解析 application/json 格式的请求体

// 写接口
app.get("/login", (req, res) => {
  let { username, password } = req.body;
  console.log(username, password);
  let useInfo = {
    id: 8,
    username: "guo",
    state: 1,
    headImage: "image/binbin.jpg",
  };
  let menuInfo = [
    {
      id: 1,
      name: "首页",
      path: "/home",
      icon: "home",
    },
    {
      id: 2,
      name: "用户管理",
      path: "/user",
      icon: "user",
    },
    {
      id: 3,
      name: "角色管理",
      path: "/role",
      icon: "role",
    },
  ];
  let returnData = {
    data: {
      useInfo,
      menuInfo,
    },
    token: "123456",
    returnCode: 200,
  };
  res.send(returnData);
});

// 相关模块配置
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
