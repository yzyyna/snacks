// node readline
const readline = require('node:readline')
const { stdin: input, stdout: output } = require('node:process')

const rl = readline.createInterface({ input, output })
let origin = 100

// 价格,数量
rl.question('what(price,count)?', (answer) => {
  // TODO: Log the answer in a database
  console.log(`your origin: ${answer}`)
  const arr = answer.includes(',') ? answer.split(',') : []
  origin = arr.length === 0 ? Number(answer) : Number(arr[0])
  const n = arr.length === 0 ? 1 : Number(arr[1])
  const cost1 = origin * 100 * n * (0.5 / 1000) //yin hua
  const cost2 = origin * 100 < 10000 ? 5 : (origin * 100 * 2.5) / 10000 //yong jin
  const cost = cost1 + cost2
  let buy = origin * 100 * n - cost
  const cost3 = buy < 10000 ? 5 : (buy * 2.5) / 10000
  buy = (buy - cost3) / n
  console.log(
    'cost is ' +
      cost +
      '|' +
      cost3 +
      '|' +
      (cost + cost3) +
      ',must <' +
      (buy / 100).toFixed(2)
  )
  rl.close()
})
