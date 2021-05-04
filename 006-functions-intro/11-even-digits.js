// Find all numbers between 2 given numbers, each digit of which is even

function findEvenDigits(num1, num2) {
  let arrOfEven = [];

  for (let i = num1; i <= num2; i++) {
    let isEven = true;
    // Turn current number into array of digits
    let arrOfDigits = String(i).split('');

    for (let digit of arrOfDigits) {
      if (Number(digit) % 2 === 1) {
        // If odd
        isEven = false;
      }
    }

    if (isEven) {
      arrOfEven.push(i);
    }
  }

  if (arrOfEven.length) {
    return arrOfEven.join(', ');
  } else {
    return 'Such numbers does not exist';
  }
}

console.log(findEvenDigits(19, 42)); // 20, 22, 24, 26, 28, 40, 42
console.log(findEvenDigits(99, 199)); // "Such numbers does not exist"
