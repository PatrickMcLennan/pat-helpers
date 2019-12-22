export function square(number: number): number {
  return number * number;
}

export function evenNumbers(number: number): number[] {
  return [...Array(number).keys(), number].filter(
    (number: number): boolean => number % 2 === 0
  );
}

export function oddNumbers(number: number): number[] {
  return [...Array(number).keys(), number].filter(
    (number: number): boolean => number % 2 !== 0
  );
}
