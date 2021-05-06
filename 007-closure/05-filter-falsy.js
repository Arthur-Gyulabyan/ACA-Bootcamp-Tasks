// Filter out falsy values from array

const filterFalsyValues = (arr) => {
  const filteredArr = [];

  for (let elem of arr) {
    if (elem) {
      filteredArr.push(elem);
    }
  }

  return filteredArr;
};

const values = [null, true, {}, { name: 'Elon' }, '', NaN, 0];
console.log(filterFalsyValues(values)); // [true, {}, { name: "Elon" }];
console.log(filterFalsyValues(['hello', 1233, []])); // ['hello', 1233, []]
