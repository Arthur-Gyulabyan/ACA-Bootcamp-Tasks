// Find possible largest numbers in string and return their sum

/*
// First way
function sum(str) {
  const numArr = [];
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    if ((str.charCodeAt(i) > 47 && str.charCodeAt(i) < 58) || str[i] === '-') {
      numArr.push(str[i]);
    } else {
      numArr.push(' ');
    }
  }

  // Join neighbour digits in one string in array
  const modifiedNumArr = numArr.join('').split(' ');

  for (let elem of modifiedNumArr) {
    if (!Number.isNaN(Number(elem))) {
      sum += Number(elem);
    }
  }

  return sum;
}

console.log(sum('FwrtY45KHL120mn10P')); // 175
console.log(sum('Wert12lop-12')); // 0
console.log(sum('Ab2c-13def24')); // 13
*/

// Second way (Better one)
function sumV2(str) {
  let arrOfNum = [];

  for (let i = 0; i < str.length; i++) {
    if (Number(str[i]) === Number(str[i]) || str[i] === '-') {
      for (let j = i + 1; j <= str.length; j++) {
        if (Number.isNaN(Number(str[j]))) {
          arrOfNum.push(str.substring(i, j));
          i = j - 1;
          break;
        }
      }
    }
  }

  return arrOfNum.reduce((a, b) => Number(a) + Number(b));
}

console.log(sumV2('FwrtY45KHL120mn10P')); // 175
console.log(sumV2('Wert12lop-12')); // 0
console.log(sumV2('Wert12lop-12-12')); // -12
