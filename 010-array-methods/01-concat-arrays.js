// Concatenate the two arrays

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8, 9];

const arrConcat1 = arr1.concat(arr2);
console.log(arrConcat1); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

const arrConcat2 = [...arr1, ...arr2];
console.log(arrConcat2); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Function to do concatenation
function concatArrays(arr1, arr2) {
  const newArr = [];

  arr1.forEach((el) => newArr.push(el));
  arr2.forEach((el) => newArr.push(el));

  return newArr;
}

let arrConcat3 = concatArrays(arr1, arr2);
console.log(arrConcat3); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
