const zh = require("./zh");
const en = require("./en");
const { log } = require("console");
const res = {};
const indexOrKey = [];
const func = (target, currentKey) => {
  if (typeof target === "string") {
    indexOrKey.length = 0;
    if (res[target] === undefined) {
      //   if (indexOrKey.includes("formLabel")) {
      //     debugger;
      //   }
      res[target] = func2(indexOrKey, en[currentKey]);
    }
  }
  if (typeof target === "object") {
    if (!Array.isArray(target)) {
      for (const key in target) {
        indexOrKey.push(key);
        func(target[key], currentKey);
      }
    } else {
      target.forEach((e, index) => {
        indexOrKey.push(index);
        func(e, currentKey);
      });
    }
  }
};
// 从深度未知且元素类型未知且最终元素为字符串的对象中，通过一个索引数组找到最终值
const func2 = (arr, obj) => {
  let c = {};
  arr.reduce((m, n) => {
    c = m[n];
    return c;
  }, obj);
  return c;
};
const func3 = (cu) => {
  if (typeof cu === "string") {
  } else {
    if (Array.isArray(cu)) {
      cu.forEach((e) => {
        func();
      });
    } else {
      for (const key in cu) {
        func(cu[key], key);
      }
    }
  }
};
func3(zh);

// *** test S *** //
a = { a: 1, b: { c: [2, 3, { s: "s", d: "d" }] } };
a2 = [0, 1, 2, 3, { arr: [0, 2] }];
b = ["b", "c", 2, "d"];
b2 = [4, "arr", 1];
c = func2(b2, a2);

log(c);
// *** test E *** //
