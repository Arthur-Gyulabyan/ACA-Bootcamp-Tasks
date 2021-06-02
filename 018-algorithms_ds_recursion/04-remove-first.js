// Write a recursive function that removes the first element and returns the given array.

const shift = (arr) => {
    const iter = (arr, index) => {
        if (arr.length === 0) {
            return arr;
        }

        if (index === arr.length) {
            arr.length--;
            return arr;
        }

        arr[index] = arr[index + 1];
        return iter(arr, ++index);
    };

    return iter(arr, 0, 1);
};

const arr1 = [6, 78, 'n', 0, 1];
const arr2 = [5];
const arr3 = [];

// Original arrays will be mutated.
console.log(shift(arr1)); // [78, "n", 0, 1]
console.log(shift(arr2)); // []
console.log(shift(arr3)); // []
