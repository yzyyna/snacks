const WebSocket = require('ws');

const port = 8899;
const wss = new WebSocket.Server({ port });

console.log(`🚀 [云猫模拟端] 服务启动 (兼容模式)`);

wss.on('connection', function (ws, request) {
  // 打印一下 request 看看，如果 request 也是 undefined，说明是库的调用方式问题
  // 但没关系，我们直接进入逻辑
  console.log(`\n--------------------------------`);
  console.log(`[连接] 客户端已接入`);

  ws.on('message', function (message) {
    const msgStr = message.toString().trim();
    
    // 1. 握手逻辑：不管路径了，直接识别内容
    if (msgStr.toLowerCase() === 'cloudcat') {
      console.log(`[成功] 收到握手信号: ${msgStr} -> 回传: CloudCat`);
      ws.send('CloudCat');
      return;
    }

    // 2. 结束指令
    if (msgStr === 'end') {
      console.log(`[完成] 收到 end 指令`);
      return;
    }

    // 3. 关闭指令
    if (msgStr === 'close') {
      console.log(`[退出] 收到 close 指令`);
      ws.close();
      return;
    }

    // 4. 数据处理
    const lines = msgStr.split('\n');
    console.log(`[数据] 收到数据包，共计 ${lines.length} 行`);
  });

  ws.on('close', () => console.log('[状态] 连接断开'));
  ws.on('error', (err) => console.error(`[错误] ${err.message}`));
});

console.log(`📍 监听端口: ${port}`);