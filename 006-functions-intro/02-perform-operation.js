// Do an operation between given array elements

function performOperation(arr, operation) {
  let result;

  switch (operation) {
    case '+':
      result = 0;
      for (let num of arr) {
        result += num;
      }
      break;
    case '-':
      result = arr[0];
      for (let i = 1; i < arr.length; i++) {
        result -= arr[i];
      }
      break;
    case '*':
      result = 1;
      for (let num of arr) {
        result *= num;
      }
      break;
    case '/':
      result = arr[0];
      for (let i = 1; i < arr.length; i++) {
        result /= arr[i];
      }
      break;
  }

  return result;
}

console.log(performOperation([1, -6, 8, 0, 12], '+')); // 15
console.log(performOperation([-4, -8, 12, 7], '-')); // -15
console.log(performOperation([1, 2, 3, 4, 5], '*')); // 120
console.log(performOperation([100, 10, 5, 4], '/')); // 0.5
