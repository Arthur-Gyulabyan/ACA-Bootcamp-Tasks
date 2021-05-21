// Create Calculator function constructor

function Calculator() {}

Calculator.prototype.add = function (a, b) {
    return a + b;
};

Calculator.prototype.subtract = function (a, b) {
    return a - b;
};

Calculator.prototype.multiply = function (a, b) {
    return a * b;
};

Calculator.prototype.divide = function (a, b) {
    return a / b;
};

const calculator = new Calculator();

console.log(calculator.add(10, 12)); // 22
console.log(calculator.subtract(10, 9)); // 1
console.log(calculator.multiply(5, 7)); // 35
console.log(calculator.divide(45, 9)); // 5
