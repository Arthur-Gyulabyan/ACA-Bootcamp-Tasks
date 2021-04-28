let firstNum = prompt("Enter any number");
let secondNum = prompt("Enter any number");

// Checking for 'esc' or cancel.
if (firstNum === null || secondNum === null) {
  alert("Canceled");
  // Checking for non number inputs
} else if (
  +firstNum !== +firstNum ||
  +secondNum !== +secondNum ||
  firstNum === "" ||
  firstNum === ""
) {
  alert("At least one of your entered values is not a number");
} else {
  alert(+firstNum + +secondNum);
}
