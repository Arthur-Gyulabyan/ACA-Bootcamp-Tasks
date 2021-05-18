// Try to reverse the given string.

const reverseString = (str) => {
    try {
        let reversedStr = str.split('').reverse().join('');
        console.log(reversedStr);
    } catch (error) {
        console.warn(error.message);
        console.log(str);
    }
};

reverseString('Arthur'); // "ruthrA"
reverseString(123); // Error! -> 123
