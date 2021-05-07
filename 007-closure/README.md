# Closure

&nbsp;&nbsp;&nbsp; Closure is the combination of function and its lexical environment. In other words, closure gives us access to the variables of outer function from the inner function.

An example of closure is represented in **[task 1](https://github.com/Arthur-Gyulabyan/ACA-Bootcamp-Tasks/blob/main/007-closure/01-partial-sum.js)** of current lesson directory.

```javascript
function sum(initNum) {
  return function (numToAdd) {
    return initNum + numToAdd;
  };
}
```

Here we have a function `sum` which returns an anonymous function, which in turn returns the sum of arguments `initNum` and `numToAdd`.

```javascript
const addOne = sum(1);
console.log(addOne(2)); // 3
```

The function `sum` is called with argument 1, and the returned value is stored in variable `addOne`. Then `addOne` is called with argument 2 and the result is printed.  
You may suggest that value of `initNum` was lost after the line where `sum` was called and end his job, but, due to closure, the code above works properly and at the end we have an output 3. The inner function remembers the variables (in our case `initNum`) of outer function, and it has access to those variables any time it's called.

---

&nbsp;

### Implementation of array methods' logic

&nbsp;&nbsp;&nbsp; In this directory there are also represented the implementation of some array methods' logic. Due to the fact that we haven't learned any staff about _prototypal inheritance_ and the _this_ keyword yet, I simply used regular functions to handle the tasks. An array, on which the function will be executed, are passed a parameter, together with the other demanded parameters.

```javascript
const myMap = (arr, callback) => {
  // body
};
```
