# DATE API / Getter / Setter / Property Descriptors

## Property Descriptors

Object properties have three special attributes or so called flags, which can be either `true` or `false`:

-   _writable_: specifies if the value of the property can be changed or not.
-   _enumerable_: specifies if the property is listed in loops or not.
-   _configurable_: specifies if the property can be deleted and these attributes can be changed or not.

When we create a property in the usual way, all descriptors are set to `true`. We can update the descriptors of existing property or create new property with given value and flags by using the `Object.defineProperty()` method.  
The syntax is:

> Object.defineProperty(object, property, descriptors)

_Note: If the descriptor is not specified in `Object.defineProperty()` it will be `false` by default._

There is a method that allows us to define many properties at once - `Object.defineProperties()`.  
The syntax is:

> Object.defineProperties(object, descriptors)

Examples:

```javascript
let user = {
    name: 'Arthur',
};

// Creating new property
Object.defineProperty(user, 'age', {
    value: 23,
    writable: false,
    configurable: false,
});

// Creating more than one properties at once
Object.defineProperties(user, {
    job: { value: 'programmer', writable: false },
    email: { value: 'abc@gmail.com', writable: false },
});
```

To get the property descriptors, we can ues the `Object.getOwnPropertyDescriptor(obj, propertyName)` method.  
To get all property descriptors at once, we can use the `Object.getOwnPropertyDescriptors(obj) method.

### Sealing an object globally

We can limit access to the whole object by using the following methods:

-   `Object.preventExtensions(obj)`  
    Prevents addition of new properties to the object.

-   `Object.seal(obj)`  
    Prevents addition of new properties to the object and sets `configurable: false` for all existing properties.

-   `Object.freeze(obj)`  
     Prevents addition of new properties to the object and sets `configurable: false` and `writable: false` for all existing properties.

We can determine the status of an object by using the following predicate methods:

-   `Object.isExtensible(obj)`  
    Determines if an object is extensible (new properties can be added).

-   `Object.isSealed(obj)`  
    Determines if an object is sealed. Returns `true` if adding/removing properties is forbidden, and all existing properties have `configurable: false`.

-   `Object.isFrozen(obj)`  
    Determines if an object is frozen. Returns `true` if adding/removing/changing properties is forbidden, and all current properties are `configurable: false`, `writable: false`.
