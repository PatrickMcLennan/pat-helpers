import moment from "moment";

export const weekdays: [string, string][] = [
  ["Sunday", "Sun"],
  ["Monday", "Mon"],
  ["Tuesday", "Tues"],
  ["Wednesday", "Wed"],
  ["Thursday", "Thurs"],
  ["Friday", "Fri"],
  ["Saturday", "Sat"]
];

export const months: [string, string][] = [
  ["January", "Jan"],
  ["February", "Feb"],
  ["March", "Mar"],
  ["April", "Apr"],
  ["May", "May"],
  ["June", "June"],
  ["July", "July"],
  ["August", "Aug"],
  ["September", "Sept"],
  ["October", "Oct"],
  ["November", "Nov"],
  ["December", "Dec"]
];

/* * * * * * * * * * * *
 * - COMPARING DATES - *
 * * * * * * * * * * * */
export function datesAreEqual(firstDate: Date, secondDate: Date): boolean {
  return (
    [
      firstDate.getFullYear(),
      firstDate.getMonth(),
      firstDate.getDate()
    ].toString() ===
    [
      secondDate.getFullYear(),
      secondDate.getMonth(),
      secondDate.getDate()
    ].toString()
  );
}

export function dateIsThisYear(date: Date): boolean {
  return date.getFullYear().toString() === new Date().getFullYear().toString();
}

export function dateIsThisMonth(date: Date): boolean {
  const today = new Date();
  return (
    [date.getFullYear(), date.getMonth()].toString() ===
    [today.getFullYear(), today.getMonth()].toString()
  );
}

export function dateIsThisWeek(date: Date): boolean {
  const today = new Date();
  return (
    [date.getFullYear(), moment(date).weeks()].toString() ===
    [today.getFullYear(), moment(today).weeks()].toString()
  );
}

export function dateIsWithinRange(
  queriedDate: Date,
  startOfRange: Date,
  endOfRange: Date
): boolean {
  return (
    Date.parse(queriedDate.toString()) > Date.parse(startOfRange.toString()) &&
    Date.parse(queriedDate.toString()) < Date.parse(endOfRange.toString())
  );
}

/* * * * * * * * * * * * *
 * - FORMATTING DATES -  *
 * * * * * * * * * * * * */
export function monthString(date: Date, abrv?: boolean | void): string {
  return months[date.getMonth()][abrv ? 1 : 0];
}

export function suffixedDate(date: Date): string {
  const dateNumber: number = date.getDate();

  if (dateNumber === 1 || dateNumber === 21 || dateNumber === 31) {
    return `${dateNumber}st`;
  } else if (dateNumber === 2 || dateNumber === 22) {
    return `${dateNumber}nd`;
  } else if (dateNumber === 3 || dateNumber === 23) {
    return `${dateNumber}rd`;
  } else {
    return `${dateNumber}th`;
  }
}

export function weekdayString(date: Date, abrv?: boolean | void): string {
  return weekdays[date.getDay()][abrv ? 1 : 0];
}
