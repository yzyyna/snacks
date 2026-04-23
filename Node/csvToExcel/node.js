const fs = require("fs");
// const json2xls = require('json2xls');
const csv = require("csvtojson");

// to csv
csv()
  .fromFile("./csvvvv.csv")
  .then((jsonObj) => {
    /**
     * [
     * 	{a:"1", b:"2", c:"3"},
     * 	{a:"4", b:"5". c:"6"}
     * ]
     */

    const arr = jsonObj;
    /*
     * @Autor: linxu
     * @Date: 2024-04-07 09:22:11
     * @LastEditors: linxu
     * @LastEditTime: 2024-04-12 17:48:07
     * @Description:
     */
    const zh = require("./zh");

    const find = (item) => {
      const el = arr.find((e) => e.中文 === item);
      if (el) {
        return el.英文;
      } else {
        return false;
      }
    };

    const func = (objOrArr, father, index) => {
      const type = typeof objOrArr;
      if (type === "string") {
        const value = find(objOrArr);
        if (value) father[index] = value;
      } else {
        const isArr = Array.isArray(objOrArr);
        if (isArr) {
          objOrArr.forEach((item, index) => {
            func(item, objOrArr, index);
            const value = find(item);
            if (value) objOrArr[index] = value;
          });
        } else {
          for (key in objOrArr) {
            func(objOrArr[key], objOrArr, key);
          }
        }
      }
    };

    for (const key in zh) {
      const element = zh[key];
      for (key2 in element) {
        func(element[key2], element, key2);
      }
    }

    // let xls = json2xls(arr);
    // fs.writeFileSync('name.txt', JSON.stringify(zh), 'binary');
    fs.writeFileSync("English.txt", JSON.stringify(zh));
    fs.writeFileSync("en.js", "const en = " + JSON.stringify(zh));
  })
  .catch((err) => new Error(err));
