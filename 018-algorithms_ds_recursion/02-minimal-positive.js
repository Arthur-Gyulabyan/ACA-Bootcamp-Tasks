// Write a recursive function to find its minimal positive element in the given array.

const findMinimal = (numbers) => {
    const iter = (numbers, min) => {
        if (numbers.length === 0) {
            return min === Infinity ? -1 : min;
        }

        const [first, ...rest] = numbers;
        min = first < min && first >= 0 ? first : min;

        return iter(rest, min);
    };

    return iter(numbers, Infinity);
};

const numbers1 = [56, -9, 87, -23, 0, -105, 55, 1];
const numbers2 = [45, -9, 15, 5, -78];
const numbers3 = [-5, -9, -111, -1000, -7];

console.log(findMinimal(numbers1)); // 0
console.log(findMinimal(numbers2)); // 5
console.log(findMinimal(numbers3)); // -1
