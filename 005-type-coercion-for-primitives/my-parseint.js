// Write logic that implements parseInt

function myParseInt(str) {
  let numString = '';

  // We need to use "trim()" on our string to avoid cases when string starts with space.
  for (let char of str.trim()) {
    if (!isNaN(char) && char !== ' ') {
      numString += char;
    } else {
      break;
    }
  }

  return numString ? Number(numString) : NaN;
}

console.log(myParseInt('a0011b1')); // NaN
console.log(myParseInt('23.231')); // 23
console.log(myParseInt('18px')); // 18
console.log(myParseInt('  00 1')); // 0
