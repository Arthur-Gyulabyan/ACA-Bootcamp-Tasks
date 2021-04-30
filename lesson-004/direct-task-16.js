// Find index

function findIndex(arr, num) {
  let minAbsolute = Math.abs(num - arr[0]);
  let n = arr[0];

  for (let value of arr) {
    if (value === num) {
      // Return index if equal value have been found
      return arr.indexOf(value);
    } else {
      // Find the closest value
      if (minAbsolute > Math.abs(num - value)) {
        minAbsolute = Math.abs(num - value);
        n = value;
      }
    }
  }

  return arr.indexOf(n);
}

console.log(findIndex([21, -9, 15, 2116, -71, 33], -71)); // 4
console.log(findIndex([36, -12, 47, -58, 148, -55, -19, 10], -56)); // 5
console.log(findIndex([5, 46, 17, -2, 89, 0, 26], 36)); // 1
