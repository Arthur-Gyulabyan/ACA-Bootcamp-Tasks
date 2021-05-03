// Reverse the first and last digits

function reverseDigits(number) {
  const arrayOfNumber = (number + '').split(''); // Array of digits

  // Swap first and last digits using third variable
  let temporary = arrayOfNumber[0];
  arrayOfNumber[0] = arrayOfNumber[arrayOfNumber.length - 1];
  arrayOfNumber[arrayOfNumber.length - 1] = temporary;

  // Get a number form array of digits
  const newNumber = +arrayOfNumber.join('');
  return newNumber;
}

console.log(reverseDigits(12345)); // 52341
console.log(reverseDigits(21)); // 12
