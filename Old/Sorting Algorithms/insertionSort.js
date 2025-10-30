function insertionSort(arr, comparator) {
  if (typeof comparator !== "function") {
    comparator = function (a, b) {
      return a - b;
    };
  }
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    let j = i - 1;
    while (j >= 0 && comparator(currentValue, arr[j]) < 0) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentValue;
  }
  return arr;
}
console.log(insertionSort([67, 67, 67, 1977, 4, 3, 2, 1, 9]));
//   function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//       const currentValue = arr[i];
//       let j = i - 1;
//       while (j >= 0 && arr[j] > currentValue) {
//         arr[j + 1] = arr[j];
//         j--;
//       }
//       arr[j + 1] = currentValue;
//     }
//     return arr;
//   }
// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     for (let j = i; j > 0; j--) {
//       if (arr[j - 1] > arr[j]) {
//         [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
//       } else break;
//     }
//   }
//   return arr;
// }
