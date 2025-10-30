function sortedFrequency(arr, number) {
  let start = 0;
  let end = arr.length - 1;
  let firstSpotted = -1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === number && (arr[mid - 1] !== arr[mid] || mid === 0)) {
      firstSpotted = mid;
      break;
    } else if (arr[mid] === number) {
      end = mid - 1;
    } else if (arr[mid] > number) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  start = 0;
  end = arr.length - 1;
  let lastSpotted = -1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (
      arr[mid] === number &&
      (arr[mid + 1] !== arr[mid] || mid === arr.length - 1)
    ) {
      lastSpotted = mid;
      break;
    } else if (arr[mid] === number) {
      start = mid + 1;
    } else if (arr[mid] > number) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return lastSpotted === -1 || firstSpotted === -1
    ? -1
    : lastSpotted - firstSpotted + 1;
  // jeżeli nie wystąpi to -1.
  // ma być O(log n), tablica jest posortowana, a więc na początek dzielę ją na pół, potem dzielę bardziej
  // aż znajdę
  // Robię 2 wyszukiwania, 1 pierwszego elementu drugię drugiego i odejmuję to od siebie.
}
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 7));
