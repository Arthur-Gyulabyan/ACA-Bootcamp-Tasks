// Print nth Fibonacci number

// Solution with loop and array
const number = 6; // Given number
const arr = [0, 1];

// Create sequence of Fibonacci numbers
for (let i = 1; i < number; i++) {
  arr.push(arr[i - 1] + arr[i]);
}

console.log(arr[number]);

// Recursion
function fibonacci(num) {
  if (num < 2) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

console.log(fibonacci(6));
