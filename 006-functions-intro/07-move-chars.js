// Move char to come after the next two chars

function moveChars(str) {
  let charsMoved = '';

  for (let i = 0; i < str.length; i += 3) {
    if (str[i + 2]) {
      // Substring has the third char
      charsMoved += str[i + 1] + str[i + 2] + str[i];
    } else {
      charsMoved += str.slice(i);
    }
  }

  return charsMoved;
}

console.log(moveChars('dfgjkloyp')); // fgdkljypo
console.log(moveChars('aweyoolp')); // weaooylp
console.log(moveChars('AbcDefG')); // bcAefDG
