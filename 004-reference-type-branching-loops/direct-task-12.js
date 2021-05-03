// Replace symbol with word

function replaceSymbol(sentence, words) {
  const arrOfLetters = sentence.split(''); // Array of letters
  let counter = 0;

  for (let i = 0; i < arrOfLetters.length; i++) {
    if (arrOfLetters[i] === '_') {
      arrOfLetters[i] = words[counter];
      counter++;
    }
  }

  return arrOfLetters.join('');
}

console.log(replaceSymbol('_, we have a _.', ['Huston', 'problem']));
console.log(
  replaceSymbol("If at _ you don't _, try, try _.", [
    'first',
    'succeed',
    'again',
  ])
);
console.log(replaceSymbol('May the _ _ _ _.', ['Force', 'be', 'with', 'you']));
