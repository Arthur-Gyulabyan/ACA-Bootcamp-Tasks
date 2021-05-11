// Write a function which returns array of usernames using map

const users = [
  {
    username: 'Yuri Gagarin',
    lang: 'ru',
  },
  {
    username: 'Nil Armstrong',
    lang: 'ENG',
  },
];

const getUserNames = (users) => {
  const mapper = el => el.username;

  return users.map(mapper);
};

console.log(getUserNames(users)); // ['Yuri Gagarin', 'Nil Armstrong']
