// Remove appearances of the second string from the first one

/*
// Using RegExp
function removeFromFirst(str1, str2) {
  let regexp = `/${str2}/g`;
  return str1.replace(regexp, '');
}
*/

// Without RegExp
function removeFromFirst(str1, str2) {
  let modifiedStr = '';
  let size = str2.length;

  for (let i = 0; i < str1.length; i++) {
    if (str1.slice(i, i + size) !== str2) {
      modifiedStr += str1[i];
    } else {
      i += size - 1;
    }
  }

  return modifiedStr;
}

console.log(removeFromFirst('This is some text.', 'is'));
console.log(removeFromFirst('Yes, London. You know: fish, chips, cup ‘o tea, bad food, worse weather', 'o'));
