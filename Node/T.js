const origin = 98.46;
const n = 1;
const cost1 = origin * 100 * n * (0.5 / 1000);
const cost2 = origin * 100 < 10000 ? 5 : (origin * 100 * 2.5) / 10000;
const cost = cost1 + cost2;
const income = origin * 100 - cost;
console.log("cost is " + cost + ",must <" + (income / 100).toFixed(2));
