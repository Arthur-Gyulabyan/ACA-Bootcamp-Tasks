// Write a function which filters object by field.

const users = [
  {
    username: 'Yuri Gagarin',
    lang: 'ru',
    isAstronaut: true,
  },
  {
    username: 'Nil Armstrong',
    lang: 'ENG',
    isAstronaut: true,
  },
  {
    username: 'Elon Musk',
    isAstronaut: false,
  },
];

const filterByField = (arrOfObjects, field) => arrOfObjects.filter(el => el[field]);
// If "el[field]" is true, then element will be included.

console.log(filterByField(users, 'isAstronaut'));
