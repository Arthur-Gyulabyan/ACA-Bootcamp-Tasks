// Fill missing indexes with undefined

function placeUnderIndex(arr) {
  // Sort array by ascending order
  arr.sort((a, b) => a - b);

  // Create new array with given length, but consisting of empty values
  const result = Array(arr[arr.length - 1] - arr[0] + 1);
  const min = arr[0];

  // Put values from given array under the proper index in new array
  for (let i = 0; i < arr.length; i++) {
    result[arr[i] - min] = arr[i];
  }

  // Fill remained indexes with empty values with undefined
  for (let i = 0; i < arr[arr.length - 1] - min; i++) {
    // Empty indexes will return undefined, so we need to check it and assign undefined manually to current index.
    if (result[i] === undefined) result[i] = undefined;
  }

  return result;
}

console.log(placeUnderIndex([4, 3, 0, 9]));
console.log(placeUnderIndex([26, 30, 19, 5]));
console.log(placeUnderIndex([0, 99]));
