// Select the correct subarray of anagrams

// Function will take 2 words and check if the second one is anagram of the first one.
function checkAnagram(word1, word2) {
  let isAnagram = true;

  if (word1.length === word2.length) {
    // Same length
    for (let char of word1) {
      // Check if second word consists of the letters of the first word
      if (word2.indexOf(char) === -1) {
        isAnagram = false;
      }
    }
  } else {
    // If the words have different lengths.
    isAnagram = false;
  }

  return isAnagram;
}

// Find anagrams in array
function findAnagrams(word, anagrams) {
  const arrOfAnagrams = [];

  for (let elem of anagrams) {
    if (checkAnagram(word, elem)) {
      arrOfAnagrams.push(elem);
    }
  }

  return arrOfAnagrams;
}

console.log(findAnagrams('listen', ['enlists', 'google', 'inlets', 'banana'])); // ['inlets']
console.log(findAnagrams('pencil', ['licnep', 'circular', 'pupil', 'nilcpe', 'leppnec'])); // ['licnep', 'nilcpe']
console.log(findAnagrams('abcdef', ['abcde', 'fedcba', 'bdeafc', 'aacdef'])); // ['fedcba', 'bdeafc']
