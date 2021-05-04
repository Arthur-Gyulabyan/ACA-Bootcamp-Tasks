// Separate odd and even numbers in different arrays

function separateNumbers(numArr) {
  const oddArr = [];
  const evenArr = [];

  for (let num of numArr) {
    num % 2 === 0 ? evenArr.push(num) : oddArr.push(num);
  }

  return [oddArr, evenArr];
}

console.log(...separateNumbers([45, 12, 3, 6, 17, 0])); // [45, 3, 17], [12, 6, 0]
console.log(...separateNumbers([1, 3, 5, 9])); // [1, 3, 5, 9], []
console.log(...separateNumbers([-14, 3, 0, 24, 12, -5, 6])); // [3, -5], [-14, 0, 24, 12, 6]
