// Find the largest product of adjacent elements

function findLargestProduct(integers) {
  let largestProduct = -Infinity;

  for (let i = 0; i < integers.length; i++) {
    if (integers[i] * integers[i + 1] > largestProduct) {
      largestProduct = integers[i] * integers[i + 1];
    }
  }

  return largestProduct ? largestProduct : 0; // To avoid case of -0.
}

console.log(findLargestProduct([1, 2, 3, 4, 5, 6, 7])); // 42
console.log(findLargestProduct([-12, 3, -4, 14, -6, 7, -8, 0])); // 0
console.log(findLargestProduct([10, 0, 11, 4, 5, 14, -1, 6])); // 70
