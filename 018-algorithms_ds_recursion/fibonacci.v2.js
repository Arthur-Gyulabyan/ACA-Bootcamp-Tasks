// Oneliner for fibonacci

const fib = (n) => (n === 2 || n === 1 ? n - 1 : n === 0 ? 0 : fib(n - 1) + fib(n - 2));

console.log(fib(10)); // 34
