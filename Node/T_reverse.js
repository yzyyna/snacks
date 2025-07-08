// node readline - 反向操作(先卖后买)不亏最低价计算
const readline = require('node:readline')
const { stdin: input, stdout: output } = require('node:process')

const rl = readline.createInterface({ input, output })
let sellPrice = 0

// 反向操作: 先卖后买的不亏最低价计算
rl.question('Please enter sell price and quantity (sellPrice,count):', (answer) => {
  console.log(`You entered sell price and quantity: ${answer}`)
  const arr = answer.includes(',') ? answer.split(',') : []
  sellPrice = arr.length === 0 ? Number(answer) : Number(arr[0])
  const n = arr.length === 0 ? 1 : Number(arr[1])

  // 计算卖出时的成本
  const sellAmount = sellPrice * 100 * n
  const stampTax = sellAmount * 0.05 / 100 // 卖出印花税0.05%
  const commissionSell = sellAmount < 10000 ? 5 : (sellAmount * 2.5) / 10000 // 卖出佣金
  const totalSellCost = stampTax + commissionSell

  // 卖出后的净收入
  const netIncome = sellAmount - totalSellCost

  // 计算买入时的成本和最低买入价
  const commissionBuy = netIncome < 10000 ? 5 : (netIncome * 2.5) / 10000 // 买入佣金
  const buyAmount = netIncome - commissionBuy
  const minBuyPrice = buyAmount / (100 * n)

  console.log(
    `Sell Price: ${sellPrice}, Quantity: ${n}\n` +
    `Sell Amount: ${sellAmount} cents, Stamp Tax: ${stampTax.toFixed(2)} cents, Sell Commission: ${commissionSell.toFixed(2)} cents\n` +
    `Total Sell Cost: ${totalSellCost.toFixed(2)} cents, Net Income: ${netIncome.toFixed(2)} cents\n` +
    `Buy Commission: ${commissionBuy.toFixed(2)} cents, Available Buy Amount: ${buyAmount.toFixed(2)} cents\n` +
    `Minimum buy price for no loss in reverse operation: ${minBuyPrice.toFixed(4)}`
  )
  rl.close()
})