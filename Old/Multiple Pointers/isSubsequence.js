const string1 = "abc";
const string2 = "acb";
function isSubsequence(string1, string2) {
  if (string1.length === 0) return false;
  string1 = string1.toLowerCase();
  string2 = string2.toLowerCase();
  let i = 0,
    j = 0;
  while (i <= string1.length - 1) {
    if (string1[i] === string2[j]) {
      i++;
    }
    j++;
    if (j === string2.length - 1) return false;
  }
  return true;
}
console.log(isSubsequence(string1, string2));
