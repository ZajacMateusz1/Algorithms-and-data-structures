const arr = [-3, 0, 2, 3, 5];
function sumZero(arr) {
  const answer = [];
  let j = arr.length - 1;
  let i = 0;
  while (i < j) {
    if (arr[i] + arr[j] === 0) {
      answer.push(arr[i], arr[j]);
      break;
    } else if (arr[i] + arr[j] < 0) {
      i++;
    } else {
      j--;
    }
  }
  return answer.length > 1 ? answer : undefined;
}
console.log(sumZero(arr));
