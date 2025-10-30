//przyjmuje posortowaną tablicę i zwraca liczbę unikalnych elementów, liczby mogą być ujemne
// kiedy tablica pusta, to undefined
// przelatuję pętlą po tablicy, robię dwa wskaźniki od lewej, jeżeli przyjmą te same wartości nie robię push
const arr = [-1, -1, 1, 1, 1, 2, 3, 4, 4, 4, 6, 6, 6, 8, 9];
function countUniqueValues(arr) {
  if (!arr.length) return undefined;
  let i = 0,
    j = 1;
  while (j < arr.length) {
    if (arr[i] === arr[j]) {
      j++;
    } else {
      i++;
      arr[i] = arr[j];
    }
  }
  return ++i;
}
//   function countUniqueValues(arr) {
//     if (!arr.length) return undefined;
//     let i = 0,
//       j = 1;
//     const answer = [];
//     answer.push(arr[i]);
//     while (j < arr.length) {
//       if (arr[i] !== arr[j]) {
//         answer.push(arr[j]);
//       }
//       i++, j++;
//     }
//     return answer;
//   }
console.log(countUniqueValues(arr));
