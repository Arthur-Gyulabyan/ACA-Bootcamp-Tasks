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

// Calculate average using only reduce
const getAverageAgeV2 = (users) => {
  const average = users.reduce((acc, currentUser, index, arr) => {
    acc += currentUser.age;

    // When reduce reaches the last user, return the average. 
    if (index === arr.length - 1) {
      return acc / arr.length;
    }

    return acc;
  }, 0);

  return average;
};

console.log(getAverageAgeV2(users)); // 55
