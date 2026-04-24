const WebSocket = require('ws');

const port = 8899;
const wss = new WebSocket.Server({ port });

console.log(`🚀 [云猫模拟端] 服务启动 (兼容模式)`);

wss.on('connection', function (ws, request) {
  console.log(`\n--------------------------------`);
  console.log(`[连接] 客户端已接入`);

  ws.on('message', function (message) {
    const msgStr = message.toString().trim();
    
    // 1. 握手逻辑
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

    // 4. 数据处理与行内容打印
    // 注意：根据你前端的 join('-') 逻辑，这里先按 '-' 分割获取每一行
    const lines = msgStr.split('-'); 
    console.log(`[数据] 收到数据包，包含 ${lines.length} 个条目:`);
    
    lines.forEach((line, index) => {
      if (line.trim()) {
        console.log(`   L${index + 1}: ${line}`);
      }
    });
    console.log(`--------------------------------`);
  });

  ws.on('close', () => console.log('[状态] 连接断开'));
  ws.on('error', (err) => console.error(`[错误] ${err.message}`));
});

console.log(`📍 监听端口: ${port}`);