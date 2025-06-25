const WebSocket = require('ws')
const {
  getRequest,
  postRequest,
  putRequest,
  deleteRequest
} = require('./request')
const WebSocketServer = WebSocket.Server

const wss = new WebSocketServer({
  port: 3000
})

wss.on('connection', function (ws) {
  console.log(`[SERVER] connection()`)
  ws.send(`connection`, (err) => {
    if (err) {
      console.log(`[SERVER] error: ${err}`)
    }
  })
  ws.on('message', function (message) {
    // wss.clients.forEach(function each(client) {
    //   if (client.readyState === WebSocket.OPEN) {
    //     client.send(message);
    //   }
    // });
    console.log(`[SERVER] Received: ${message}`)
    setTimeout(() => {
      ws.send(`What's your name?`, (err) => {
        if (err) {
          console.log(`[SERVER] error: ${err}`)
        }
      })
    }, 1000)
  })
})
console.log('ws server started at port 3000...')
setTimeout(() => {
  console.log(wss.clients)
}, 30000)

// // client test:
const serverUrl = 'http://192.168.110.170'
let token0 = ''
let times = 0
// 登录
const p = postRequest(
  serverUrl + '/v1/token?username=admin&password=ahYaoEznlTShKsgubjdDng==',
  {}
)
p.then((res) => {
  const resJson = JSON.parse(res.data)
  const token = resJson?.Data
  token0 = token
  console.log('%c ✨ 登录成功: ✨ ', 'color:#0ff;', resJson)
  // 保活
  setInterval(() => {
    times++
    const p = putRequest(serverUrl + '/v1/token', {}, { 'X-Token': token0 })
    p.then((res2) => {
      const resJson2 = JSON.parse(res2.data)
      const token = resJson2?.Data?.Token
      token0 = token
      console.log(
        '%c ✨ 客户端保活 ✨ ',
        'color:#0ff;',
        '次数:' + times,
        '新token:' + token0
      )
    })
  }, 20 * 1000)
  let ws = new WebSocket(
    'ws://192.168.110.170/v1/event/subscription?chns=0&events=Alarm.%2A,Alarm.DetectRegion'
  )

  ws.on('open', function () {
    console.log(`[CLIENT] open()`)
    ws.send('[CLIENT] say: Hello!')
  })

  ws.on('message', function (message) {
    console.log(`[CLIENT] Received: ${message}`)
  })
})
