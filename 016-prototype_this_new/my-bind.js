// Implementation of Function.prototype.bind()

Function.prototype.myBind = function (context, ...contextArgs) {
    let thisHolder = this; // In order not to lose "this" in the returned function.

    return function (...args) {
        return thisHolder.call(context, ...[...contextArgs, ...args]);
    };
};

const user = {
    fullName: 'Arthur Gyulabyan',
    age: 22,
};

function getInfo(birthYear, job) {
    console.log(
        `My name is ${this.fullName}. I was born in ${birthYear}. I'm working as a ${job}.`
    );

    return this.fullName;
}

const bound = getInfo.myBind(user, 1998);

bound('programmer');
