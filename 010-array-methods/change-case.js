// Change the dash-separated word into camel-cased

const camelize = (str) => {
  const arrOfString = str.split('-'); // Array of words

  // Turn all words' first letter except the first one to capital letter.
  const camelCaseArr = arrOfString.map((word, index) => {
    if (index === 0) {
      return word;
    }

    return word[0].toUpperCase() + word.slice(1);
  });

  return camelCaseArr.join('');
};

console.log(camelize('my-old-friend')); // "myOldFriend"
console.log(camelize('array-methods')); // "arrayMethods"
