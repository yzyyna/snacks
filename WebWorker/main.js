const { Worker, isMainThread, parentPort } = require('worker_threads');

if (isMainThread) {
  const worker = new Worker('./demo_workers.js');
  worker.once('message', (message) => {
    console.log(message);  // Prints 'Hello, world!'.
    console.log('this',this,worker)
  });
  worker.postMessage('Hello, world!');
} else {
  // When a message from the parent thread is received, send it back:
  parentPort.once('message', (message) => {
    parentPort.postMessage(message);
  });
}