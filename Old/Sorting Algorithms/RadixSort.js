const arr = [1, 6, 5, 3, 123, 8, 997, 2, 998, 4, 3, 999, 7, 1234];
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
function getNumberLength(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
function findLongestNumber(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(getNumberLength(arr[i]), max);
  }
  return max;
}
function radixSort(arr) {
  const answer = [];
  for (let i = 0; i < findLongestNumber(arr); i++) {
    const buckets = Array.from({ length: 10 }, () => []);
    arr.forEach((element) => {
      buckets[getDigit(element, i)].push(element);
    });
    arr = [].concat(...buckets);
  }
  return arr;
}
console.log(radixSort(arr));
