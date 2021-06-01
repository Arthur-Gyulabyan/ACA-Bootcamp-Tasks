// Find the sum of a given array.

const sum = (numbers) => {
    if (numbers.length === 0) {
        return 0;
    }

    return numbers[0] + sum(numbers.slice(1));
};

const numbers = [1, 2, 3, 4, 5];
console.log(sum(numbers));
