// Array operations

// Create an array styles with items “Jazz” and “Blues”.
const styles = ['Jazz', 'Blues'];

// Append “Rock-n-Roll” to the end.
styles.push('Rock-n-Roll');

// Replace the value in the middle by “Classics”. Will work for both odd and even length.
styles[Math.floor(styles.length / 2)] = 'Classics';

// Strip off the first value of the array and show it.
console.log(styles.shift());

// Prepend "Rap" and "Reggae" to the array.
styles.unshift('Rap', 'Reggae');

console.log(styles); // Output -> ["Rap", "Reggae", "Classics", "Rock-n-Roll"]
