// Hello, object

const user = {}; // Creating an empty object
user.name = 'John'; // Adding new property
user.surname = 'Smith'; // Another property
user.name = 'Pete'; // Changing the value of property
delete user.name; // Removing property

console.log(user); // Output -> { surname: 'Smith' }
