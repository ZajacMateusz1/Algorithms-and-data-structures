const array = [1, 0];
function countZeroes(arr) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);
  let counter = 0;
  if (arr[start] === 0) return arr.length;
  while (start <= end) {
    if (arr[mid] === 0 && arr[mid - 1] === 1) {
      counter = arr.length - mid;
      break;
    } else if (arr[mid] === 0) {
      end = mid + 1;
      mid = Math.floor((start + end) / 2);
    } else {
      start = mid + 1;
      mid = Math.floor((start + end) / 2);
    }
  }
  return counter;
}
console.log(countZeroes(array));
