// Implement the logic of "array.every()"

function myEvery(arr, func) {
  let bool = true;

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];

    if (func(element, index, arr) === false) {
      bool = false;
      break;
    }
  }

  return bool;
}

const isEven = (num) => num % 2 === 0;

const numbers = [13, 3, 6, 1, 7];
const anotherNumbers = [2, 4, 6, 8];

console.log(myEvery(numbers, isEven)); // false
console.log(myEvery(anotherNumbers, isEven)); // true
