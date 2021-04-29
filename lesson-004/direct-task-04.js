// Multiple of 3, 5 or 7

function checkForMultiple(num) {
  if (num % 3 === 0 && num % 5 === 0 && num % 7 === 0) {
    console.log(`${num} is a multiple of 3, 5 and 7`);
  } else if (num % 3 === 0 && num % 5 === 0) {
    console.log(`${num} is a multiple of 3 and 5`);
  } else if (num % 3 === 0 && num % 7 === 0) {
    console.log(`${num} is a multiple of 3 and 7`);
  } else if (num % 5 === 0 && num % 7 === 0) {
    console.log(`${num} is a multiple of 5 and 7`);
  } else if (num % 3 === 0) {
    console.log(`${num} is a multiple of 3`);
  } else if (num % 5 === 0) {
    console.log(`${num} is a multiple of 5`);
  } else if (num % 7 === 0) {
    console.log(`${num} is a multiple of 7`);
  } else {
    console.log(`${num} is NOT a multiple of 3, 5 and 7`);
  }
}

checkForMultiple(15); // 15 is a multiple of 3 and 5
checkForMultiple(121); // 121 is not a multiple of 3, 5 and 7
checkForMultiple(456); // 456 is a multiple of 3
checkForMultiple(122); // 122 is NOT a multiple of 3, 5 and 7
checkForMultiple(0); // 0 is a multiple of 3, 5 and 7
