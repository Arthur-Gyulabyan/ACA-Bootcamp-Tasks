// Implement logic of "filter()"

const myFilter = (arr, callback) => {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      // If callback returns true, add element to the new array
      newArr.push(arr[i]);
    }
  }

  return newArr;
};

function checkPositive(value) {
  if (value > 0) {
    return true;
  }
}

const numbers = [-1, 2, -3, 4, -5, 6, -7];

console.log(myFilter(numbers, checkPositive)); // [2, 4, 6]
