// Implementation of apply() without call()

Function.prototype.myApply = function (context, argsArr) {
    const key = 'tempFunc';
    context[key] = this; // Temporarily creating method in object
    let result = context[key](...argsArr);
    delete context[key]; // Delete the method
    return result;
};

function changeInfo(...args) {
    this.fullName = args[0];
    this.age = args[1];
    return 'aa';
}

let user = {
    fullName: 'Arthur Gyulabyan',
    age: 22,
};

changeInfo.myApply(user, ['Tony Stark', 44]);
console.log(user);
