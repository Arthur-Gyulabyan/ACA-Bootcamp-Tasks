// Implementation with one loop
function checkIsogram(word) {
  const lowerCaseWord = word.toLowerCase();
  let isIsogram = true;

  for (let i = 0; i < lowerCaseWord.length; i++) {
    if (lowerCaseWord[i] === ' ') continue;

    if (lowerCaseWord.slice(i + 1).indexOf(lowerCaseWord[i]) !== -1) {
      isIsogram = false;
    }
  }

  return isIsogram ? `"${word}" is an isogram!` : `"${word}" is NOT an isogram!`;
}

console.log(checkIsogram('Arthur')); // "Arthur" is NOT an isogram!
console.log(checkIsogram('prefix')); // "prefix" is an isogram!
console.log(checkIsogram('beaUtiful')); // "beaUtiful" is NOT an isogram!
console.log(checkIsogram('The big dwarf only jumps.')); 
