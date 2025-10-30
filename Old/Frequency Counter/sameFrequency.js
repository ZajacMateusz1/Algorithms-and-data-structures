const number1 = 123;
const number2 = 321;
function sameFrequency(num1, num2) {
  if (num1 <= 0 || num2 <= 0) {
    return "Liczby muszą być większe od 0 ";
  }
  num1 = num1.toString();
  num2 = num2.toString();
  const obj1 = {};
  for (let char of num1) {
    obj1[char] = (obj1[char] || 0) + 1;
  }
  // teraz iteruję po drugiej liczbie i odejmuje wartości
  for (let char of num2) {
    obj1[char] = (obj1[char] || 0) - 1;
  }
  // jeżeli wartość równa się 0 to zwracam true, jeśli nie to zwracam false :)
  console.log(obj1);
  for (let value of Object.values(obj1)) {
    if (value !== 0) {
      return false;
    }
  }
  return true;
}
console.log(sameFrequency(number1, number2));
