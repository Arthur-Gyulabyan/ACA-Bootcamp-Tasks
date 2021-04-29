// Find the sign of product without using multiplication operator

function findSign(firstNum, secondNum, thirdNum) {
  if (firstNum === 0 || secondNum === 0 || thirdNum === 0) {
    // Check for at least one of the numbers to be 0
    console.log('Unsigned');
  } else if (
    // Cases of +
    (firstNum > 0 && secondNum > 0 && thirdNum > 0) ||
    (firstNum > 0 && secondNum < 0 && thirdNum < 0) ||
    (firstNum < 0 && secondNum < 0 && thirdNum > 0) ||
    (firstNum < 0 && secondNum > 0 && thirdNum < 0)
  ) {
    console.log('+');
  } else {
    console.log('-');
  }
}

findSign(1, -2, 3); // -
findSign(1, -2, 0); // Unsigned
findSign(-1, -2, 3); // +
