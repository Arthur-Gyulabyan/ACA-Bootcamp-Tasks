// Implement the logic of "array.map()"

const myMap = (arr, func) => {
  const newArr = [];

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];

    // Call the func for each element and push the returned value to the new array.
    newArr.push(func(element, index, arr));
  }

  return newArr;
};

const redouble = el => el * 2;

const numbers = [1, 2, 3, 4];
const numbersDouble = myMap(numbers, redouble);

console.log(numbersDouble); // [2, 4, 6, 8]
