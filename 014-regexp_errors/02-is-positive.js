// Return "YES" if positive, otherwise throw an error.

const isPositive = (a) => {
    if (a > 0) {
        return 'YES';
    } else if (a < 0) {
        throw Error('Negative Error');
    } else {
        throw Error('Zero Error');
    }
};

console.log(isPositive(12));
console.log(isPositive(-1));
