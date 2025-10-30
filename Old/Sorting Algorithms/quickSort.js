const arr = [2, 1, 7, 5, 3, 4, 8, 6, 0];
function pivotHelper(arr, comparator, start, end) {
  let index = start;
  for (let i = start + 1; i <= end; i++) {
    if (comparator(arr[start], arr[i]) > 0) {
      index++;
      [arr[i], arr[index]] = [arr[index], arr[i]];
    }
  }
  [arr[start], arr[index]] = [arr[index], arr[start]];
  return index;
}
function quickSort(
  arr,
  comparator = (a, b) => {
    return a - b;
  },
  start = 0,
  end = arr.length - 1
) {
  if (start < end) {
    const pivot = pivotHelper(arr, comparator, start, end);
    quickSort(arr, comparator, pivot + 1, end);
    quickSort(arr, comparator, start, pivot - 1);
  }
  return arr;
}
console.log(quickSort(arr));
// function pivotHelper(arr, start, end) {
//   let pivot = arr[start];
//   let indexToSwap = start;
//   for (let i = start + 1; i <= end; i++) {
//     if (pivot > arr[i]) {
//       indexToSwap++;
//       [arr[indexToSwap], arr[i]] = [arr[i], arr[indexToSwap]];
//     }
//   }
//   [arr[indexToSwap], arr[start]] = [arr[start], arr[indexToSwap]];
//   return indexToSwap;
// }
// function quickSort(arr, start = 0, end = arr.length - 1) {
//   if (start < end) {
//     const pivot = pivotHelper(arr, start, end);
//     quickSort(arr, start, pivot - 1);
//     quickSort(arr, pivot + 1, end);
//   }
//   return arr;
// }
