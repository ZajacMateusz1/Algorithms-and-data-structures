function getDigit(number, position) {
  return Math.floor(Math.abs(number) / Math.pow(10, position)) % 10;
}
function digitCount(number) {
  if (number === 0) return 1;
  return Math.floor(Math.log10(Math.abs(number))) + 1;
}
function mostDigit(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(digitCount(arr[i]), max);
  }
  return max;
}
console.log(mostDigit([123, 4, 5, 44444, 21234, 123456789]));
