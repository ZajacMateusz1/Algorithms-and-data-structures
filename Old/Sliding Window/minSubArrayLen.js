const arrray = [1, 2, 4];
const target = 6;

function minSubArrayLen(arr, target) {
  // na pewno przechodzę pętlą i dodaje dane do zmiennej
  // dodaję kolejne elementy do sumy, jeśli ją przeskoczą to zaczynam odejmować
  let temp = 0;
  let i = 0;
  let j = 0;
  let answer = Infinity;
  while (i < arr.length) {
    console.log(arr[j], arr[i]);
    temp += arr[i];
    i++;
    while (temp >= target) {
      answer = Math.min(answer, i - j);
      temp -= arr[j];
      j++;
    }
  }
  return answer === Infinity ? 0 : answer;
}
// 2+3+1+2-2+4
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
