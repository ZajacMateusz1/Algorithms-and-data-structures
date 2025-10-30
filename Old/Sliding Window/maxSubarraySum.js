const array = [100, 200, 300, 400];
const number = 2;
function maxSubarraySum(arr, number) {
  // Pierwsza pętla liczy sumę 3 pierwszych liczb, potem nastę pna dodaje nową liczbę i odejmuje całą
  if (arr.length < number) {
    return null;
  }
  let max = -Infinity;
  let temp = 0;
  for (let i = 0; i < number; i++) {
    temp += arr[i];
  }
  max = temp;
  let i = 0;
  let j = number;
  while (j < arr.length) {
    temp -= arr[i];
    temp += arr[j];
    max = Math.max(max, temp);
    i++, j++;
  }
  return max;
}
console.log(maxSubarraySum(array, number));
