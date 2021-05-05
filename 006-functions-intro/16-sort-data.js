// Sort array of objects depending on property

const readersData = [
  { book: 'Catcher in the Rye', readStatus: true, percent: 40 },
  { book: 'Animal Farm', readStatus: true, percent: 20 },
  { book: 'Solaris', readStatus: false, percent: 90 },
  { book: 'The Fall', readStatus: true, percent: 50 },
  { book: 'White Nights', readStatus: false, percent: 60 },
  { book: 'After Dark', readStatus: true, percent: 70 },
];

function sortByPercent(data) {
  let readStatusTrue = [];
  let readStatusFalse = [];

  for (let obj of data) {
    // We need to sort only objects which have "true" readStatus.
    if (obj.readStatus) {
      readStatusTrue.push(obj);
    } else {
      readStatusFalse.push(obj);
    }
  }

  // Sort "readStatusTrue" array
  for (let i = 0; i < readStatusTrue.length; i++) {
    for (let j = i + 1; j < readStatusTrue.length; j++) {
      if (readStatusTrue[i].percent < readStatusTrue[j].percent) {
        let temp = readStatusTrue[i];
        readStatusTrue[i] = readStatusTrue[j];
        readStatusTrue[j] = temp;
      }
    }
  }

  // Join arrays
  return readStatusTrue.concat(readStatusFalse);
}

console.log(sortByPercent(readersData));
