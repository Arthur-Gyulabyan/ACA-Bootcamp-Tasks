// Write a function that returns the intersection of 2 sets.

const intersection = (setA, setB) => {
    let inter = new Set();

    setA.forEach((el) => {
        if (setB.has(el)) {
            inter.add(el);
        }
    });

    return inter;
};

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 3]);
const setC = new Set([3, 4]);

console.log(intersection(setA, setC)); // Set [ 3, 4 ]
console.log(intersection(setB, setA)); // Set [ 2, 3 ]
console.log(intersection(setB, setC)); // Set [ 3 ]
