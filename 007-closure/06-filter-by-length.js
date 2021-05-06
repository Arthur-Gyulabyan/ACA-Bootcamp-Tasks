// Remove elements with length <= 3

// Mutating given array
function filterByLength(words) {
  for (let i = 0; i < words.length; i++) {
    if (words[i].length <= 3) {
      words.splice(i, 1);
      i--;
    }
  }

  return words;
}

// Creating new array
function filterByLengthV2(words) {
  const filteredArr = [];

  for (let word of words) {
    if (word.length > 3) {
      filteredArr.push(word);
    }
  }

  return filteredArr;
}

console.log(filterByLength(['kia', 'tesla', 'bmw', 'mercedes'])); // ['tesla','mercedes']
console.log(filterByLengthV2(['kia', 'tesla', 'bmw', 'mercedes'])); // ['tesla','mercedes']
