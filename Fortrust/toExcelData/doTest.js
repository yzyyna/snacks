function findValueByPath(data, path) {
  let current = data;
  for (let i = 0; i < path.length; i++) {
    if (Array.isArray(current)) {
      // 如果当前项是数组，则使用数字索引访问
      current = current[path[i]];
    } else if (typeof current === "object" && current !== null) {
      // 如果当前项是对象，则使用字符串键访问
      current = current[path[i]];
    } else {
      // 如果遇到非预期类型或无法继续向下查找的情况
      return undefined;
    }
    // 如果在某一步找不到对应的键/索引，则提前返回undefined
    if (current === undefined) break;
  }
  return current; // 返回最终找到的值，或者undefined
}

// 示例用法
const complexObj = {
  a: {
    b: ["x", "y", { c: "目标字符串" }],
    d: [1, 2, 3],
  },
  e: "另一个字符串",
};

console.log(findValueByPath(complexObj, ["a", "b", 2, "c"])); // 输出: "目标字符串"
console.log(findValueByPath(complexObj, ["e"])); // 输出: "另一个字符串"
console.log(findValueByPath(complexObj, ["a", "d", 3])); // 输出: undefined，因为索引3超出范围

// 从深度未知且元素类型未知且最终元素为字符串的对象中，通过一个索引数组找到最终值
const func2 = (arr, obj) => {
  let c = {};
  arr.reduce((m, n) => {
    c = m[n];
    return c;
  }, obj);
  return c;
};
// *** test S *** //

a = { a: 1, b: { c: [2, 3, { s: "s", d: "d" }] } };
a2 = [0, 1, 2, 3, { arr: [0, 2] }];
b = ["b", "c", 2, "d"];
b2 = [4, "arr", 1];
c = func2(b2, a2);

console.log(c);
// *** test E *** //
