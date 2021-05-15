// Write function that will group by some rule

const groupBy = (arr, ruleFunc) => {
  const result = arr.reduce((acc, current) => {
    const key = ruleFunc(current);

    acc[key] = acc[key] === undefined ? [current] : [...acc[key], current];

    return acc;
  }, {});

  return result;
};

console.log(groupBy([6.1, 4.2, 6.3], Math.floor)); // { '4': [4.2], '6': [6.1, 6.3] }
console.log(groupBy(['one', 'two', 'three'], (i) => i.length)); // { '3': ['one', 'two'], '5': ['three'] }
