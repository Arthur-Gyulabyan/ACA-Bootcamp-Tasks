let a = {
  valueOf: function () {
    return 'hello';
  },
};

let b = {
  valueOf: function () {
    return 3;
  },
};

let c = {
  valueOf: function () {
    return new Number(3);
  },
};

let d = {
  toString: function () {
    return 123;
  },
};

let e = {
  toString: function () {
    return new Number(3);
  },
};

// Let's suppose that f is not declared

// // Binary "+" operator
// console.log(null + undefined); // NaN
// console.log(null + true); // 1
// console.log(null + false); // 0
// console.log(null + 3); // 3
// console.log(null + NaN); // NaN
// console.log(null + 'hello'); // "nullhello"
// console.log(null + a + b + c + d + e + f); // Error!
// console.log(undefined + true); // NaN
// console.log(undefined + false); // NaN
// console.log(undefined + 5); // NaN
// console.log(undefined + NaN); // NaN
// console.log(undefined + 'hello'); // "undefinedhello"
// console.log(undefined + a + b + c + d + e + f); // Error!
// console.log(true + false); // 1
// console.log(true + 2); // 3
// console.log(true + NaN); // NaN
// console.log(true + 'hello'); // "truehello"
// console.log(true + a + b + c + d + e + f); // Error!
// console.log(false + 4); // 4
// console.log(false + NaN); // NaN
// console.log(false + 'hello'); // "falsehello"
// console.log(false + a + b + c + d + e + f); // Error!
// console.log(5 + 3); // 8
// console.log(5 + NaN); // NaN
// console.log(5 + 'hello'); // "5hello"
// console.log(5 + a + b + c + d + e + f); // Error!
// console.log('hello' + NaN); // "helloNaN"
// console.log('hello' + a + b + c + d + e + f); // Error!


// // Unary "-" operator
// console.log(-null); // -0
// console.log(-undefined); // NaN
// console.log(-true); // -1
// console.log(-false); // -0
// console.log(-5); // -5
// console.log(-'hello'); // NaN
// console.log(-'234'); // -234
// console.log(-'234.32e3'); // -234320
// console.log(-new Number(NaN)); // NaN
// console.log(-new String('hello')); // NaN
// console.log(-/google.com/); // NaN
// console.log(-[]); // -0
// console.log(-[2]); // -2
// console.log(-[2, 3]); // NaN
// console.log(-function () {}); // NaN
// console.log(-a); // NaN
// console.log(-b); // -3
// console.log(-c); // NaN
// console.log(-d); // -123
// console.log(-e); // Error!
