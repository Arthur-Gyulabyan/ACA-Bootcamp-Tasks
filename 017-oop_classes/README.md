# OOP / Classes

## Class

In JavaScript, a class is not an entirely new language-level entity, but it's a kind of function.  
The syntax of `class` is:

```javascript
class MyClass {
    constructor() {}
    method1() {}
    method2() {}
    method3() {}
    // ...
}
```

Then we should use the `new` keyword to create instances of class. The `constructor()` method is called automatically by `new`, se we can initialize the object there.

```javascript
class Car {
    constructor(mark) {
        this.mark = mark;
    }

    drive() {
        console.log(`${this.mark} is moving forward!`);
    }
}

const bmw = new Car('BMW');
bmw.drive();
```

_Note_: There is no commas between class methods. If we put comma, syntax error will be thrown.

Sometimes it's said that class is a "syntactic sugar" over a function, because we could write the same thing by using functions. But still, there are important differences between classes and function constructors.

1. A function created by class is labelled by a special internal property `[[IsClassConstructor]]: true`. This property is checked in a variety of places. For example, unlike a regular function, `class` can't be called without `new`. Also, a string representation of a class constructor in most JavaScript engines looks like this:

```javascript
console.log(Car.toString()); // class Car { ... }
```

2. A class definition sets `enumerable` flag to `false` for all methods in the `prototype`.
3. By default, all code inside the class construct works in strict mode.

There is also some other features in class syntax that we'll explore later.
