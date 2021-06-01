// Add brackets between letters.

const addBrackets = (str) => {
    if (str.length < 3) {
        return str;
    }

    return `${str[0]}(` + addBrackets(str.slice(1, str.length - 1)) + `)${str[str.length - 1]}`;
};

const str1 = 'LItBeoFLcSGBOFQxMHoIuDDWcqcVgkcRoAeocXO';
const str2 = 'LItBeoFLcSGBOFQxMHoIIuDDWcqcVgkcRoAeocXO';
console.log(addBrackets(str1));
console.log(addBrackets(str2));
