// *** Fetch *** //
fetch("https://elm.cangdu.org/v1/pois?city_id=1&keyword=迪士尼&type=search", {
  credentials: "include",
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  mode: "cors",
  cache: "force-cache",
})
  .then((result) => {
    console.log('%c ~ result ~ ', 'color:#2ecc71', result)
    return 'yes';
  })
  .then((result) => {
    console.log('%c ~ result ~ ', ' color:#2ecc71', result)
    console.log(result);
  })
  .catch((reason) => {
    console.error("Error...", reason);
  });

// *** XMLHttpRequest *** //
// https://developer.mozilla.org/zh-CN/docs/Web/API/ProgressEvent
const onLoad = function (pe) {
  // XMLHttpRequest 的 response 属性返回响应的正文。返回的类型为
  // ArrayBuffer、Blob、Document、JavaScript Object 或字符串中的一个。这取决于请求的 responseType 属性
  // https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/response
  console.log(pe, this, this.response);
};

var xhr = new XMLHttpRequest();
xhr.addEventListener("load", onLoad);
// TODO 测试后端 api 
xhr.open(
  "GET",
  "https://elm.cangdu.org/v1/pois?city_id=1&keyword=迪士尼&type=search"
);
xhr.send();
