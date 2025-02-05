function timedCount() {
  for (var i = 0; i < 10 ** 9; i++) {
    if (i % (2.33333 * 10 ** 8) === 0) {
      postMessage(i);
      console.log(i);
    }
  }
}

timedCount();
