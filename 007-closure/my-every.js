// Implement logic of "every()"

function myEvery(arr, callback) {
  let bool = true;

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr) === false) {
      bool = false;
      break;
    }
  }

  return bool;
}

const isEven = num => num % 2 === 0;

const numbers = [13, 3, 6, 1, 7];
const anotherNumbers = [2, 4, 6, 8];

console.log(myEvery(numbers, isEven)); // false
console.log(myEvery(anotherNumbers, isEven)); // true
