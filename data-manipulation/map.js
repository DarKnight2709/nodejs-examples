// map: browser and transform

const pricesInUSD = [10, 25, 50];
const pricesInVND = pricesInUSD.map((price) => price * 25000);
// Result: [250000, 625000, 1250000]

console.log(pricesInVND);
