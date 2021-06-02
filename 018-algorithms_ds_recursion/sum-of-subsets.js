// Given an array of integers, print sums of all subsets in it.

const sumOfSubsets = (numbers) => {
    const iter = (numbers, index, sums) => {
        if (index === numbers.length) {
            return sums;
        }

        sums.forEach((el) => sums.push(numbers[index] + el));

        return iter(numbers, index + 1, sums);
    };

    return iter(numbers, 0, [0]);
};

const arr1 = [2, 3];
const arr2 = [2, 3, 4];
console.log(sumOfSubsets(arr1)); // [0, 2, 3, 5]
console.log(sumOfSubsets(arr2)); // [0, 2, 3, 5, 4, 6, 7, 9]
