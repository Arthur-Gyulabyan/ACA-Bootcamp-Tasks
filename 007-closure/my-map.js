// Implement logic of "map()"

const myMap = (arr, callback) => {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    // Call the callback for each element
    newArr.push(callback(arr[i], i, arr));
  }

  return newArr;
};

const redouble = el => el * 2;

const numbers = [1, 2, 3, 4];
const numbersDouble = myMap(numbers, redouble);

console.log(numbersDouble); // [2, 4, 6, 8]
