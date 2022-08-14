export function getPrimes(max) {
  const isPrime = new Map();
  for (let i = 2; i < Math.sqrt(max); i++) {
    if (isPrime.get(i) !== false) {
      for (let j = i ** 2; j < max; j += i) {
        isPrime.set(j, false);
      }
    }
  }
  return [...isPrime.entries()].filter(([, isPrime]) => isPrime).map(([number]) => number);
}
