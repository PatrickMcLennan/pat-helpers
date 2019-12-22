export function zip<T>(array1: T[], array2: T[]): T[] {
  return array1.length >= array2.length
    ? array1.map((item, i) => {
        return { ...item, ...array2[i] };
      })
    : array2.map((item, i) => {
        return { ...item, ...array1[i] };
      });
}
