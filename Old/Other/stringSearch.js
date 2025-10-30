function stringSearch(long, short) {
  let counter = 0;
  for (let i = 0; i <= long.length - short.length; i++) {
    let match = true;
    for (let j = 0; j < short.length; j++) {
      if (long[i + j] !== short[j]) {
        match = false;
        break;
      }
    }
    if (match) counter++;
  }
  return counter;
}
console.log(stringSearch("hamburger in hamburgha", "ha"));
