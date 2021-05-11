// Function takes array and string and returns the array sorted following the rule

const sortByRule = (arr, rule) => {
  const arrCopy = [...arr]; // In order not to mutate the initial array.

  if (rule === 'Asc') {
    return arrCopy.sort((a, b) => a - b); // in ascending order
  }

  if (rule === 'Desc') {
    return arrCopy.sort((a, b) => b - a); // in descending order
  }

  return arrCopy;
};

console.log(sortByRule([4, 3, 2, 1], 'Asc')); // [1, 2, 3, 4]
console.log(sortByRule([7, 8, 11, 66])); // [7, 8, 11, 66]
console.log(sortByRule([7, 8, 11, 66], 'Desc')); // [66, 11, 8, 7]
