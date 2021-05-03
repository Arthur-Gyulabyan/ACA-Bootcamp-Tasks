// Find sum of each row

function sumOfRow(nestedArr) {
  const arrOfSums = [];

  for (let i = 0; i < nestedArr.length; i++) {
    let sum = 0;

    for (let j = 0; j < nestedArr[i].length; j++) {
      sum += nestedArr[i][j];
    }

    arrOfSums.push(sum);
  }

  return arrOfSums;
}

console.log(
  sumOfRow([
    [3, 4, 5],
    [1, 0, 0],
    [4, 5, 4],
    [8, 8, -1],
  ])
); // [12, 1, 13, 15]
console.log(sumOfRow([[8, 35, 2], [8], [5, 6, -5, -6], [1, 3, -9, 0, -1]])); // [45, 8, 0, -6]
console.log(sumOfRow([[1], [2], [3], [4]])); // [1, 2, 3, 4]
