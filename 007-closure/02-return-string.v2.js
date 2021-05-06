// Oneliner
const redundant = str => () => str;

const fn1 = redundant('apple');
console.log(fn1()); // "apple"
const fn2 = redundant('pear');
console.log(fn2()); // "pear"
const fn3 = redundant('');
console.log(fn3()); // ""
