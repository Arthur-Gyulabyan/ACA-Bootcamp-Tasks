// Clean up phone number, depending on rules

function validatePhone(phoneNumStr) {
  const spaceRemoved = phoneNumStr.replace(/[ ]/g, ''); // String without spaces
  const digits = phoneNumStr.replace(/\D/g, ''); // Only digits

  if (
    (spaceRemoved.length === 11 && spaceRemoved[0] === '+' && digits.length === 10) ||
    (spaceRemoved.length === 10 && digits.length === 10)
  ) {
    return digits;
  } else {
    return 'Bad number';
  }
}

console.log(validatePhone('+333 1221 333')); // "3331221333"
console.log(validatePhone('455678')); // "Bad number"
console.log(validatePhone('339 5656888')); // "3395656888"
console.log(validatePhone('+0008989562')); // "0008989562"
console.log(validatePhone('45231489562')); // "Bad Number"
console.log(validatePhone('123+2356897452')); // "Bad Number"
