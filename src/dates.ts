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

// Comparing Dates
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

// export function dateIsToday(date: Date): boolean {
//     const today = new Date();
//     return (

//     )
// }

// Formatting Dates
export function weekdayString(date: Date, abrv?: boolean | void): string {
  return weekdays[date.getDay()][abrv ? 1 : 0];
}

export function monthString(date: Date, abrv?: boolean | void): string {
  return months[date.getMonth()][abrv ? 1 : 0];
}
