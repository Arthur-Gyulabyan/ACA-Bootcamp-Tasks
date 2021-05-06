// Check whether string is palindrome, or not

function checkPalindrome(word) {
  const wordLower = word.toLowerCase();
  let wordReversed = '';

  for (let i = wordLower.length - 1; i >= 0; i--) {
    wordReversed += wordLower[i];
  }

  if (wordLower === wordReversed) {
    return `"${word}" is palindrome.`;
  } else {
    return `"${word}" is not palindrome.`;
  }
}

console.log(checkPalindrome('Anna')); // "Anna" is palindrome.
console.log(checkPalindrome('Arthur')); // "Arthur" is not palindrome.
console.log(checkPalindrome('tenet')); // "tenet" is palindrome.
