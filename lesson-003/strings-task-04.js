// Extract the money

function extractCurrencyValue(valueStr) {
  return +valueStr.slice(1);
  // The slice() method will be called first, 'cause "." operator has higher precedence than unary plus operator.
}

console.log(extractCurrencyValue('$320')); // 320
