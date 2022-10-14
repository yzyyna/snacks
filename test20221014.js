/**
 *
 * @param {*} min
 * @param {*} max
 * @returns [min,max]
 * Math.random()=>[0,1)
 */
const getRandom = (min, max) => (min + (max - min) * Math.random()).toFixed(0);
console.log(getRandom(0, 1), getRandom(12, 13));
