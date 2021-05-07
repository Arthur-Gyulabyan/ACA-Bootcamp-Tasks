// This version includes cases when array also consists of elements of reference type (arrays and objects).
// But this one is also not an ideal solution, 'cause it will work properly only if reference type elements'
// depth is 1 (not nested).

// Helper function which will be used for comparing reference types (shallow compare)
function shallowCompare(obj1, obj2) {
  let isEqual = true;

  // Check equality of object lengths
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  // Compare properties
  for (let key in obj1) {
    if (key in obj2) {
      if (obj1[key] !== obj2[key]) {
        isEqual = false;
      }
    } else {
      isEqual = false;
    }
  }

  return isEqual;
}

const checkUnique = (arr) => {
  let isUnique = true;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (
        // Check current elements for type "object"
        typeof arr[i] === 'object' &&
        typeof arr[j] === 'object' &&
        // Exclude case of "null"
        arr[i] &&
        arr[j] &&
        // Check result of comparison
        shallowCompare(arr[i], arr[j])
        //
      ) {
        isUnique = false;
        break;
      }

      if (arr[i] === arr[j]) {
        isUnique = false;
        break;
      }
    }
  }

  return isUnique ? 'Array consists of unique elements' : 'Array has non unique element(s).';
};

console.log(checkUnique([1, '1', 'asd', true, -5, undefined, false, null, 2, 0])); // Unique
console.log(checkUnique([1, [1, 2], 'asd', true, -5, undefined, false, null, [1, 2]])); // Has non unique
console.log(
  checkUnique([
    { a: 1, b: 2 },
    { a: 1, b: 2 },
  ])
); // Has non unique
