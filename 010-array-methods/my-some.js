// Implement the logic of "array.some()"

const mySome = (arr, func) => {
  let bool = false;

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];

    if (func(element, index, arr)) {
      bool = true;
      break;
    }
  }

  return bool;
};

const isEven = (num) => num % 2 === 0;

const numbers = [13, 3, 6, 1, 7];
const anotherNumbers = [1, 3, 5, 7, 9];

console.log(mySome(numbers, isEven)); // true
console.log(mySome(anotherNumbers, isEven)); // false
