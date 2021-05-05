// Get all possible subsets of length 3 of given array

function getAllSubsets(arr) {
  const allSubsets = [];

  if (arr.length < 3) {
    return arr;
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        allSubsets.push([arr[i], arr[j], arr[k]]);
      }
    }
  }

  return allSubsets;
}

console.log(getAllSubsets([4])); // [4]
console.log(getAllSubsets([19, 6])); // [19, 6]
console.log(getAllSubsets([5, 9, 23, 0, -2, -1]));
