// Write a function which calculates average age of users.

const users = [
  {
    username: 'Yuri Gagarin',
    lang: 'ru',
    age: 56,
  },
  {
    username: 'Nil Armstrong',
    lang: 'ENG',
    age: 54,
  },
];

const getAverageAge = (users) => {
  // Get the sum
  const sumOfAges = users.reduce((cur, next) => cur.age + next.age);

  // Return the average
  return sumOfAges / users.length;
};

console.log(getAverageAge(users)); // 55
