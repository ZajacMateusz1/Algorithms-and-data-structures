function constructNote(message, letters) {
  const obj = {};
  for (let char of letters) {
    obj[char] = (obj[char] || 0) + 1;
  }
  for (let char of message) {
    obj[char] = (obj[char] || 0) - 1;
    if (obj[char] < 0) {
      return false;
    }
  }
  return true;
}
console.log(constructNote("mati", "mmati"));
