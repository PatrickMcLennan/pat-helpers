import {
  datesAreEqual,
  dateIsWithinRange,
  dateIsThisYear,
  dateIsThisMonth,
  dateIsThisWeek,
  weekdayString,
  monthString,
  months,
  suffixedDate
} from "../dates";

const today = new Date();

test("datesAreEqual", () => {
  expect(datesAreEqual(today, today)).toBe(true);
  expect(
    datesAreEqual(today, new Date(new Date().setDate(new Date().getDate() + 1)))
  ).toBe(false);
});

test("dateIsThisYear", () => {
  expect(dateIsThisYear(new Date())).toBe(true);
  expect(
    dateIsThisYear(
      new Date(new Date().setFullYear(new Date().getFullYear() + 1))
    )
  ).toBe(false);
});

test("dateIsThisMonth", () => {
  expect(dateIsThisMonth(today)).toBe(true);
  expect(
    dateIsThisMonth(new Date(new Date().setMonth(new Date().getMonth() + 1)))
  ).toBe(false);
});

test("dateIsThisWeek", () => {
  expect(dateIsThisWeek(today)).toBe(true);
  expect(
    dateIsThisWeek(new Date(new Date().setDate(new Date().getDate() + 7)))
  ).toBe(false);
});

test("dateIsWithinRange", () => {
  expect(
    dateIsWithinRange(
      today,
      new Date(new Date().setDate(new Date().getDate() - 1)),
      new Date(new Date().setDate(new Date().getDate() + 1))
    )
  ).toBe(true);
  expect(
    dateIsWithinRange(
      today,
      new Date(new Date().setDate(new Date().getDate() - 5)),
      new Date(new Date().setDate(new Date().getDate() - 4))
    )
  ).toBe(false);
});

test("monthString", () => {
  expect(monthString(today)).toBe(months[new Date().getMonth()][0]);
  expect(monthString(today, true)).toBe(months[new Date().getMonth()][1]);
});

test("suffixedDate", () => {
  const dateNumber: number = new Date().getDate();
  if (dateNumber === 1 || dateNumber === 21 || dateNumber === 31) {
    expect(suffixedDate(new Date())).toBe(`${dateNumber}st`);
  } else if (dateNumber === 2 || dateNumber === 22) {
    expect(suffixedDate(new Date())).toBe(`${dateNumber}nd`);
  } else if (dateNumber === 3 || dateNumber === 23) {
    expect(suffixedDate(new Date())).toBe(`${dateNumber}rd`);
  } else {
    expect(suffixedDate(new Date())).toBe(`${dateNumber}th`);
  }
});

test("weekdayString", () => {
  expect(
    weekdayString(
      new Date(new Date().setDate(new Date().getDate() - new Date().getDay()))
    )
  ).toBe("Sunday");
  expect(
    weekdayString(
      new Date(
        new Date().setDate(new Date().getDate() - new Date().getDay() + 1)
      )
    )
  ).toBe("Monday");
  expect(
    weekdayString(
      new Date(new Date().setDate(new Date().getDate() - new Date().getDay())),
      true
    )
  ).toBe("Sun");
  expect(
    weekdayString(
      new Date(
        new Date().setDate(new Date().getDate() - new Date().getDay() + 1)
      ),
      true
    )
  ).toBe("Mon");
});
