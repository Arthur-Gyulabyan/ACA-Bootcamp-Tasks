// Count of integers and strings

function countOfElements(arr) {
  let countOfNumbers = 0;
  let countOfStrings = 0;

  for (let value of arr) {
    if (typeof value === 'number' && Math.trunc(value) === value) {
      // Check for type number and also an integer
      countOfNumbers++;
    } else if (typeof value === 'string') {
      // Check for string
      countOfStrings++;
    }
  }

  console.log(`Numbers: ${countOfNumbers}, Strings: ${countOfStrings}`);
}

countOfElements([1, '10', 'hi', 2, 3]); // Numbers: 3, Strings: 2
countOfElements([1, 4, 'i am a string', '456']); // Numbers: 2, Strings: 2
countOfElements([2, 3, 'string', '12', null, 'null']); // Numbers: 2, Strings: 3
