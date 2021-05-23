// Implementation of Function.prototype.bind() without call()

Function.prototype.myBind = function (context, ...args) {
    const thisHolder = this; // In order not to lose "this" in the returned function.

    return function (...fnArgs) {
        const key = 'tempFunc';
        context[key] = thisHolder;
        let result = context[key](...args, ...fnArgs);
        delete context[key];
        return result;
    };
};

function changeInfo(fullName, age) {
    this.fullName = fullName;
    this.age = age;
    return this.fullName;
}

const user = {
    fullName: 'Arthur Gyulabyan',
    age: 22,
};

const bound = changeInfo.myBind(user, 'Han Solo');
console.log(bound(38)); // "Han Solo"

console.log(user);
