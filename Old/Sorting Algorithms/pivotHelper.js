const array = [9, 5, 4, 7, 2, 8, 1, 3, 6, 0];
function pivotHelper(arr, comparator, start = 0, end = arr.length - 1) {
  if (typeof comparator !== "function") {
    comparator = function (a, b) {
      return a - b;
    };
  }
  let index = start;
  for (let i = start + 1; i <= end; i++) {
    if (comparator(arr[start], arr[i]) > 0) {
      index++;
      [arr[index], arr[i]] = [arr[i], arr[index]];
    }
  }
  [arr[start], arr[index]] = [arr[index], arr[start]];
  return index;
}
console.log(pivotHelper(array, null));
// function pivotHelper(arr) {
//   let i = 1;
//   let j = 1;
//   let pivot = arr[0];
//   while (i < arr.length) {
//     if (pivot >= arr[i]) {
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//       j++;
//     }
//     i++;
//   }
//   j--;
//   [arr[0], arr[j]] = [arr[j], arr[0]];
//   return j;
// }
