// Check validity of password

function checkValidity(pass) {
  if (
    pass.length > 5 &&
    pass.length < 17 &&
    pass.search(/[a-z]/) !== -1 &&
    pass.search(/[A-Z]/) !== -1 &&
    pass.search(/[0-9]/) !== -1 &&
    pass.search(/[$#@]/) !== -1
  ) return 'Valid';

  return 'Invalid';
}

console.log(checkValidity('1aA#')); // Invalid
console.log(checkValidity('Valid1998#')); // Valid
