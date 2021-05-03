// Check whether digit contains in the number or not

function contains(digit, number) {
  let bool = false;

  const arrayOfNumber = (number + '').split(''); // Array of digits

  // Loop through array and check for existence of digit in a number.
  for (let i = 0; i < arrayOfNumber.length; i++) {
    if (digit === +arrayOfNumber[i]) {
      // If digit is found, assign true to "bool" and exit the loop.
      bool = true;
      break;
    }
  }

  bool ? console.log('Yes!') : console.log('No!');
}

contains(1, 55765); // No!
contains(0, 640873); // Yes!
