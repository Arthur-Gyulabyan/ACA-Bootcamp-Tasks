# Type Coercion for Reference Types

## GTU 02

Suppose that

```javascript
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
```

and suppose that `f` isn't declared

-   binary `+` operator  
    `null + undefined` => `NaN`  
    `null + true` => `1`  
    `null + false` => `0`  
    `null + 3` => `3`  
    `null + NaN` => `NaN`  
    `null + 'hello'` => `"nullhello"`  
    `null + a + b + c + d + e + f` => `Error!`  
    `undefined + true` => `NaN`  
    `undefined + false` => `NaN`  
    `undefined + 5` => `NaN`  
    `undefined + NaN` => `NaN`  
    `undefined + 'hello'` => `"undefinedhello"`  
    `undefined + a + b + c + d + e + f` => `Error!`  
    `true + false` => `1`  
    `true + 2` => `3`  
    `true + NaN` => `NaN`  
    `true + 'hello'` => `"truehello"`  
    `true + a + b + c + d + e + f` => `Error!`  
    `false + 4` => `4`  
    `false + NaN` => `NaN`  
    `false + 'hello'` => `"falsehello"`  
    `false + a + b + c + d + e + f` => `Error!`  
    `5 + 3` => `8`  
    `5 + NaN` => `NaN`  
    `5 + 'hello'` => `"hello"`  
    `5 + a + b + c + d + e + f` => `Error!`  
    `'hello' + NaN` => `"helloNaN"`  
    `'hello' + a + b + c + d + e + f` => `Error!`

-   unary `-` operator
    `-null` => `-0`  
    `-undefined` => `NaN`  
    `-true` => `-1`  
    `-false` => `-0`  
    `-5` => `-5`  
    `-'hello'` => `NaN`  
    `-'234'` => `-234`  
    `-'234.32e3'` => `-234320`  
    `-new Number(NaN)` => `NaN`  
    `-new String('hello')` => `NaN`  
    `-(/google.com/)` => `NaN`  
    `-([])` => `-0`  
    `-([2])` => `-2`  
    `-([2, 3])` => `NaN`  
    `-(function() { })` => `NaN`  
    `-(a)` => `NaN`  
    `-(b)` => `-3`  
    `-(c)` => `NaN`  
    `-(d)` => `-123`  
    `-(e)` => `Error!`
