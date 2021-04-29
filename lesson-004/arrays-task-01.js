// Is array copied?

let fruits = ['Apples', 'Pear', 'Orange'];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push('Banana');

console.log(fruits.length); // Will print 4, 'cause both "fruits" and "shoppingCart" refer to the same array.
