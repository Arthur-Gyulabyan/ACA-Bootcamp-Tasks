// Get the week of month of given date

const getWeekOfMonth = (date) => {
    const [year, month, day] = [date.getFullYear(), date.getMonth(), date.getDate()];
    const firstDayWeek = new Date(year, month, 1).getDay();

    if (day >= 1 && day <= 7 - firstDayWeek) {
        return 1;
    } else if (day >= 8 - firstDayWeek && day <= 14 - firstDayWeek) {
        return 2;
    } else if (day >= 15 - firstDayWeek && day <= 21 - firstDayWeek) {
        return 3;
    } else if (day >= 22 - firstDayWeek && day <= 28 - firstDayWeek) {
        return 4;
    } else if (day >= 29 - firstDayWeek && day <= 35 - firstDayWeek) {
        return 5;
    } else {
        return 6;
    }
};

console.log(getWeekOfMonth(new Date(2017, 10, 9))); // 2
console.log(getWeekOfMonth(new Date(2022, 11, 19))); // 4
console.log(getWeekOfMonth(new Date(2018, 11, 31))); // 6
console.log(getWeekOfMonth(new Date(1998, 7, 19))); // 4
console.log(getWeekOfMonth(new Date(1996, 3, 1))); // 1
