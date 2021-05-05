// Find product of biggest negative number of each subarray

function getProduct(arr) {
  const biggestNegatives = [];

  for (let elem of arr) {
    // Check if current element is an array.
    if (!Array.isArray(elem)) {
      return 'Invalid Argument';
    }

    let biggestNegative = -Infinity;

    for (let i = 0; i < elem.length; i++) {
      // Consider only negative numbers.
      if (elem[i] < 0) {
        if (elem[i] > biggestNegative) {
          biggestNegative = elem[i];
        }
      }
    }

    // If current array has negative number, push it to "biggestNegatives".
    if (biggestNegative > -Infinity) {
      biggestNegatives.push(biggestNegative);
    }
  }

  if (biggestNegatives.length) {
    return biggestNegatives.reduce((a, b) => a * b);
  } else {
    return 'No negatives';
  }
}

console.log(getProduct([[2, -9, -3, 0], [1, 2], [-4, -11, 0]])); // 12
console.log(getProduct([[3, 4], [11, 0], [5, 6, 7, 8]])); // "No negatives"
console.log(getProduct([1, 2, 3])); // "Invalid arguments"
