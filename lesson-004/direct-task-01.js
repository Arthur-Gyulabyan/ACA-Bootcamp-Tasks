// Given a number. Print “odd” if the number is odd and “even” if it's even.

const number = prompt('Please, insert a number!');

if (number === null || number === '' || +number !== +number) {
  // Check for non number inputs or cancel
  console.log('You inserted non number value or canceled.');
} else {
  number % 2 === 0 ? console.log('Even') : console.log('Odd');
}
