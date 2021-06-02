// Write a function that calculates its sum of the digits and if that sum has
// more than 1 digit find the sum of digits of that number.

const sumOfDigits = (num) => {
    const iter = (num, sum, result) => {
        if (num < 10) {
            result = sum + num;

            if (result < 10) {
                return result;
            }

            if (result >= 10) {
                return iter(result, 0, 0);
            }
        }

        const last = num % 10;
        sum += last;
        return iter((num - last) / 10, sum, 0);
    };

    return iter(num, 0);
};

console.log(sumOfDigits(14)); // 5
console.log(sumOfDigits(29)); // 2
console.log(sumOfDigits(999999999999)); // 9
