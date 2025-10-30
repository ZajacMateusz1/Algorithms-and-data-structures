const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};
function collectStrings(obj) {
  let answer = [];
  for (const value of Object.values(obj)) {
    if (value.toString() === "[object Object]") {
      answer = answer.concat(collectStrings(value));
    } else if (typeof value === "string") {
      answer.push(value);
    }
  }
  return answer;
}
console.log(collectStrings(obj));
