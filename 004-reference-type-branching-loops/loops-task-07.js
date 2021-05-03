// Output prime numbers

let num = 100;

for (let i = 2; i <= num; i++) {
  let bool = true;

  for (let j = 2; j <= i / 2; j++) {
    if (i % j === 0) {
      bool = false;
      break;
    }
  }

  if (bool) {
    console.log(i);
  }
}
