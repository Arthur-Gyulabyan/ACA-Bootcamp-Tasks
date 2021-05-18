// Try to reverse the given string.

const reverseString = (str) => {
    try {
        str = str.split('').reverse().join('');
    } catch (error) {
        console.log(error.message);
    }

    console.log(str);
};

reverseString('Arthur'); // "ruthrA"
reverseString(123); // Error! -> 123
