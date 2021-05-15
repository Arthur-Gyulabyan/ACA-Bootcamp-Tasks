// Write function that will zip arrays into object

const zipObject = (keys, values) => {
  const zipped = keys.reduce((acc, current, index) => {
    if (values[index] === undefined) {
      acc[current] = null;
    } else {
      acc[current] = values[index];
    }

    return acc;
  }, {});

  return zipped;
};

console.log(zipObject(['a', 'b', 'c'], [1, 2])); // {a: 1, b: 2, c: null}
