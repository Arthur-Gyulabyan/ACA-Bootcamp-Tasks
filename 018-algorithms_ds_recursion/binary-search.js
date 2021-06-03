const findByVal = (arr, value) => {
    if (arr.length === 0) {
        return -1;
    }

    const middleIndex = Math.floor(arr.length / 2);

    if (value === arr[middleIndex]) {
        return middleIndex;
    }

    if (value > arr[middleIndex]) {
        return middleIndex + findByVal(arr.slice(middleIndex), value);
    }

    return findByVal(arr.slice(0, middleIndex), value);
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log(findByVal(arr, 8)); // 7
