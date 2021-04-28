const userName = prompt("Please, insert your name!");

if (userName === "Admin") {
  const password = prompt("Please, insert your password!");

  if (password === "TheMaster") {
    alert("Welcome!");
  } else if (password === null) {
    alert("Canceled");
  } else {
    alert("Wrong password!");
  }
} else if (userName === null) {
  alert("Canceled");
} else {
  alert("I don't know you!");
}
