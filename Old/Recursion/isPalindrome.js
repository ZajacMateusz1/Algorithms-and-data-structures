function isPalindrome(string) {
  if (string.length === 1 || string.length === 0) return true;
  if (string[0] !== string[string.length - 1]) return false;
  return isPalindrome(string.slice(1, string.length - 1));
}
//   function isPalindrome(string) {
//     let left = 0,
//       right = string.length - 1,
//       answer = true;
//     function check(left, right) {
//       if (left >= right) return answer;
//       if (string[left] !== string[right]) {
//         answer = false;
//       }
//       return check(left + 1, right - 1);
//     }

//     return check(left, right);
//   }
console.log(isPalindrome("kajjak"));
