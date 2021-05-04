// Find the last longest word in the sentence

function findLongest(str) {
  // Remove unnecessary signs before turning into array.
  const arrOfString = str.replace(/[,-.?]/g, '').split(' ');
  let longestWord = '';

  for (let word of arrOfString) {
    if (word.length >= longestWord.length) {
      // ">=" in order to take the last longest word
      longestWord = word;
    }
  }

  return longestWord;
}

console.log(findLongest('A revolution without dancing is a revolution not worth having.')); // "revolution"
console.log(findLongest('Which would be worse - to live as a monster, or to die as a good man?')); // "monster"
