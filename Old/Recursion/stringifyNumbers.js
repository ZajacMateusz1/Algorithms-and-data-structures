let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};
function stringifyNumbers(obj) {
  let answer = {};
  for (const [key, value] of Object.entries(obj)) {
    if (value.toString() === "[object Object]") {
      answer[key] = stringifyNumbers(value);
    } else if (typeof value === "number") {
      answer[key] = value.toString();
    } else answer[key] = value;
  }
  return answer;
}
console.log(stringifyNumbers(obj));
