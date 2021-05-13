// Implement the logic of "array.splice()"

const mySplice = (arr, start, count, ...replaceItems) => {
  const extractedItems = [];

  let startIndex, deleteCount;

  if (start === undefined) {
    return [];
  } else if (start >= arr.length) {
    startIndex = arr.length;
  } else if (start < 0) {
    startIndex = arr.length + start > 0 ? arr.length + start : 0;
  } else {
    startIndex = Number(start);
  }

  if (count === undefined || count >= arr.length - startIndex) {
    deleteCount = arr.length - startIndex;
  } else if (count <= 0) {
    deleteCount = 0;
  } else {
    deleteCount = Number(count);
  }

  // Items to replace (if provided) joined with remained elements after cutting.
  const restOfArr = replaceItems.concat(arr.slice(startIndex + deleteCount));

  for (let i = startIndex; i < startIndex + deleteCount; i++) {
    const element = arr[i];
    extractedItems.push(element);
  }

  for (let i = startIndex, j = 0; i < startIndex + restOfArr.length; i++, j++) {
    arr[i] = restOfArr[j];
  }

  arr.length = arr.slice(0, startIndex).length + restOfArr.length;

  return extractedItems;
};

// Testing
let arr = [1, 2, 3, 4, 5, 6];
console.log(mySplice(arr, 2, 2, 7, 8, 9)); // [3, 4]
console.log('Initial::', arr); // [1, 2, 7, 8, 9, 5, 6]
