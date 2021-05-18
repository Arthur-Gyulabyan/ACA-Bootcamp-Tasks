// Get the week of month of given date

const getWeekOfMonth = (date) => {
    const [year, month, day] = [date.getFullYear(), date.getMonth(), date.getDate()];
    const currentDayWeek = date.getDay(); // Day of week of current day
    const firstDayWeek = new Date(year, month, 1).getDay();

    // If the first day of month is sunday, we need to round to lower integer
    if (firstDayWeek === 0) {
        return Math.floor((day - currentDayWeek) / 7 + 1);
    }

    return Math.ceil((day - currentDayWeek) / 7 + 1);
};

console.log(getWeekOfMonth(new Date(2017, 10, 9))); // 2
console.log(getWeekOfMonth(new Date(2022, 11, 19))); // 4
console.log(getWeekOfMonth(new Date(2018, 11, 31))); // 6
console.log(getWeekOfMonth(new Date(1998, 7, 19))); // 4
console.log(getWeekOfMonth(new Date(1996, 3, 1))); // 1
console.log(getWeekOfMonth(new Date(2017, 9, 1))); // 1
