# proto

Each object in JavaScript has a private property which holds a link to another object called **prototype**. That prototype object has its own prototype, and so on until an object is reached with `null` as its prototype. `null` has no prototype, and acts as a final link in **prototype chain**.  
Inheritance in JavaScript is based on this concept of **prototype chain**. When we try to access a property in an object, the property will not only be searched on that exact object, but also, in case when the property is not found, it will be searched on the object's prototype, then on the prototype of the last one. The process will go on until the property is found or the request reached the `null`. Only if the property is not found in object and its prototype chain, `undefined` will be returned.  
In specification, the prototype of an object is donated as `[[Prototype]]`. This property is hidden and internal, but there are many ways to set it.  
One of the ways is to use the special name `__proto__`:

```javascript
const car = {
    hasEngine = true,
}

const bmw = {
    mark: 'BMW',
}

bmw.__proto__ = car; // bmw.[[Prototype]] = car
```

Now if we read a property that doe's not exist in `bmw`, it will be taken from `car`.

```javascript
bmw.hasEngine; // true
```

Here it is said that `car` is the prototype of `bmw`.  
Prototype chain can be much longer:

```javascript
const car = {
    hasEngine = true,
}

const bmw = {
    mark: 'BMW',
    __proto__: car,
}

const e60 = {
    series: 5,
    generation: 5,
    subModel: 'e60',
    __proto__: bmw,
}

e60.hasEngine = car;
```

There are 2 limitations, when setting the prototype:

1. The references can't go in circles. JS will throw an error, when we try to write `bmw.__proto__ = car` and `car.__proto__ = bmw`.
2. The value of `__proto__` can be either an object or `null`. Other types are ignored.

_Note:_

> `__proto__` is a historical getter/setter for `[[Prototype]]`  
> The `__proto__` property is a bit outdated. When it was created, it was considered that `__proto__` must be supported only by browsers. But in fact, all environments support `__proto__`. Modern JS suggest that we should use `Object.getPrototypeOf()` and `Object.setPrototypeOf()` functions to get/set the prototype.

_Note:_ The prototype is used only for reading properties. Write/delete operations working directly on object:

```javascript
const car = {
    hasEngine = true,
    drive() {
        console.log('Engine started!')
    }
}

const bmw = {
    mark: 'BMW',
    __proto__: car;
}

bmw.drive = function() {
    console.log('BMW started driving!');
}
```

In the code above the `drive()` method of `car` will not be rewritten, but instead a `drive()` method will be created in `bmw` object.
