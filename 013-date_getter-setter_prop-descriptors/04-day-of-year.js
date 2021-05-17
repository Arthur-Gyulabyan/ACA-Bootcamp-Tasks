// Get the day-number of the year.

const dayOfYear = (dateStr) => {
    const dateArr = dateStr.split('/');
    const [month, day, year] = dateArr;

    // Date based on string
    const date = new Date(`${year}-${month}-${day}`);

    // First day of our year
    const firstDay = new Date(year, 0, 1);

    // 1 day === 86400000 milliseconds
    return Math.floor((date - firstDay) / 86400000 + 1);
};

console.log(dayOfYear('12/13/2020')); // 348
console.log(dayOfYear('12/17/2020')); // 352
console.log(dayOfYear('11/16/2020')); // 321
console.log(dayOfYear('1/9/2019')); // 9
console.log(dayOfYear('3/1/2004')); // 61
console.log(dayOfYear('12/31/2000')); // 366
