// Implement the logic of "array.reduce()"

const myReduce = (array, func, initialValue) => {
  let accumulator;

  if (initialValue === undefined) {
    // Initial value not provided
    if (array.length === 0) {
      // If no initial value provided and array is empty, "reduce()" throws an error!
      return `Error!`;
    } else if (array.length === 1) {
      // If array has only one element and initial value is not provided, that value will be returned.
      return array[0];
    }

    accumulator = array[0];

    for (let index = 1; index < array.length; index++) {
      const currentValue = array[index];

      accumulator = func(accumulator, currentValue, index, array);
    }
  } else {
    // Initial value provided
    if (array.length === 0) {
      // If array is empty, "reduce()" returns the initial value.
      return initialValue;
    }

    accumulator = initialValue;

    for (let index = 0; index < array.length; index++) {
      const currentValue = array[index];

      accumulator = func(accumulator, currentValue, index, array);
    }
  }

  return accumulator;
};

// Testing
let result = myReduce([1, 2, 3, 4], (accumulator, current) => accumulator + current);
console.log(result); // 10

function reducer(acc, current, index) {
  acc[current] = index;
  return acc;
}

let objFromArray = myReduce(['a', 'b', 'c', 'd'], reducer, {});
console.log(objFromArray); // {a: 0, b: 1, c: 2, d: 3}

console.log(myReduce([], reducer)); // Error!
