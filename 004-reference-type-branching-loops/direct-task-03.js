// Bring the last digit of the number to the beginning

function lastDigitToBegin(num) {
  if (num % 10 === 0) {
    // If number ends with 0, number remains the same.
    return num;
  }

  const arrOfNumber = (num + '').split(''); // Array of number digits

  // Cut the last element form array and add it to the beginning.
  arrOfNumber.unshift(arrOfNumber.pop());

  // Get back a number from array and return it.
  return +arrOfNumber.join('');
}

console.log(lastDigitToBegin(1)); // 1
console.log(lastDigitToBegin(0)); // 0
console.log(lastDigitToBegin(100)); // 100
console.log(lastDigitToBegin(112)); // 211
console.log(lastDigitToBegin(14832584)); // 41483258
