// Write a function which parses string to integers.

const parseInteger = (strings) => {
  return strings.map((el) => {
    const parsed = parseInt(el);

    if (Number.isNaN(parsed)) {
      return null;
    }

    return parsed;
  });
};

console.log(parseInteger(['1', '2', '34'])); // [1, 2, 34];
console.log(parseInteger(['1', 'px', '2323'])); // [1, null, 2323];
