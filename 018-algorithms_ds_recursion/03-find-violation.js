// Find the index where sorting order is violated.

const findViolation = (numbers) => {
    if (numbers.length === 0) {
        return -1;
    }

    if (numbers[numbers.length - 1] < numbers[numbers.length - 2]) {
        return numbers.length - 1;
    }

    return findViolation(numbers.slice(0, numbers.length - 1));
};

const numbers1 = [2, 12, 15, 48, 64];
const numbers2 = [-9, -4, -4, 3, 12, 4, 5];

console.log(findViolation(numbers1)); // -1
console.log(findViolation(numbers2)); // 5
