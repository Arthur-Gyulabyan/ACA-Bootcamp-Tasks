// Implement the logic of "array.filter()"

const myFilter = (arr, func) => {
  const newArr = [];

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];

    if (func(element, index, arr)) {
      // If func returns true, element will be added to the newArr.
      newArr.push(arr[index]); //
    }
  }

  return newArr;
};

function checkPositive(value) {
  return value > 0;
}

const numbers = [-1, 2, -3, 4, -5, 6, -7];

console.log(myFilter(numbers, checkPositive)); // [2, 4, 6]
