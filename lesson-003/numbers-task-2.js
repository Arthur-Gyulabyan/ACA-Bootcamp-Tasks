// Repeat until input is a number

function readNumber() {
  let num = prompt('Please, enter a number!');

  if (num === null || num === '') {
    // Checking for cancel and empty string input
    return null;
  } else if (+num !== +num) {
    // Checking for invalid input
    return readNumber(); // Will be executed, until valid input
  }

  return +num;
}

alert(readNumber());
