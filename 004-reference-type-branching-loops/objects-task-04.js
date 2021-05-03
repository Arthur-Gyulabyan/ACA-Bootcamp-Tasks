// Multiply numeric property values by 2

const menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};

const rectangle = {
  width: 150,
  height: 100,
  backgroundColor: 'Black',
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      // Checking if the property is a number
      obj[key] *= 2;
    }
  }
}

multiplyNumeric(menu);
multiplyNumeric(rectangle);

console.log(menu);
console.log(rectangle);
