// Find the longest substring in a given string without repeating characters except space

function findLongestSubstr(str) {
  let longestSubstr = '';
  let currentLongest = '';

  for (let i = 0; i < str.length; i++) {
    if (currentLongest.indexOf(str[i]) === -1 || str[i] === ' ') {
      currentLongest += str[i];
      continue;
    }

    if (currentLongest.indexOf(str[i]) !== -1) {
      if (currentLongest.length >= longestSubstr.length) {
        longestSubstr = currentLongest;
        currentLongest = '';
      } else {
          i -= currentLongest.length;
          currentLongest = '';
      }
    }
  }

  return longestSubstr;
}

console.log(findLongestSubstr('there are no two words in the english language more harmful than "good job".'));
console.log(findLongestSubstr('parting your soup is not a miracle, bruce.'));
