// Invert object (keys become values, values become keys)

function invertKeyValues(obj) {
  for (let key in obj) {
    if (obj[obj[key]]) {
      // If value as key already exists, turn value of it into array and add the new value
      obj[obj[key]] = [...obj[obj[key]], key];
    } else {
      // Create new key value pair
      obj[obj[key]] = key;
    }

    // Delete current key value pair
    delete obj[key];
  }

  return obj;
}

console.log(invertKeyValues({ a: '1', b: '2' })); // { 1: "a", 2: "b" }
console.log(invertKeyValues({ a: '1', b: '2', c: '2' })); // { 1: "a", 2: ["b", "c"] }
console.log(invertKeyValues({ a: '1', b: '2', c: '2', d: '2' })); // { 1: "a", 2: ["b", "c", "d"] }
console.log(invertKeyValues({ a: '1', b: '2', c: '2', d: '2', e: '3', f: '1' })); // { 1: ["a", "f"], 2: ["b", "c", "d"], 3: "e" }
