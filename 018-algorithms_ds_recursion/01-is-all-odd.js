// Write a recursive function to determine whether all digits of the number are odd or not.

const isAllOdd = (number) => {
    const iter = (number, bool) => {
        const last = number % 10;
        bool = last % 2 === 1;

        if (bool === false) {
            return false;
        }

        if (number < 10) {
            return bool;
        }

        return iter((number - last) / 10, bool);
    };

    return iter(number, true);
};

console.log(isAllOdd(4211133)); // false
console.log(isAllOdd(7791)); // true
console.log(isAllOdd(5)); // true
