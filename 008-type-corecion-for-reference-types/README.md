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
    1. `null + undefined` => `NaN`
    1. `null + true` => `1`
    1. `null + false` => `0`
    1. `null + 3` => `3`
    1. `null + NaN` => `NaN`
    1. `null + 'hello'` => `"nullhello"`
    1. `null + a + b + c + d + e + f` => `Error!`
    1. `undefined + true` => `NaN`
    1. `undefined + false` => `NaN`
    1. `undefined + 5` => `NaN`
    1. `undefined + NaN` => `NaN`
    1. `undefined + 'hello'` => `"undefinedhello"`
    1. `undefined + a + b + c + d + e + f` => `Error!`
    1. `true + false` => `1`
    1. `true + 2` => `3`
    1. `true + NaN` => `NaN`
    1. `true + 'hello'` => `"truehello"`
    1. `true + a + b + c + d + e + f` => `Error!`
    1. `false + 4` => `4`
    1. `false + NaN` => `NaN`
    1. `false + 'hello'` => `"falsehello"`
    1. `false + a + b + c + d + e + f` => `Error!`
    1. `5 + 3` => `8`
    1. `5 + NaN` => `NaN`
    1. `5 + 'hello'` => `"hello"`
    1. `5 + a + b + c + d + e + f` => `Error!`
    1. `'hello' + NaN` => `"helloNaN"`
    1. `'hello' + a + b + c + d + e + f` => `Error!`

<br>

-   unary `-` operator
    1. `-null` => `-0`
    1. `-undefined` => `NaN`
    1. `-true` => `-1`
    1. `-false` => `-0`
    1. `-5` => `-5`
    1. `-'hello'` => `NaN`
    1. `-'234'` => `-234`
    1. `-'234.32e3'` => `-234320`
    1. `-new Number(NaN)` => `NaN`
    1. `-new String('hello')` => `NaN`
    1. `-(/google.com/)` => `NaN`
    1. `-([])` => `-0`
    1. `-([2])` => `-2`
    1. `-([2, 3])` => `NaN`
    1. `-(function() { })` => `NaN`
    1. `-(a)` => `NaN`
    1. `-(b)` => `-3`
    1. `-(c)` => `NaN`
    1. `-(d)` => `-123`
    1. `-(e)` => `Error!`
