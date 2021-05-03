// Write logic that implements parseInt

function myParseInt(str) {
  let numString = '';

  for (let char of str) {
    if (!isNaN(char)) {
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
console.log(myParseInt('')); // NaN
