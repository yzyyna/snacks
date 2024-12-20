const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });
let origin = 100;

rl.question("What do you think of Node.js? ", (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);
  origin = Number(answer);
  const n = 1;
  const cost1 = origin * 100 * n * (0.5 / 1000); //yin hua
  const cost2 = origin * 100 < 10000 ? 5 : (origin * 100 * 2.5) / 10000; //yong jin
  const cost = cost1 + cost2;
  let buy = origin * 100 - cost;
  const cost3 = buy < 10000 ? 5 : (buy * 2.5) / 10000;
  buy = buy - cost3;
  console.log(
    "cost is " +
      cost +
      "|" +
      cost3 +
      "|" +
      (cost + cost3) +
      ",must <" +
      (buy / 100).toFixed(2)
  );
  rl.close();
});
