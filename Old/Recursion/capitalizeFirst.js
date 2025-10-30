function capitalizeFirst(arr) {
  if (arr.length === 0) return [];
  let letter = arr[0][0].toUpperCase();
  return [letter + arr[0].slice(1)].concat(capitalizeFirst(arr.slice(1)));
}
console.log(capitalizeFirst(["car", "taco", "banana"]));
