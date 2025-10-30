function reverse(string) {
  if (!string.length) return [];
  let answer = "";
  answer += string[string.length - 1];
  return answer.concat(reverse(string.substring(0, string.length - 1)));
}
console.log(reverse("awesome"));
