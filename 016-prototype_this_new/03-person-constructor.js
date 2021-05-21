// Create Person constructor function

const Person = function (name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
};

Person.prototype.eat = function (food) {
    const edible = [
        'burger',
        'pizza',
        'pasta',
        'apple',
        'carrot',
        'kebab',
        'cheese',
        'milk',
        'risotto',
    ];

    if (edible.indexOf(food) !== -1 && this.stomach.length < 11) {
        this.stomach.push(food);
    }
};

Person.prototype.poop = function () {
    this.stomach = [];
};

Person.prototype.toString = function () {
    return `${this.name}, ${this.age}`;
};

const frodo = new Person('Frodo', 24);
const gandalf = new Person('Gandalf', 100);

frodo.eat('burger');
frodo.eat('cheese');
frodo.eat('table'); // not edible
console.log(frodo);
frodo.poop(); // Empty stomach :)
console.log(frodo);
console.log(frodo.toString()); // "Frodo, 24"
