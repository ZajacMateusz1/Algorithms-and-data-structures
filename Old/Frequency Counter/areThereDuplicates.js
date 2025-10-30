// ładuje wszystkie paramerty do obiektu za pomocą arguments i sprawdzam czy, któryś będzie większy od 1
// Podejście Multiple Pointers
function areThereDuplicates(...args) {
  args.sort();
  let j = 1;
  for (let i = 0; j < args.length; i++) {
    if (args[i] === args[j]) {
      return true;
    }
    j++;
  }
  return false;
}
// Podejście FrequencyCounter
//   function areThereDuplicates(...args) {
//     const obj = {};
//     for (let i = 0; i < args.length; i++) {
//       const element = args[i];
//       obj[args[i]] = (obj[args[i]] || 0) + 1;
//     }
//     console.log(obj);
//     const keys = Object.keys(obj);
//     for (let i = 0; i < keys.length; i++) {
//       if (obj[keys[i]] !== 1) {
//         return true;
//       }
//       return false;
//     }
//   }
console.log(areThereDuplicates("a", "b", "c", "a"));
