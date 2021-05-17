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

* binary `+` operator  
`null + undefined`  
`null + true`  
`null + false`  
`null + 3`  
`null + NaN`  
`null + 'hello'`  
`null + a + b + c + d + e + f`  
`undefined + true`  
`undefined + false`  
`undefined + 5`  
`undefined + NaN`  
`undefined + 'hello'`  
`undefined + a + b + c + d + e + f`  
`true + false`  
`true + 2`  
`true + NaN`  
`true + 'hello'`  
`true + a + b + c + d + e + f`  
`false + 4`  
`false + NaN`  
`false + 'hello'`  
`false + a + b + c + d + e + f`  
`5 + 3`  
`5 + NaN`  
`5 + 'hello'`  
`5 + a + b + c + d + e + f`  
`'hello' + NaN`  
`'hello' + a + b + c + d + e + f`  