// *** While and do while task ***

const numbers = [1, 2, 3, 4, 5];

// We have the following code. We need to rewrite it with while and do while.
for (let i = 0; i < numbers.length; i++) {
  console.log('for', i, numbers[i]);
}

let i = 0;

/*
// while
while (i !== numbers.length) {
    console.log('for', i, numbers[i]);
    i++;
}
*/

// do while
do {
  console.log('for', i, numbers[i]);
  i++;
} while (i !== numbers.length);
