// Split string without . , ! signs.

function splitString(str) {
  const words = str.split(''); // Array of letters and signs

  // Loop through array and cut signs
  for (let i = 0; i < words.length; i++) {
    if (words[i] === ',' || words[i] === '.' || words[i] === '!') {
      words.splice(i, 1);
      i--;
    }
  }

  return words.join('').split(' ');
}

console.log(splitString('May the Force be with you.'));
console.log(splitString('Keep your friends close, but your enemies closer.'));
