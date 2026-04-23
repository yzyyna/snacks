<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div>
      <button @click="makeWorker">开始线程</button>
      <!--在计算时 往input输入值时 没有发生卡顿-->
      <p><input type="text" /></p>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Worker from "worker-loader!./worker";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  methods: {
    makeWorker() {
      // 获取计算开始的时间
      let start = performance.now();
      // 新建一个线程
      let worker = new Worker();
      // 线程之间通过postMessage进行通信
      worker.postMessage(0);
      // 监听message事件
      worker.addEventListener("message", (e) => {
        // 关闭线程
        worker.terminate();
        // 获取计算结束的时间
        let end = performance.now();
        // 得到总的计算时间
        let durationTime = end - start;
        console.log("计算结果:", e.data);
        console.log(`代码执行了 ${durationTime} 毫秒`);
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
