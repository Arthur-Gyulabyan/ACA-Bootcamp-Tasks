// Find the contiguous subarray of arr with the maximal sum of items.

function getMaxSubSum(arr) {
  let maxSum = 0;
  let maxSumSubarray = [];

  for (let i = 0; i < arr.length; i++) {
    let currentSubSum = arr[i];
    for (let j = i + 1; j <= arr.length; j++) {
      // If current sum is greater than sum, update sum and get the subarray.
      if (currentSubSum > maxSum) {
        maxSum = currentSubSum;
        maxSumSubarray = arr.slice(i, j);
      }

      // Update current sum
      currentSubSum += arr[j];
    }
  }

  return [maxSum, maxSumSubarray];
}

console.log(getMaxSubSum([-1, 2, 3, -9])); // [5, [2, 3]]
console.log(getMaxSubSum([2, -1, 2, 3, -9])); // [6, [2, -1, 2, 3]]
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // [11, [11]]
console.log(getMaxSubSum([-2, -1, 1, 2])); // [3, [1, 2]]
console.log(getMaxSubSum([100, -9, 2, -3, 5])); // [100, [100]]
console.log(getMaxSubSum([1, 2, 3])); // [6, [1, 2, 3]]
console.log(getMaxSubSum([-1, -2, -3])); // [0, []]
console.log(getMaxSubSum([2, -2, -13, 13, 6, -48, 0, 24, 12, -44])); // [36, [0, 24, 12]]
