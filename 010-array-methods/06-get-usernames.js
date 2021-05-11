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

const mapper = el => el.username;

const getUserNames = (users) => {

  return users.map(mapper);
};

console.log(getUserNames(users)); // ['Yuri Gagarin', 'Nil Armstrong']
