// Rewrite "if" into "?"

let result;
let a = 2,
  b = 4;

// Rewrite the following "if" using "?" operator
// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }

result = a + b < 4 ? 'Below' : 'Over';

console.log(result); // Over
