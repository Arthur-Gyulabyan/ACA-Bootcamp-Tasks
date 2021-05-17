// Format date -> "DD "month name" YYYY"

const formatDate = (date) => {
    const dateComponents = date.toDateString().split(' ');

    // "dateComponents" appearance -> ["Thu", "May", "14", "2020"]
    const [year, month, day] = [dateComponents[3], dateComponents[1], dateComponents[2]];

    return `${day} ${month} ${year}`;
};

console.log(formatDate(new Date('2020-05-14'))); // "14 May 2020"
console.log(formatDate(new Date('1998-08-19'))); // "19 Aug 1998"
console.log(formatDate(new Date('1996-04-01'))); // "01 Apr 1996"
