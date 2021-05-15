// Write function that will do reverse operation for "Object.entries"

const entriesReverse = (keyValues) => {
  return keyValues.reduce((acc, current) => {
    const key = current[0];
    const value = current[1];

    acc[key] = value;

    return acc;
  }, {});
};

const arr = [
  ['a', 1],
  ['b', 2],
];

console.log(entriesReverse(arr)); // { a: 1, b: 2 }
