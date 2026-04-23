const zh = require("./zh");
const en = require("./en");
let res = {};

// 操作
const f = (obj) => {
  if (typeof obj === "string") {
    if (res[obj] === undefined) {
      res[obj] = findStringInObj(findIndexArr(obj, zh), en);
    }
  } else {
    if (Array.isArray(obj)) {
      obj.forEach((e) => {
        f(e);
      });
    } else {
      for (const key in obj) {
        f(obj[key]);
      }
    }
  }
};
// 从深度未知且元素类型未知且最终元素为字符串的对象中，通过一个索引数组找到最终值
const findStringInObj = (arr, obj) => {
  let c = {};
  arr.reduce((m, n) => {
    c = m[n];
    return c;
  }, obj);
  return c;
};
// 索引
const findIndexArr = (str, obj) => {
  const res = [];
  const f = (str, obj) => {
    const current = obj;
    if (current === str) {
      res.push(key);
    } else {
      if (typeof current === "string") return;
      if (Array.isArray(current)) {
        current.forEach((e, i) => {
          res.push(i);
          findIndexArr(str, e);
        });
      } else {
        for (const ky in current) {
          res.push(ky);
          findIndexArr(str, current[ky]);
        }
      }
    }
  };
  f(str, obj);
  return res;
};

// f(zh);
console.log(findIndexArr("搜素", zh), res, Object.keys(res).length);
