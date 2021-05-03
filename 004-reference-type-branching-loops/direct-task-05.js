// Sort numbers by the ascending order

// Sort 3 numbers
function sortNumbers(firstNum, secondNum, thirdNum) {
  if (firstNum > secondNum && secondNum > thirdNum) {
    console.log(thirdNum, secondNum, firstNum);
  } else if (firstNum > secondNum && secondNum < thirdNum) {
    firstNum > thirdNum
      ? console.log(secondNum, thirdNum, firstNum)
      : console.log(secondNum, firstNum, thirdNum);
  } else if (firstNum < secondNum && secondNum > thirdNum) {
    firstNum > thirdNum
      ? console.log(thirdNum, firstNum, secondNum)
      : console.log(firstNum, thirdNum, secondNum);
  } else {
    console.log(firstNum, secondNum, thirdNum);
  }
}

sortNumbers(0, -12, -3); // -12,
sortNumbers(44, 9, 12);

// Sort given array of numbers
function sortArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temporary = arr[i];
        arr[i] = arr[j];
        arr[j] = temporary;
      }
    }
  }
}

const numbers = [45, -12, 1, 12, 54, 44, 0];

sortArray(numbers);
console.log(numbers); // [-12, 0, 1, 12, 44, 45, 54]
