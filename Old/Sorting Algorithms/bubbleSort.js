function bubbleSort(arr, comparator) {
  if (typeof comparator !== "function") {
    comparator = (a, b) => {
      return a - b;
    };
  }
  for (let i = arr.length - 1; i > 0; i--) {
    let swapped = false;
    for (let j = 0; j < i; j++) {
      if (comparator(arr[j], arr[j + 1]) > 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}
// function bubbleSort(arr) {
//   for (let i = arr.length - 1; i > 0; i--) {
//     let swapped = false;
//     for (let j = 0; j < i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         swapped = true;
//       }
//     }
//     if (!swapped) break;
//   }
//   return arr;
// }
console.log(bubbleSort([67, 67, 67, 1977, 4, 3, 2, 1]));
