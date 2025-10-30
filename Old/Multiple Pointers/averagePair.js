const arr = [1, 2, 3];
const target = 2.5;
function averagePair(arr, target) {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    const average = (arr[i] + arr[j]) / 2;
    if (average === target) {
      return true;
    } else if (target > average) {
      i++;
    } else j--;
  }
  return false;
}
console.log(averagePair(arr, target));
