const arr1 = [1, 2, 3, 1, 5];
const arr2 = [4, 9, 1, 25, 1];
function sums(arr1, arr2) {
  const obj1 = {};
  const obj2 = {};
  for (let element of arr1) {
    obj1[element] = (obj1[element] || 0) + 1;
  }
  for (let element of arr2) {
    obj2[element] = (obj2[element] || 0) + 1;
  }
  for (let key of Object.keys(obj1)) {
    if (!(obj1[key] == obj2[key ** 2])) {
      return false;
    }
  }
  return true;
}
console.log(sums(arr1, arr2));
// najpierw dodam elementy do obiektu
// zrobię jeszcze jedną pętlę, która sprawdzi czy ilość wystąpień liczb i ich kwadratów się zgadza

// function sums(arr1, arr2) {
//   if (arr1.length !== arr2.length || arr1.length === 0 || arr2.length === 0) {
//     return false;
//   }
//   for (let i = arr1.length - 1; i >= 0; i--) {
//     for (let j = arr2.length - 1; j >= 0; j--) {
//       if (arr1[i] * arr1[i] === arr2[j]) {
//         arr1.splice(i, 1);
//         arr2.splice(j, 1);
//       }
//     }
//   }
//   if (arr1.length === arr2.length && arr1.length === 0) {
//     return true;
//   }
//   return false;
// }
