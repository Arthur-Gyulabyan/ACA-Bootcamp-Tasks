// Uppercase the first character

function usFirst(str) {
  // Check for empty string
  return str ? str[0].toUpperCase() + str.slice(1) : str;
}

console.log(usFirst('arthur')); // "Arthur"
console.log(usFirst('jOHN')); // "JOHN"
console.log(usFirst('')); // ""
