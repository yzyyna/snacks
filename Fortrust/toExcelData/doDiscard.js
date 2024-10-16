const zh = require("./zh");
const en = require("./en");
const { log } = require("console");
const res = {};
const indexOrKey = [];

//
const func = (target, currentKey, flag, flag2, endKey) => {
  //   if (indexOrKey.includes("chargeItems")) {
  //     debugger;
  //   }
  if (typeof target === "string") {
    if (res[target] === undefined) {
      res[target] = func2(indexOrKey, en[currentKey]);
    }
    const lastElement = indexOrKey.pop();
    if (typeof lastElement === "number" && flag)
      // 如果是数组，继续删除前一个索引，否则只删除最后一个索引
      indexOrKey.splice(indexOrKey.length - 1, 1);
    if (flag2) {
      indexOrKey.splice(
        indexOrKey.findIndex((e) => e === endKey),
        1
      );
    }
  }
  if (typeof target === "object") {
    if (!Array.isArray(target)) {
      const keys = Object.keys(target);
      let index = 1;
      for (const key in target) {
        let flag = false;
        index++;
        if (index === keys.length) {
          flag = true;
        }
        indexOrKey.push(key);
        func(target[key], currentKey, false, flag, key);
      }
    } else {
      const length = target.length;
      target.forEach((e, index) => {
        let flag = false;
        if (length - 1 === index) {
          flag = true;
        }
        indexOrKey.push(index);
        func(e, currentKey, flag);
      });
    }
  }
};
// 从深度未知且元素类型未知且最终元素为字符串的对象中，通过一个索引数组找到最终值
const func2 = (arr, obj) => {
  console.log("%c ~ arr, obj ~ ", "color:#2ecc71", arr, obj);
  let c = {};
  arr.reduce((m, n) => {
    c = m[n];
    return c;
  }, obj);
  return c;
};
// 循环找
const func3 = (mu) => {
  if (typeof mu === "object") {
    if (Array.isArray(mu)) {
      mu.forEach((e) => {
        func(e);
      });
    } else {
      for (const key in mu) {
        func(mu[key], key);
      }
    }
  }
};
func3(zh);
log(Object.keys(res).length);

// *** test S *** //

a = { a: 1, b: { c: [2, 3, { s: "s", d: "d" }] } };
a2 = [0, 1, 2, 3, { arr: [0, 2] }];
b = ["b", "c", 2, "d"];
b2 = [4, "arr", 1];
c = func2(b2, a2);

log(c);
// *** test E *** //
