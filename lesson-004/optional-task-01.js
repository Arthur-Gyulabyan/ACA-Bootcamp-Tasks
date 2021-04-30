// Difference between the biggest and smallest digits

function findDifference(number) {
  const digitsArr = [];

  // Get every digit of a number without converting it to string (good code I think :))
  for (let i = 10; i <= 10 * number; i *= 10) {
    digitsArr.push(Math.trunc(((number % i) / i) * 10));
  }

  // Calculate the difference
  return Math.max(...digitsArr) - Math.min(...digitsArr);
}

console.log(findDifference(25)); // 3
console.log(findDifference(7694674)); // 5
console.log(findDifference(1000)); // 1
