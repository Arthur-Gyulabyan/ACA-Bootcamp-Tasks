// Determine if a word or phrase is an isogram

function checkIsogram(word) {
  // We need to do checking on lowered word
  const lowerCaseWord = word.toLowerCase();
  let isIsogram = true;

  for (let i = 0; i < lowerCaseWord.length; i++) {
    for (let j = i + 1; j < lowerCaseWord.length; j++) {
      if (lowerCaseWord[i] === lowerCaseWord[j]) {
        isIsogram = false;
      }
    }
  }

  if (isIsogram) {
    return `"${word}" is an isogram!`;
  } else {
    return `"${word}" is NOT an isogram!`;
  }
}

console.log(checkIsogram('computer')); // "computer" is an isogram!
console.log(checkIsogram('prefix')); // "prefix" is an isogram!
console.log(checkIsogram('beaUtiful')); // "beaUtiful" is NOT an isogram!
