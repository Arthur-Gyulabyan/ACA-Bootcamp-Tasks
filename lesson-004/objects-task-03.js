// Sum object properties

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
  Arthur: 130,
  Poxos: 130,
};

let tips = {};

function countSum(obj) {
  let sum = 0;

  for (let key in obj) {
    sum += obj[key];
  }

  return sum;
}

console.log(countSum(salaries)); // 650
console.log(countSum(tips)); // 0
