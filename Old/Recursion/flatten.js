function flatten(arr) {
  let answer = [];
  if (!arr.length) return answer;
  function check(arr) {
    if (!arr.length) return;
    if (Array.isArray(arr[0])) {
      check(arr[0]);
    } else {
      answer.push(arr[0]);
    }
    return check(arr.slice(1));
  }
  check(arr);
  return answer;
}
console.log(flatten([[[[1]]], 2, 3, [4, 5], 6, 7, [8, 9]]));
