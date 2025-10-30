function findAllDuplicates(arr) {
  const obj = {};
  const answer = [];
  for (let int of arr) {
    obj[int] = (obj[int] || 0) + 1;
    if (obj[int] >= 2) {
      answer.push(int);
    }
  }
  return answer;
}
console.log(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
