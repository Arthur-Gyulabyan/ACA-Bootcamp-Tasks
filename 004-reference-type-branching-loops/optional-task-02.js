// Convert base-2 number to base-10

function binaryToDecimal(binaryNum) {
  // Get reversed array of binary number digits
  const digitsArr = binaryNum.toString().split('').reverse();

  let decimalNum = 0;

  // Convert binary to decimal
  for (let i = 0; i < digitsArr.length; i++) {
    if (Number(digitsArr[i]) > 1) {
      return 'Number is not binary.';
    }

    decimalNum += Number(digitsArr[i]) * 2 ** i;
  }
  return decimalNum;
}

console.log(binaryToDecimal(101110)); // 46
console.log(binaryToDecimal(101)); // 5
console.log(binaryToDecimal(10201)); // "Number is not binary."
