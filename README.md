# patsHelpers

## D.R.Y - A library of Functions I reach for often, written + tested in TypeScript, compiled to ES5

### **Index**

_Ctrl + F abbreviations listed for easier navigation_

- Dates (ph1)
- Strings (ph2)
- Numbers (ph3)
- Arrays (ph4)

### Dates - ph1

---

**`datesAreEqual`**

`const equalDates: boolean = datesAreEqual(new Date(), new Date())`

Returns `true`.

`const equalDates: boolean = datesAreEqual(new Date(), new Date(new Date().setDate(new Date().getDate() + 1)))`

Returns `false`.

---

**`dateIsWithinRange`**

```const validDate: boolean = datesAreWithinRange(
    new Date(),
    new Date(new Date().setDate(new Date().getDate() - 1)),
    new Date(new Date().setDate(new Date().getDate() + 1))
)
```

Returns `true`

```const validDate: boolean = datesAreWithinRange(
    new Date(),
    new Date(new Date().setDate(new Date().getDate() - 2)),
    new Date(new Date().setDate(new Date().getDate() - 1))
)
```

Returns `false`

---

**`dateIsthisYear`**
1 paramater - `Date` Object.
`const validDate: boolean = dateIsThisYear(new Date())`

Returns `true`

`const validDate: boolean = dateIsThisYear(new Date(new Date().setFullYear(new Date().getFullYear() + 1)))`

Returns `false`

**`dateIsThisMonth`**
1 parameter - `Date` Object.
`const validDate: boolean = dateIsThisMonth(new Date())`

Returns `true`

`const validDate: boolean = dateIsThisMonth(new Date(new Date().setMonth(new Date().getMonth() + 1)))`

Returns `false`

---

**`dateIsThisWeek`**
1 parameter - `Date` Object.
`const validDate: boolean = dateIsThisWeek(new Date())`

Returns `true`

`const validDate: boolean = dateIsThisWeek(new Date(new Date().setDate(new Date().getDate() + 7)))`

Returns `false`

---

**`weekdayString`**
2 parameters - `Date` Object, abrv `boolean` (optional).

`const weekday: string = weekdayString(new Date())`

Returns 'Sunday', 'Monday', etc.

`const weekday: string = weekdayString(new Date(), true)`

Returns 'Sun', 'Mon', etc.

---

**`monthString`**
2 parameters - `Date` Object, abrv `boolean` (optional).

`const month: string = monthString(new Date())`

Returns 'January', 'February', etc.

`const month: string = monthString(new Date(), true)`

Returns 'Jan', 'Feb', etc.

---

### Strings - ph2

**`compareStrings`**
2 parameters - `String`, `String` . Helpful for filtering search results.

`const sameString: boolean = compareStrings('hello', 'hello')`

Returns `true`

`const sameString: boolean = compareStrings('HELLO', ' hello ')`

Returns `true`

`const sameString: boolean = compareStrings('hello1', 'hello')`

Returns `false`

---

###### Numbers - ph3

**`square`**
1 parameter - `Number`

`const square: number = square(2)`

Returns `4`
