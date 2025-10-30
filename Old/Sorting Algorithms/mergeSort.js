function strComp(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}
function merge(arr1, arr2, comparator) {
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
    i++;
  }
  while (j < arr2.length) {
    answer.push(arr2[j]);
    j++;
  }
  return answer;
}
function mergeSort(arr, comparator) {
  if (arr.length <= 1) return arr;
  if (typeof comparator !== "function") {
    comparator = function (a, b) {
      return a - b;
    };
  }
  const mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid), comparator);
  let right = mergeSort(arr.slice(mid), comparator);
  return merge(left, right, comparator);
}
console.log(
  mergeSort(["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"], strComp)
);
// function mergeArrays(arr1, arr2) {
//   let i = 0,
//     j = 0,
//     answer = [];
//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//       answer.push(arr1[i]);
//       i++;
//     } else if (arr2[j] < arr1[i]) {
//       answer.push(arr2[j]);
//       j++;
//     } else {
//       answer.push(arr1[i]);
//       answer.push(arr2[j]);
//       i++, j++;
//     }
//   }
//   while (i < arr1.length) {
//     answer.push(arr1[i]);
//     i++;
//   }
//   while (j < arr2.length) {
//     answer.push(arr2[j]);
//     j++;
//   }
//   return answer;
// }
// function mergeSort(arr) {
//   if (arr.length <= 1) return arr;
//   const mid = Math.floor(arr.length / 2);
//   let left = mergeSort(arr.slice(0, mid));
//   let right = mergeSort(arr.slice(mid));
//   return mergeArrays(left, right);
// }
