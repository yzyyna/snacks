const axios = require("axios");

const url = "http://localhost:3000/users";
// Make a request for a user with a given ID
// axios
//   .get(url)
//   .then(function (response) {
//     // handle success
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });

//   other way
// axios({
//   method: "get",
//   url,
// }).then(function (response) {
//   // handle success
//   console.log("second time:", response.data);
// });
// // Want to use async/await? Add the `async` keyword to your outer function/method.
// async function getUser() {
//   try {
//     const response = await axios.get("/user?ID=12345");
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }

// The Axios Instance
const instance = axios.create({
  baseURL: url,
  timeout: 1000 * 6,
  //   headers: { "X-Custom-Header": "foobar" },
});
// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    console.log("%c ~ config ~ ", "color:#2ecc71");
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    console.log("%c ~ response ~ ", "color:#2ecc71");
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
// Handling Errors
// instance
//   //   .get("/22")
//   .get("")
//   .then((response) => {
//     console.log("third time:", response.data);
//   })
//   .catch(function (error) {
//     if (error.response) {
//       console.log("%c ~ error.response ~ ", "color:#2ecc71");
//       // The request was made and the server responded with a status code
//       // that falls out of the range of 2xx
//       console.log(error.response.data);
//       console.log(error.response.status);
//       console.log(error.response.headers);
//     } else if (error.request) {
//       console.log("%c ~ error.request ~ ", "color:#2ecc71");
//       // The request was made but no response was received
//       // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
//       // http.ClientRequest in node.js
//       console.log(error.request);
//     } else {
//       // Something happened in setting up the request that triggered an Error
//       console.log("Error", error.message);
//     }
//     console.log(error.config);
//   });
// Cancellation
// const controller = new AbortController();

// instance
//   .get("", {
//     signal: controller.signal,
//   })
//   .then(function (response) {
//     //...
//   })
//   .catch(function (error) {
//     if (error.response) {
//       console.log("%c ~ error.response ~ ", "color:#2ecc71");
//       // The request was made and the server responded with a status code
//       // that falls out of the range of 2xx
//       console.log(error.response.data);
//       console.log(error.response.status);
//       console.log(error.response.headers);
//     } else if (error.request) {
//       console.log("%c ~ error.request ~ ", "color:#2ecc71");
//       // The request was made but no response was received
//       // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
//       // http.ClientRequest in node.js
//       console.log(error.request);
//     } else {
//       // Something happened in setting up the request that triggered an Error
//       console.log("Error", error.message);
//     }
//     // console.log(error.config);
//   });
// cancel the request
// controller.abort() ;
// *** Example with a timeout using latest AbortSignal.timeout() API [nodejs 17.3+]:
// https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
// instance
//   .get("", {
//     signal: AbortSignal.timeout(4000), //Aborts request after 5 seconds
//   })
//   .then(function (response) {
//     //...
//   })
//   .catch(function (error) {
//     if (error.response) {
//       console.log("%c ~ error.response ~ ", "color:#2ecc71");
//       // The request was made and the server responded with a status code
//       // that falls out of the range of 2xx
//       console.log(error.response.data);
//       console.log(error.response.status);
//       console.log(error.response.headers);
//     } else if (error.request) {
//       console.log("%c ~ error.request ~ ", "color:#2ecc71");
//       // The request was made but no response was received
//       // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
//       // http.ClientRequest in node.js
//       //   console.log(error.request);
//     } else {
//       // Something happened in setting up the request that triggered an Error
//       console.log("Error", error.message);
//     }
//     // console.log(error.config);
//   });

const get = (url, params, cancelTime) => {
  return new Promise((resolve, reject) => {
    const ct = cancelTime;
    const axiosRequestConfig = { params: params };
    if (ct) {
      axiosRequestConfig.signal = AbortSignal.timeout(cancelTime);
    }
    instance
      .get(url, axiosRequestConfig)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
module.exports = { get };
