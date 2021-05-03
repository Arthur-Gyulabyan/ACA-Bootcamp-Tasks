// Find index

function findIndex(arr, num) {
  let minAbsolute = Math.abs(num - arr[0]);
  let index = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      // Check for equality
      return i;
    } else {
      // Find the index of closest
      if (minAbsolute > Math.abs(num - arr[i])) {
        minAbsolute = Math.abs(num - arr[i]);
        index = i;
      }
    }
  }

  return index;
}

console.log(findIndex([21, -9, 15, 2116, -71, 33], -71)); // 4
console.log(findIndex([36, -12, 47, -58, 148, -55, -19, 10], -56)); // 5
console.log(findIndex([5, 46, 17, -2, 89, 0, 26], 36)); // 1
