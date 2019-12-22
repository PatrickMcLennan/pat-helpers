import {
  datesAreEqual,
  dateIsWithinRange,
  dateIsThisYear,
  dateIsThisMonth,
  dateIsThisWeek,
  weekdayString,
  monthString,
  months
} from "../dates";

const today = new Date();

test("datesAreEqual", () => {
  expect(datesAreEqual(today, today)).toBe(true);
  expect(
    datesAreEqual(today, new Date(new Date().setDate(new Date().getDate() + 1)))
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

test("monthString", () => {
  expect(monthString(today)).toBe(months[new Date().getMonth()][0]);
  expect(monthString(today, true)).toBe(months[new Date().getMonth()][1]);
});
