function mergeArrays(arr1, arr2, comparator) {
  if (typeof comparator !== "function") {
    comparator = function (a, b) {
      return a - b;
    };
  }
  let i = 0,
    j = 0,
    answer = [];
  while (i < arr1.length && j < arr2.length) {
    if (comparator(arr1[i], arr2[j]) > 0) {
      answer.push(arr2[j]);
      j++;
    } else {
      answer.push(arr1[i]);
      i++;
    }
  }
  while (i < arr1.length) {
    answer.push(arr1[i]);
    console.log(i);
    i++;
  }
  while (j < arr2.length) {
    answer.push(arr2[j]);
    j++;
  }
  return answer;
}
console.log(mergeArrays([1, 4, 6], [2, 3, 10, 12]));
//   function mergeArrays(arr1, arr2) {
//     let i = 0,
//       j = 0,
//       answer = [];
//     while (i < arr1.length && j < arr2.length) {
//       if (arr1[i] < arr2[j]) {
//         answer.push(arr1[i]);
//         i++;
//       } else if (arr2[j] < arr1[i]) {
//         answer.push(arr2[j]);
//         j++;
//       } else {
//         answer.push(arr1[i]);
//         answer.push(arr2[j]);
//         j++;
//         i++;
//       }
//     }
//     while (i < arr1.length) {
//       answer.push(arr1[i]);
//       i++;
//     }
//     while (j < arr2.length) {
//       answer.push(arr2[j]);
//       j++;
//     }
//     return answer;
//   }
