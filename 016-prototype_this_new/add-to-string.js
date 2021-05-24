// Add toString() to dictionary. toString() should not show up in for..in over the object.

let dictionary = Object.create(null);

dictionary.apple = 'Apple';
dictionary.__proto__ = 'test';

Object.defineProperty(dictionary, 'toString', {
    value() {
        let str = Object.keys(this).join();

        return str;
    },
});

for (let key in dictionary) {
    console.log(key);
}

console.log(dictionary.toString()); // apple,__proto__
