// Write a function which returns array of lengths of user names

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

const getLengthOfStr = el => el.username.length; // mapper

const getUsernameLengths = users => users.map(getLengthOfStr);

console.log(getUsernameLengths(users)); // [12, 13]
