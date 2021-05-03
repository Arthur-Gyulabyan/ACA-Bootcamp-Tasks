// Check prime

function isPrime(number) {
  let bool = true;

  for (let i = 2; i < number / 2; i++) {
    if (number % i === 0) {
      bool = false;
      break;
    }
  }

  // Exclude cases when number is less than 2.
  if (number < 2) {
    bool = false;
  }

  bool ? console.log('Yes') : console.log('No');
}

isPrime(24); // No
isPrime(13); // Yes
isPrime(1); // No
isPrime(-2); // No
