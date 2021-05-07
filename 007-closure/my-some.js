// Implement logic of "some()"

const mySome = (arr, callback) => {
  let bool = false;

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      bool = true;
      break;
    }
  }

  return bool;
};

const isEven = num => num % 2 === 0;

const numbers = [13, 3, 6, 1, 7];
const anotherNumbers = [1, 3, 5, 7, 9];

console.log(mySome(numbers, isEven)); // true
console.log(mySome(anotherNumbers, isEven)); // false
