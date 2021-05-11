// Implement the logic of "array.findIndex()"

const myFindIndex = (arr, func) => {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];

    if (func(element, index, arr)) {
      return index;
    }
  }

  // If proper element is not found, -1 will be returned.
  return -1;
};

console.log(myFindIndex([1, 3, 5], (el) => el % 2 === 1)); // 0
console.log(myFindIndex([1, 3, 5], (el) => el % 2 === 0)); // -1
