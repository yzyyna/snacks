var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  // 函数实现，参数 n 单位 毫秒 ；
  function sleep(n) {
    var start = new Date().getTime();
    while (true) {
      if (new Date().getTime() - start > n) {
        // 使用  break  实现；
        break;
      }
    }
  }

  // 调用方法，同步执行，阻塞后续程序的执行；
  sleep(5000);
  res.send("respond with a resource");
});
router.get("/getJson", function (req, res, next) {
  res.json({ a: "respond with a resource", b: 1, c: false });
});

module.exports = router;
