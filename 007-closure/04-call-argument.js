const printAfter = (arg) => {
  console.log('Hello World!');
  arg();
};

const print = () => console.log('Elon Musk');

printAfter(print);
// "Hello World!"
// "Elon Musk"
