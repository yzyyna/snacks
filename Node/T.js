const origin = 100;
const n = 1;
const cost1 = origin * 100 * n * (0.5 / 1000); //yin hua
const cost2 = origin * 100 < 10000 ? 5 : (origin * 100 * 2.5) / 10000; //yong jin
const cost = cost1 + cost2;
let buy = origin * 100 - cost;
const cost3 = buy < 10000 ? 5 : (buy * 2.5) / 10000;
buy = buy - cost3;
console.log("cost is " + (cost + cost3) + ",must <" + (buy / 100).toFixed(2));
