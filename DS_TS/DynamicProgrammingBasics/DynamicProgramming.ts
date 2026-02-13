function fib(n: number, memo: Record<number, number>): number {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  const returned = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = returned;
  return returned;
}
function fibTabulation(n: number) {
  if (n <= 2) return 1;
  const table = [1, 1];
  for (let i = 2; i < n; i++) {
    table[i] = table[i - 1]! + table[i - 2]!;
  }
  return table[n - 1];
}
console.log(fib(6, {}));
console.log(fibTabulation(6));
