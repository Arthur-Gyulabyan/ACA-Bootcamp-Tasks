// Write logic that implements parseFloat

function myParseFloat(str) {
  let numString = '';
  let firstDotFound = false; // This variable will indicate, whether the first dot appeared or not

  for (let char of str.trim()) {
    if (char === '.') {
      // Check if the current dot is the first in the string or not
      if (firstDotFound) {
        // If not the first one
        break;
      } else {
        // If element is the first dot in string
        numString += '.';
        firstDotFound = true;
        continue;
      }
    }

    if (!isNaN(char) && char !== ' ') {
      numString += char;
    } else {
      break;
    }
  }

  return numString ? Number(numString) : NaN;
}

console.log(myParseFloat('11.5cm')); // 11.5
console.log(myParseFloat('23.a231')); // 23
console.log(myParseFloat('18.2.p3px.231.23')); // 18.2
console.log(myParseFloat('')); // NaN
console.log(myParseFloat('  00 1')); // 0
