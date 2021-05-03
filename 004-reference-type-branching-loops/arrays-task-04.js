// Sum input numbers

function someInput() {
  let numbers = [];
  let sum = 0;

  while (true) {
    let userInput = prompt('Please insert a number!');

    if (userInput === null || userInput === '' || +userInput !== +userInput)
      break; // Last condition is true only when "+userInput" is NaN
    numbers.push(+userInput); // Only number type values will be pushed
  }

  for (let value of numbers) {
    sum += value; // Calculating sum of array elements
  }

  return sum;
}

console.log(someInput());
