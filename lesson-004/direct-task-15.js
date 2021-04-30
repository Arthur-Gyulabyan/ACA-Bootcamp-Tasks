// String with max and min length

function maxAndMinLength(arr) {
  let maxLengthStr = arr[0];
  let minLengthStr = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (maxLengthStr.length < arr[i].length) {
      maxLengthStr = arr[i];
    }

    if (minLengthStr.length > arr[i].length) {
      minLengthStr = arr[i];
    }
  }

  console.log(maxLengthStr, minLengthStr);
  return maxLengthStr.length + minLengthStr.length;
}

console.log(maxAndMinLength(['anymore', 'raven', 'me', 'communicate'])); // 13
console.log(
  maxAndMinLength([
    'wish',
    'slightly',
    'understand',
    'longer',
    'unexpected',
    'heart',
  ])
); // 14
