// Write a function which filters the elements of array by given range

const filterRange = (arr, start, end) => {
  return arr.filter((el) => el >= start && el <= end);
};

let arr = [5, 3, 8, 1, 12, 6, 2];

console.log(filterRange(arr, 1, 4)); // [3, 1, 2]
console.log(filterRange(arr, 4, 9)); // [5, 8, 6]
