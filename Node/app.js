const http = require("http");
const fs = require("fs");

const fileStr = "E:\\project\\snacks\\Node\\text.txt";
const buf = fs.readFileSync(fileStr);
const data = fs.readFileSync(fileStr, "utf8");
const hostname = "127.0.0.1";
const port = 3000;
const server = http.createServer((req, res) => {
  console.log(req.url);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  // res.end("Hello World");
  res.end(data);
});
const postData = JSON.stringify({
  msg: "Hello World!",
});
const options = {
  hostname: hostname,
  port: port,
  path: "/test",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": Buffer.byteLength(postData),
  },
};
server.on("error", (e) => {
  if (e.code === "EADDRINUSE") {
    console.log("Address in use, retrying...");
    setTimeout(() => {
      server.close();
      server.listen(PORT, HOST);
    }, 1000);
  }
});
server.listen(port, hostname, () => {
  console.log(buf, data);
  console.log(`Server running at http://${hostname}:${port}/`);
});
const req = http.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  res.setEncoding("utf8");
  res.on("data", (chunk) => {
    console.log(`BODY: ${chunk}`);
  });
  res.on("end", () => {
    console.log("No more data in response.");
  });
});
req.on("error", (e) => {
  console.error(`problem with request: ${e.message}`);
});
// // Write data to request body
// req.write(postData);
// req.end();
