// Improved implementation of "array.map()"

const myMap = (arr, func) => {
  const newArr = [];

  // "for in" will skip the empty indexes.
  for (let index in arr) {
    const element = arr[index];

    newArr[index] = func(element, index, arr);
  }

  return newArr;
};

const redouble = el => el * 2;

const numbers = [1, 2, , 4];
const numbersDouble = myMap(numbers, redouble);
console.log(numbersDouble); // [2, 4, empty, 8]
