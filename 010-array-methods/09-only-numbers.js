// Return a new array that only includes the numbers

const arr = [1, 2, 'a', 0, true, {}, undefined, 55, false, 'hi', null, 166, NaN]; // [1, 2, 55, 166]

// Mapper
const isNumber = (el) => typeof el === 'number' && Number.isNaN(el) === false;

// Function
const getOnlyNumbers = (arr) => {
  const onlyNumbers = arr.filter(isNumber);

  return onlyNumbers;
};

console.log(getOnlyNumbers(arr)); // [ 1, 2, 0, 55, 166 ]
