// Get all months between the given interval of date.

function monthsInterval(dataStart, dataEnd) {
    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    const months = [];

    // Function should work properly even if "dataStart" is greater than "dataEnd"
    let [start, end] =
        dataStart < dataEnd
            ? [dataStart.getMonth(), dataEnd.getMonth()]
            : [dataEnd.getMonth(), dataStart.getMonth()];

    // We need to consider the cases when our dates are different years.
    let yearDiff = dataEnd.getFullYear() - dataStart.getFullYear();

    let ending = monthNames.length;

    while (yearDiff >= 0) {
        if (yearDiff === 0) {
            ending = end;
        }

        for (let i = start; i <= ending; i++) {
            if (monthNames[i] !== undefined) {
                months.push(monthNames[i]);
            }
        }

        start = 0;
        yearDiff--;
    }

    return months;
}

let january = new Date(2017, 0, 1);
let march = new Date(2017, 2, 1);
console.log(monthsInterval(january, march));

let december = new Date(2017, 11, 1);
let march2018 = new Date(2018, 2, 1);
console.log(monthsInterval(december, march2018));

let january2017 = new Date(2017, 0, 1);
let january2018 = new Date(2018, 0, 1);
console.log(monthsInterval(january2017, january2018));
