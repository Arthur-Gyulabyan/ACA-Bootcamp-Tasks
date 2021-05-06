// Determine weather array consists only from uniques or not

// Works only for primitive type values
const checkUnique = (arr) => {
  let isUnique = true;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        isUnique = false;
      }
    }
  }

  return isUnique ? 'Array consists of unique elements.' : 'Array has non unique element(s).';
};

console.log(checkUnique([1, '1', 'asd', true, -5, undefined, false, null, 2, 0])); // Unique
console.log(checkUnique([1, '1', 'asd', true, -5, undefined, false, null, 'asd', 0])); // Not Unique
