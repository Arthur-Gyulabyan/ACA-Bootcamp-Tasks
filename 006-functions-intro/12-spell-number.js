// Spell out the given number in English

function spellNumber(num) {
  const spells = {
    baseOne: {
      0: '',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      10: 'ten',
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: 'fourteen',
      15: 'fifteen',
      16: 'sixteen',
      17: 'seventeen',
      18: 'eighteen',
      19: 'nineteen',
    },

    baseTwo: {
      20: 'twenty',
      30: 'thirty',
      40: 'forty',
      50: 'fifty',
      60: 'sixty',
      70: 'seventy',
      80: 'eighty',
      90: 'ninety',
    },
  };

  // Cut last 6 digits of number.
  const numString = ('000000' + String(num)).slice(-6);
  let spelledNum = '';

  if (numString.slice(0, 3) !== '000') {
    if (numString[0] !== '0') {
      spelledNum += `${spells.baseOne[numString[0]]} hundred `;
    }

    if (numString.slice(1, 3) < 20) {
      spelledNum += `${spells.baseOne[Number(numString.slice(1, 3))]} thousand `;
    } else {
      spelledNum += `${spells.baseTwo[numString[1] * 10]} ${spells.baseOne[numString[2]]} thousand `;
    }
  }

  if (numString[3] !== '0') {
    spelledNum += `${spells.baseOne[numString[3]]} hundred `;
  }

  if (numString.slice(4, 6) < 20) {
    spelledNum += `${spells.baseOne[Number(numString.slice(4, 6))]}`;
  } else {
    spelledNum += `${spells.baseTwo[numString[4] * 10]} ${spells.baseOne[numString[5]]}`;
  }

  return spelledNum;
}

console.log(spellNumber(201457)); // "two hundred one thousand four hundred fifty seven"
console.log(spellNumber(123)); // "one hundred twenty three"
console.log(spellNumber(956923)); // "nine hundred fifty six thousand nine hundred twenty three"
