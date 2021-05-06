// Write a function that takes in a string and returns a function that returns that string.

function redundant(str) {
  return function () {
    return str;
  };
}

const fn1 = redundant('apple');
console.log(fn1()); // "apple"
const fn2 = redundant('pear');
console.log(fn2()); // "pear"
const fn3 = redundant('');
console.log(fn3()); // ""

