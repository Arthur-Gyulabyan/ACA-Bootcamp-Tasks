// Return the sum of numbers that are 18 or over.

const arr = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43];

let sum = arr.reduce((acc, current) => {
  if (current >= 18) {
    acc += current;
  }

  return acc;
}, 0);

console.log(sum); // 1017
