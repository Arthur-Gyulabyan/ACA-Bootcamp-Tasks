// Write a function which determines whether the first set is a superset of the second one.

const isSuperset = (setA, setB) => {
    let isSuper = true;

    setB.forEach((el) => {
        if (!setA.has(el)) {
            isSuper = false;
        }
    });

    return isSuper;
};

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 3]);
const setC = new Set([3, 4, 5, 6]);
const setD = new Set([]);

console.log(isSuperset(setA, setB)); // true
console.log(isSuperset(setB, setA)); // false
console.log(isSuperset(setC, setA)); // false
console.log(isSuperset(setA, setD)); // true
