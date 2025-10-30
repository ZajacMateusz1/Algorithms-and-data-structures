const arr = [6, 5, 4, 7, 2];
const n = -1;
// Podejście Multiple Pointers
function findPair(arr, n) {
  arr.sort((a, b) => a - b);
  let i = 0,
    j = arr.length - 1;
  while (i < j) {
    const number = arr[j] - arr[i];
    if (number === n || number === -n) {
      return true;
    } else if (Math.abs(number) > Math.abs(n)) j--;
    else i++;
  }
  return false;
}

//   //Podejście frequencyCounter
//     function findPair(arr, n) {
//       const values = new Set();
//       // przechodzę przez tablicę pętlą i sprawdzam czy już widziałem liczba + n lub liczba - n, jeśli tak to prawda
//       for (let element of arr) {
//         if (values.has(element + n) || values.has(element - n)) {
//           return true;
//         } else {
//           values.add(element);
//         }
//       }
//       return false;
//     }
console.log(findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1));
