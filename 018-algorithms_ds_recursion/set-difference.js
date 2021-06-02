// Write a function that returns the difference of 2 sets.

const difference = (setA, setB) => {
    const diff = new Set();

    setA.forEach((el) => {
        if (!setB.has(el)) {
            diff.add(el);
        }
    });

    return diff;
};

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 3]);
const setC = new Set([3, 4, 5, 6]);

console.log(difference(setA, setB)); // Set [ 1, 4 ]
console.log(difference(setA, setC)); // Set [ 1, 2 ]
