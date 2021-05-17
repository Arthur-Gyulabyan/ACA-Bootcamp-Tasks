// Get the day of the week as a string.

const getDayOfWeek = (dateStr) => {
    const weekNames = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];

    const date = new Date(dateStr);
    return weekNames[date.getDay()];
};

console.log(getDayOfWeek('12/07/2016')); // "Wednesday"
console.log(getDayOfWeek('09/04/2016')); // "Sunday"
console.log(getDayOfWeek('12/08/2011')); // "Thursday"
console.log(getDayOfWeek('12/13/2020')); // Sunday
console.log(getDayOfWeek('12/17/2020')); // "Thursday"
console.log(getDayOfWeek('11/16/2020')); // "Monday"
