// Write a function that returns the union of 2 sets.

const union = (setA, setB) => {
    return new Set([...setA.values(), ...setB.values()]);
};

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 3]);
const setC = new Set([3, 4, 5, 6]);

console.log(union(setA, setB)); // Set [ 1, 2, 3, 4 ]
console.log(union(setA, setC)); // Set [ 1, 2, 3, 4, 5, 6 ]
console.log(union(setB, setC)); // Set [ 2, 3, 4, 5, 6 ]
