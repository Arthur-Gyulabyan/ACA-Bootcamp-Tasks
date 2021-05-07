// Range 1 - 999 999 999 999

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

  // Cut last 12 digits of number.
  const numString = ('000000000000' + String(num)).slice(-12);
  let spelledNum = '';

  if (numString.slice(0, 3) !== '000') {
    if (numString[0] !== '0') {
      spelledNum += `${spells.baseOne[numString[0]]} hundred `;
    }

    if (numString.slice(1, 3) < 20) {
      spelledNum += `${spells.baseOne[Number(numString.slice(1, 3))]} billion `;
    } else {
      spelledNum += `${spells.baseTwo[numString[1] * 10]} ${spells.baseOne[numString[2]]} billion `;
    }
  }

  if (numString.slice(3, 6) !== '000') {
    if (numString[3] !== '0') {
      spelledNum += `${spells.baseOne[numString[3]]} hundred `;
    }

    if (numString.slice(4, 6) < 20) {
      spelledNum += `${spells.baseOne[Number(numString.slice(4, 6))]} million `;
    } else {
      spelledNum += `${spells.baseTwo[numString[4] * 10]} ${spells.baseOne[numString[5]]} million `;
    }
  }

  if (numString.slice(6, 9) !== '000') {
    if (numString[6] !== '0') {
      spelledNum += `${spells.baseOne[numString[6]]} hundred `;
    }

    if (numString.slice(7, 9) < 20) {
      spelledNum += `${spells.baseOne[Number(numString.slice(7, 9))]} thousand `;
    } else {
      spelledNum += `${spells.baseTwo[numString[7] * 10]} ${
        spells.baseOne[numString[8]]
      } thousand `;
    }
  }

  if (numString[9] !== '0') {
    spelledNum += `${spells.baseOne[numString[9]]} hundred `;
  }

  if (numString.slice(10, 12) < 20) {
    spelledNum += `${spells.baseOne[Number(numString.slice(10, 12))]}`;
  } else {
    spelledNum += `${spells.baseTwo[numString[10] * 10]} ${spells.baseOne[numString[11]]}`;
  }

  return spelledNum;
}

console.log(spellNumber(123456201457));
console.log(spellNumber(101101101101));
console.log(spellNumber(956903));
