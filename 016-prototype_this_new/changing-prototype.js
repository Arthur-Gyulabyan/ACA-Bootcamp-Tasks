// javascript.info | F.prototype - Task 1 - changing prototype

// We have the following code.
function Rabbit() {}

Rabbit.prototype = {
    eats: true,
};

let rabbit = new Rabbit();

// Uncomment appropriate lines to see the result
/*1*/ Rabbit.prototype = {}; // Does not affect the existing ones.
// /*2*/Rabbit.prototype.eats = false;
// /*3*/delete rabbit.eats;
// /*4*/delete Rabbit.prototype.eats;

/*1*/ console.log(rabbit.eats); // true
// /*2*/console.log(rabbit.eats); // false
// /*3*/console.log(rabbit.eats); // true
// /*4*/console.log(rabbit.eats); // undefined
