// Implement the logic of "array.slice()"

const mySlice = (arr, begin = 0, end = arr.length) => {
  const extractedArray = [];

  // Check for positive or negative arguments.
  begin = begin >= 0 ? begin : arr.length + begin;
  end = end >= 0 ? end : arr.length + end;

  // If begin is greater than length, "slice()" returns empty array.
  if (begin > arr.length) {
    return [];
  }

  // If end is greater than length, "slice()" cuts until the end.
  if (end > arr.length) {
    end = arr.length;
  }

  // If begin is less than 0, starts from 0 index.
  for (let i = begin >= 0 ? begin : 0; i < end; i++) {
    extractedArray[extractedArray.length] = arr[i]; // Same as "extractedArray.push(arr)"
  }

  return extractedArray;
};

const numbers = [1, 2, 3, 4, 5, 6, 7];

console.log(mySlice(numbers)); // [1, 2, 3, 4, 5, 6, 7]
console.log(mySlice(numbers, 4)); // [5, 6, 7]
console.log(mySlice(numbers, 1, 3)); // [2, 3]
console.log(mySlice(numbers, 7)); // []
console.log(mySlice(numbers, -5, -1)); // [3, 4, 5, 6]
