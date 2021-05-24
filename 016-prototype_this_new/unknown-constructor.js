// javascript.info | F.prototype - Task 2 - Create an object with the same constructor

const constructorFunc = function (name) {
    this.name = name;
    this.a = 10;
    this.b = 20;
};

// Uncomment to see the difference
// constructorFunc.prototype = {}; // Will cause the loss of constructor

const obj = new constructorFunc('Arthur');
console.log(obj);

const obj2 = new obj.constructor('Arthur');
console.log(obj2);
