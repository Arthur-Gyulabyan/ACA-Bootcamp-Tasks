function add_suffix(suffix) {
  const wordWithSuffix = function (word) {
    return word + suffix;
  };

  return wordWithSuffix;
}

add_ly = add_suffix('ly');

console.log(add_ly('hopeless')); // "hopelessly"
console.log(add_ly('total')); // "totally"

add_less = add_suffix('less');

console.log(add_less('fear')); // "fearless"
console.log(add_less('ruth')); // "ruthless"
