// Print the pattern

const arr = [[], [], [], [], []];

/*
// Solution by 2 for loops
let counter = 0;

for (let i = 1; i < 16; ) {
  for (let j = counter; j < arr.length; j++) {
    arr[j].push(i);
    i++;
  }
  counter++;
}

console.log(arr);
for (let i = 0; i < arr.length; i++) {
  console.log(...arr[i]);
}
*/

/*
//  Solution by while and for loops
let i = 1;
let counter = 0;

while (i < 16) {
  for (let j = counter; j < arr.length; j++) {
    arr[j].push(i);
    i++;
  }

  counter++;
}
*/

// Function will draw a pyramid according to given level count.
function drawPyramid(levelCount) {
  const arr = [];

  for (let i = 0; i < levelCount; i++) {
    arr.push([]);
  }

  let counter = 0;

  for (let i = 1; i <= ((1 + levelCount) / 2) * levelCount; ) {
    for (let j = counter; j < arr.length; j++) {
      arr[j].push(i);
      i++;
    }
    counter++;
  }

  for (let i = 0; i < arr.length; i++) {
    console.log(...arr[i]);
  }
}

drawPyramid(8);
