// Write a function which remove users with language equals to 'ru'.

const users = [
  {
    username: 'Yuri Gagarin',
    lang: 'ru',
  },
  {
    username: 'Nil Armstrong',
    lang: 'ENG',
  },
  {
    username: 'Arthur Gyulabyan',
    lang: 'ARM',
  },
];

const filterUsers = (users) => {
  const filtered = users.filter((el) => el.lang !== 'ru');

  return filtered;
};

console.log(filterUsers(users));
