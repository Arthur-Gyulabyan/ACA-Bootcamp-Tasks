// Check for spam

function checkSpam(str) {
  const lowerCaseStr = str.toLowerCase();

  return lowerCaseStr.includes('viagra') || lowerCaseStr.includes('xxx');
  // return lowerCaseStr.indexOf('viagra') !== -1 || lowerCaseStr.indexOf('xxx') !== -1; // Same result
}

console.log(checkSpam('buy ViAgRA now')); // true
console.log(checkSpam('free xxxxx')); // true
console.log(checkSpam('innocent rabbit')); // false
