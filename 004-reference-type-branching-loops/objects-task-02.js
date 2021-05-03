// Check for emptiness

let schedule = {};
let user = {
  name: 'Arthur',
};

function isEmpty(obj) {
  // Objects don't have the length property like arrays, so we can use the for in loop.
  for (let key in obj) {
    return false; // Will enter the loop only if the object has any property.
  }

  return true; // This line will be reached only if the object is empty, so the loop was skipped.
}

console.log(isEmpty(schedule)); // true
console.log(isEmpty(user)); // false
