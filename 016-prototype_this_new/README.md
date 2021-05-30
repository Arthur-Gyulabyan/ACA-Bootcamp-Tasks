# Prototype / this / new

Almost anyone, who had an experience with JavaScript, probably heard the expression "everything in JS is an object". Every value in JS is created on the base of some blueprint which are represented in the form of so called function constructors.  
JavaScript has its own build in function constructors, such as `Object`, `Array`, `String` etc. Every object, created on the base of any constructor, is called the **instance** of that constructor. For example, an object created with the literal syntax, is the instance of `Object` function constructor.

```javascript
const obj = {};
```

Here `obj` is an instance of `Object`. JS also provides a special keyword new, which is used to create an object from a function. `obj` could be created by using the `new` keyword:

```javascript
const obj = new Object();
```

As mentioned above, almost every value in JS is an instance of some constructor. Even primitive types have their parent constructor - `String`, `Number`, `Boolean`.
Function itself is a special kind callable object, which is an instance of `Function` function constructor. So if a function is an object, it is logical that it can hold properties like simple objects. Every function has a special property `prototype`, which, in its turn, is an object. We can fill the `prototype` with any properties and methods. Then, if an object is created on the base of that function, that object will inherit all properties and methods provided in `prototype`.  
For example, `Array.prototype` holds all the well known methods, like `map()` or `reduce()` and every instance of `Array` inherits that methods.  
Besides the build in function constructors, we can create our own constructors, and manually fill its `prototype` with any properties and methods, which will be inherited by instances.

## new

Let's see some examples of manually crated function constructors.

```javascript
const User = function (firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
};

const arthur = new User('Arthur', 'Gyulabyan', 23);
```

It's a convention to write the name of function constructor with uppercase. We created a function, which takes some arguments and then does some operations like `this.firstName = firstName`. The `this` is an another special keyword, the working principle of which we will understand in a second.  
The `new` keyword does the following four operations:

1. Creates an empty object.
2. Links the `[[Prototype]]` with the new object.
3. Binds the `this` to the newly created object.
4. Unless the function returns reference type, the new object will be returned.

Let's understand every step. The first one is simple. What means link the prototype? As we know, every object in JS has special inner property `[[Prototype]]`, which is a link to another object or `null`. We also know that every function in JS has special `prototype` property, which is a simple object. So, in simple terms, the `new` keyword assigns the `__proto__` of the new object to the `prototype` of the constructor. So the new object will inherit all properties and methods from that `prototype`.  
Then the `this` is bound to the newly crated object. It means that the line `this.firstName = firstName` from the example above says - crate a property with key `firstName` in the new object and assign the value taken as an argument to it.  
In the last step, if the function does not returns any reference type, then the created object will be returned.  
<br>

![Prototype Chain](https://raw.githubusercontent.com/Arthur-Gyulabyan/ACA-Bootcamp-Tasks/main/016-prototype_this_new/prototype-chain.png 'Prototype Chain')
