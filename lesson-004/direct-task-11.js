// Print the quotient or reminder

function printResult(num) {
  if (num === 0) {
    // Check for 0
    console.log('Cannot calculate');
    return;
  }

  const arrOfNumber = (num + '').split('').map(Number); // Array of digits

  let product = 1;
  let sum = 0;

  // Calculate product and sum
  for (let value of arrOfNumber) {
    product *= value;
    sum += value;
  }

  // Print result
  product % sum === 0
    ? console.log(`Quotient is ${product / sum}`)
    : console.log(`Reminder is ${product % sum}`);
}

printResult(123456); // Reminder is 6
printResult(44); // Quotient is 2
printResult(707); // Quotient is 0
printResult(0); // Cannot calculate
