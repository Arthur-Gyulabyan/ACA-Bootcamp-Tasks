// Create a RegExp to test if a string is a valid pin or not.
// Rules: Exactly 4 or 6 characters.
// Only numerical characters (0-9).
// No whitespace.

const myRegExp = /^\d{4}$|^\d{6}$/;

console.log(myRegExp.test('1234')); // true
console.log(myRegExp.test('45135')); // false
console.log(myRegExp.test('89abc1')); // false
console.log(myRegExp.test('900876')); // true
console.log(myRegExp.test(' 4983')); // false
