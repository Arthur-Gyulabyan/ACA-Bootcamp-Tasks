// Write a recursive function that flattens the nested array.

// Without loops. Pure recursion.
const flatArr = (arr) => {
    const iter = (arr, currentIndex) => {
        if (currentIndex === arr.length) {
            return arr;
        }

        const nextIndex = currentIndex + 1;
        const currentElem = arr[currentIndex];

        if (Array.isArray(arr[currentIndex])) {
            // Using spread operator
            return [
                ...arr.slice(0, currentIndex),
                ...iter(currentElem, 0),
                ...arr.slice(nextIndex),
            ];

            // Using "concat()"
            // return arr.slice(0, index).concat(iter(arr[index], 0)).concat(arr.slice(index + 1));
        }

        return iter(arr, nextIndex);
    };

    return iter(arr, 0);
};

const arr1 = [1, [3, 4, [1, 2]], 10];
const arr2 = [14, [1, [[[3, []]], 1], 0]];
const arr3 = [1, 2, [3, 4], 5, 6];

console.log(flatArr(arr1)); // [1, 3, 4, 1, 2, 10]
console.log(flatArr(arr2)); // [14, 1, 3, 1, 0]
console.log(flatArr(arr3)); // [1, 2, 3, 4, 5, 6]
