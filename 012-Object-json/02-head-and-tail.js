// Write functions that will return head and tail of Array

const getHead = (arr) => {
  const [head] = arr;
  return [head];
};

const getTail = (arr) => {
  const [, ...tail] = arr;
  return tail;
};

console.log(getHead([1, 2, 3, 4])); // [1]
console.log(getTail([1, 2, 3, 4])); // [2, 3 , 4]
