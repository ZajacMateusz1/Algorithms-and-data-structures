const isOdd = (val) => val % 2 !== 0;
function someRecursive(arr, callback) {
  if (!arr.length) return false;
  if (callback(arr[0])) return true;
  return someRecursive(arr.slice(1), callback);
}
console.log(someRecursive([2, 2, 2, 4], isOdd));
