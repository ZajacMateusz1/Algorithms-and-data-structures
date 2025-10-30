// program, który sprawdza czy dwa stringi są angramami. Tylko małe litery bez spacji i znaków interpunkcyjnych
// dodaję znaki z dwóch stringów do obiektu za pomocą pętli i potem porównuję ilość ich wystąpień za pomocą trzeciej
const string1 = "cinema";
const string2 = "iceman";
function validAngram(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }
  const obj1 = {};
  const obj2 = {};
  for (let element of string1) {
    obj1[element] = (obj1[element] || 0) + 1;
  }
  for (let element of string2) {
    obj2[element] = (obj2[element] || 0) + 1;
  }
  console.log(obj1, obj2);
  for (let element of Object.keys(obj1)) {
    if (obj1[element] !== obj2[element]) {
      return false;
    }
  }
  return true;
}

console.log(validAngram(string1, string2));
