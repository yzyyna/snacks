var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
router.get("/getJson", function (req, res, next) {
  res.json({ a: "respond with a resource", b: 1, c: false });
});

module.exports = router;
