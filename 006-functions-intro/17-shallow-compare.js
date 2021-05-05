// Perform shallow compare between two objects

function shallowCompare(obj1, obj2) {
  let isEqual = true;

  // Check equality of object lengths
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  // Compare properties
  for (let key in obj1) {
    if (key in obj2) {
      // Compare values
      if (obj1[key] !== obj2[key]) {
        isEqual = false;
      }
    } else {
      isEqual = false;
    }
  }

  return isEqual;
}

console.log(shallowCompare({ a: '1' }, { a: '1' })); // true
console.log(shallowCompare({ a: '1' }, { a: '1', b: '2' })); // false
console.log(shallowCompare({}, {})); // true
