// Implement the logic of "reduce()"

const myReduce = (array, callback, initialValue) => {
  let accumulator;

  if (initialValue === undefined) {
    // Initial value haven't been provided
    if (array.length === 0) {
      return `Error!`;
    } else if (array.length === 1) {
      return array[0];
    }

    accumulator = array[0];

    for (let index = 1; index < array.length; index++) {
      accumulator = callback(accumulator, array[index], index, array);
    }
  } else {
    if (array.length === 0) {
      return initialValue;
    }

    accumulator = initialValue;

    for (let index = 0; index < array.length; index++) {
      accumulator = callback(accumulator, array[index], index, array);
    }
  }

  return accumulator;
};

let result = myReduce([1, 2, 3, 4], (accumulator, current) => accumulator + current);
console.log(result); // 10

function reducer(acc, current, index) {
  acc[current] = index;
  return acc;
}

let objFromArray = myReduce(['a', 'b', 'c', 'd'], reducer, {});
console.log(objFromArray); // {a: 0, b: 1, c: 2, d: 3}

console.log(myReduce([], reducer)); // Error!
