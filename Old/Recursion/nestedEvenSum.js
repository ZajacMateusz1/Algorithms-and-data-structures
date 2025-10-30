function nestedEvenSum(obj) {
  let sum = 0;
  function findEvenNumber(element) {
    for (const value of Object.values(element)) {
      if (typeof value === "object") {
        findEvenNumber(value);
      } else if (typeof value === "number" && value % 2 === 0) {
        sum += value;
      }
    }
  }
  findEvenNumber(obj);
  return sum;
}
console.log(
  nestedEvenSum(
    (obj1 = {
      outer: 2,
      obj: {
        inner: 2,
        otherObj: {
          superInner: 2,
          notANumber: true,
          alsoNotANumber: "yup",
        },
      },
    })
  )
);
