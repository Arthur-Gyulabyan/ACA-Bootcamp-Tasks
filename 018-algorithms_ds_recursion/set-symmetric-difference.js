// Write a function that returns the symmetric difference of 2 sets.

const symmetricDifference = (setA, setB) => {
    const uniques = [];

    setA.forEach((el) => {
        if (!setB.has(el)) {
            uniques.push(el);
        }
    });

    setB.forEach((el) => {
        if (!setA.has(el)) {
            uniques.push(el);
        }
    });

    return new Set(uniques);
};

let setA = new Set([1, 2, 3, 4]);
let setB = new Set([2, 3]);
let setC = new Set([3, 4, 5, 6]);

console.log(symmetricDifference(setA, setB)); // Set [ 1, 4 ]
console.log(symmetricDifference(setA, setC)); // Set [ 1, 2, 5, 6 ]
