// Find the third angle

function calcThirdAngle(firstAngle, secondAngle) {
  if (firstAngle + secondAngle >= 180) {
    return 'Triangle with given angels does not exist.';
  }

  return 180 - firstAngle - secondAngle;
}

console.log(calcThirdAngle(90, 45)); // 45
console.log(calcThirdAngle(12, 65)); // 103
console.log(calcThirdAngle(120, 66)); // Does not exist
