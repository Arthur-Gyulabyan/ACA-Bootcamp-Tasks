// Comparison

console.log(5 > 4); // true
console.log('apple' > 'pineapple'); // false (char code of 'p' is bigger than 'a')
console.log('2' > '12'); // true (will compare string 2 with string 1)
console.log(undefined == null); // true
console.log(undefined === null); // false (different types)
console.log(null == '\n0\n'); // false (null only equals to null and undefined when compared with non strict equality operator)
console.log(null === +'\n0\n'); // false (different types)
