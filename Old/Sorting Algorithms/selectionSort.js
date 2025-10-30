function strComp(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}
function selectionSort(arr, comparator) {
  if (typeof comparator !== "function") {
    comparator = function (a, b) {
      return a - b;
    };
  }
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (comparator(arr[min], arr[j]) > 0) {
        min = j;
      }
    }
    [arr[min], arr[i]] = [arr[i], arr[min]];
  }
  return arr;
}
console.log(
  selectionSort(["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"], strComp)
);
// function selectionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let min = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[min]) {
//         min = j;
//       }
//     }
//     if (min !== i) {
//       [arr[i], arr[min]] = [arr[min], arr[i]];
//     }
//   }
//   return arr;
// }
