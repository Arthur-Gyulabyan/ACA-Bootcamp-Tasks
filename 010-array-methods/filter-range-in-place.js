// Write a function which filters the element of array by given range, modifying the original array

const filterRangeInPlace = (arr, start, end) => {
  // We can't use "forEach()", 'cause we need to stay at the same index when item is removed.
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];

    if (item < start || item > end) {
      arr.splice(i, 1);
      i--;
    }
  }
};

const arr = [5, 3, 8, 1, 12, 6, 2];
filterRangeInPlace(arr, 1, 4);
console.log(arr); // [3, 1, 2]
