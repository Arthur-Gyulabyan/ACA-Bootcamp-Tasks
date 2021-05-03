// Insert the second array in the middle of the first array

function OneIntoAnother(firstArr, secondArr) {
  secondArr.push(firstArr.pop());
  firstArr.push(...secondArr);

  return firstArr;
}

console.log(OneIntoAnother([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));
console.log(OneIntoAnother([15, 150], [45, 75, 35]));
