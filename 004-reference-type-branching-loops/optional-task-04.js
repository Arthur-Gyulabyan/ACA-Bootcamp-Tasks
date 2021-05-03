// Factorial

// Factorial using recursion
function factorialRecursion(positive) {
  if (positive === 1) {
    return positive;
  }

  return positive * factorialRecursion(positive - 1);
}

// Factorial using loop
function factorialLoop(positive) {
  let factorial = 1;

  while (positive) {
    factorial *= positive;
    positive--;
  }

  return factorial;
}

console.log(factorialRecursion(5)); // 120
console.log(factorialLoop(6)); // 720
