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
    2. `null + true` => `1`  
    3. `null + false` => `0`  
    4. `null + 3` => `3`  
    5. `null + NaN` => `NaN`  
    6. `null + 'hello'` => `"nullhello"`  
    7. `null + a + b + c + d + e + f` => `Error!`  
    8. `undefined + true` => `NaN`  
    9. `undefined + false` => `NaN`  
    10. `undefined + 5` => `NaN`  
    11. `undefined + NaN` => `NaN`  
    12. `undefined + 'hello'` => `"undefinedhello"`  
    13. `undefined + a + b + c + d + e + f` => `Error!`  
    14. `true + false` => `1`  
    15. `true + 2` => `3`  
    16. `true + NaN` => `NaN`  
    17. `true + 'hello'` => `"truehello"`  
    18. `true + a + b + c + d + e + f` => `Error!`  
    19. `false + 4` => `4`  
    20. `false + NaN` => `NaN`  
    21. `false + 'hello'` => `"falsehello"`  
    22. `false + a + b + c + d + e + f` => `Error!`  
    23. `5 + 3` => `8`  
    24. `5 + NaN` => `NaN`  
    25. `5 + 'hello'` => `"hello"`  
    26. `5 + a + b + c + d + e + f` => `Error!`  
    27. `'hello' + NaN` => `"helloNaN"`  
    28. `'hello' + a + b + c + d + e + f` => `Error!`

<br>

-   unary `-` operator  
    1. `-null` => `-0`  
    2. `-undefined` => `NaN`  
    3. `-true` => `-1`  
    4. `-false` => `-0`  
    5. `-5` => `-5`  
    6. `-'hello'` => `NaN`  
    7. `-'234'` => `-234`  
    8. `-'234.32e3'` => `-234320`  
    9. `-new Number(NaN)` => `NaN`  
    10. `-new String('hello')` => `NaN`  
    11. `-(/google.com/)` => `NaN`  
    12. `-([])` => `-0`  
    13. `-([2])` => `-2`  
    14. `-([2, 3])` => `NaN`  
    15. `-(function() { })` => `NaN`  
    16. `-(a)` => `NaN`  
    17. `-(b)` => `-3`  
    18. `-(c)` => `NaN`  
    19. `-(d)` => `-123`  
    20. `-(e)` => `Error!`
