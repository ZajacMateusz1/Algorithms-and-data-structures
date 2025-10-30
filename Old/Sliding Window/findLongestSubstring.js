function findLongestSubstring(string) {
  // jeśli pute zwracam 0, szukam największej ilości różnych liter po sobie w stringu.
  // robię Sliding window i wsadzam litery do Set, jeśli mam powtórkę to kasuję tą literę
  let start = 0;
  let end = 0;
  let answer = 0;
  const set = new Set();
  while (end < string.length) {
    if (set.has(string[end])) {
      while (set.has(string[end])) {
        set.delete(string[start]);
        start++;
      }
    } else {
      answer = Math.max(answer, end - start + 1);
    }
    set.add(string[end]);
    end++;
  }
  return answer;
}
console.log(findLongestSubstring(""));
