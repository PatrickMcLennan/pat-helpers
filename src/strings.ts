export function compareStrings(string1: string, string2: string): boolean {
  return string1.toUpperCase().trim() === string2.toUpperCase().trim();
}

export function stringIncludes(string1: string, string2: string): boolean {
  return string1
    .toUpperCase()
    .trim()
    .includes(string2.toUpperCase().trim());
}
