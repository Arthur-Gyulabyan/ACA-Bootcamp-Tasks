// Filter the array

const arr1 = [8, 0, 1, 'hey', 12, 5, true, '2', null, 7, 3];
const arr2 = [8, 8, 'meh', 6];
const arr3 = [null, null, 1, undefined, 5, 9, false];

function filterArray(arr) {
  const arrOfOdd = [];
  const arrOfEven = [];

  // Check the type of the value and push to the relevant array
  for (let value of arr) {
    if (typeof value === 'number') {
      value % 2 === 0 ? arrOfEven.push(value) : arrOfOdd.push(value);
    }
  }

  // Join 2 arrays
  return arrOfOdd.concat(arrOfEven);
}

console.log(filterArray(arr1)); // [1, 5, 7, 3, 8, 0, 12]
console.log(filterArray(arr2)); // [8, 8, 6]
console.log(filterArray(arr3)); // [1, 5, 9]
