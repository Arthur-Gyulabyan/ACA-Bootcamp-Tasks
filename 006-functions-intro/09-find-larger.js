// Given a number and an array of number. Find values in array that are larger than given number

function findLarger(arr, num) {
  let arrOfLarger = [];

  for (let elem of arr) {
    if (elem > num) {
      arrOfLarger.push(elem);
    }
  }

  return arrOfLarger.length ? arrOfLarger : 'Such values do not exist.';
}

// Oneliner
const findLargerV2 = (arr, num) => arr.filter(el => el > num);

console.log(findLarger([10, 25, 16, -5, 30, 15, 24], 16)); // [25, 30, 24]
console.log(findLarger([1, 1, 2, -3, 0, 8, 4, 0], 9)); // "Such values do not exist."
console.log(findLarger([1, 2, 3, 4, 5, 6, 7, 8, 9], 0)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
