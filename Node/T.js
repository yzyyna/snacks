const origin = 98.46;
const n = 1;
const cost1 = origin * 100 * n * (0.5 / 1000); //yin hua
const cost2 = origin * 100 < 10000 ? 5 : (origin * 100 * 2.5) / 10000; //yong jin
const cost = cost1 + cost2;
let income = origin * 100 - cost;
const cost3 = income * 100 < 10000 ? 5 : (income * 100 * 2.5) / 10000;
income = income - cost3;
console.log(
  "cost is " + (cost + cost3) + ",must <" + (income / 100).toFixed(2)
);
