// Implementation of apply()

// Using call()
Function.prototype.myApply = function (context, argsArr) {
    return this.call(context, ...argsArr);
};

function getInfo(...args) {
    console.log(`My name is ${this.fullName}`, ...args);
    return this.fullName;
}

const user = {
    fullName: 'Arthur Gyulabyan',
    age: 22,
};

console.log(getInfo.myApply(user, [1, 2, 3]));