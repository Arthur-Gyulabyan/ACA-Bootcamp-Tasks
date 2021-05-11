// Implement the logic of "array.find()"

const myFind = (arr, func) => {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];

    if (func(element, index, arr)) {
      return element;
    }
  }
  // If proper element is not found, "undefined" will be returned.
};

console.log(myFind([1, 3, 5], (el) => el % 2 === 1)); // 1
console.log(myFind([1, 3, 5], (el) => el % 2 === 0)); // undefined
