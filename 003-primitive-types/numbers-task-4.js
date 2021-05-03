// A random integer from min to max

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomNumber(1, 2));
console.log(randomNumber(5, 10));
