// Swapping variables without third one.
let a = 10;
let b = 3;

a = a + b;
b = a - b;
a = a - b;

console.log('a -> ' + a, 'b -> ' + b);

// Another way
let x = 10;
let y = 3;

[x, y] = [y, x]; // Swapping values using destructuring.
console.log('x -> ' + x, 'y -> ' + y);
