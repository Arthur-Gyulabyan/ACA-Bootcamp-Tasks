// Find the sum of quadratics of even numbers from given array

const sumOfQuadratics = (numbers) => {
  let sum = 0;

  for (let num of numbers) {
    if (num % 2 === 0) {
      sum += num ** 2;
    }
  }

  return sum;
};

console.log(sumOfQuadratics([3, 4, -4, 2, 1, 6, 10])); // 172
console.log(sumOfQuadratics([1, 2, 3, 4, 5, 6])); // 56
