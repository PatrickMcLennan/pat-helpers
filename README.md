# pat-helpers

## Function library. Written + tested in TypeScript, compiled + minified to ES5

### **Index**

_Ctrl + F abbreviations listed for easier navigation_

- Dates (ph1)
- Strings (ph2)
- Numbers (ph3)
- Arrays (ph4)
- Objects (ph5)

### Dates - ph1

**`datesAreEqual`** - Checks if 2 dates the same (date only, not time).

2 parameters - `Date` and `Date`

```
const equalDates: boolean = datesAreEqual(new Date(), new Date())
```

Returns `true`.

```
const equalDates: boolean = datesAreEqual(new Date(), new Date(new Date().setDate(new Date().getDate() + 1)))
```

Returns `false`.

---

**`dateIsThisYear`** - Checks if the Date is this Year.

1 paramater - `Date`.

```
const validDate: boolean = dateIsThisYear(new Date())
```

Returns `true`

```
const validDate: boolean = dateIsThisYear(new Date(new Date().setFullYear(new Date().getFullYear() + 1))) // 1 year from now
```

Returns `false`

---

**`dateIsThisMonth`** - Checks if the date is this Month.

1 parameter - `Date`.

```
const validDate: boolean = dateIsThisMonth(new Date())
```

Returns `true`

```
const validDate: boolean = dateIsThisMonth(new Date(new Date().setMonth(new Date().getMonth() + 1))) // 1 month from now
```

Returns `false`

---

**`dateIsThisWeek`** - Checks if a Date is this Week.

1 parameter - `Date`.

```
const validDate: boolean = dateIsThisWeek(new Date())
```

Returns `true`

```
const validDate: boolean = dateIsThisWeek(new Date(new Date().setDate(new Date().getDate() + 7))) // 1 week from now
```

Returns `false`

---

**`dateIsWithinRange`** - Checks if a Date is within 2 others.

3 paramaters - `Date` you are querying, earliest allowed `Date` and last allowed `Date`

```
const validDate: boolean = datesAreWithinRange(
    new Date(),
    new Date(new Date().setDate(new Date().getDate() - 1)), // Yesterday
    new Date(new Date().setDate(new Date().getDate() + 1)) // Tomorrow
)
```

Returns `true`

```
const validDate: boolean = datesAreWithinRange(
    new Date(),
    new Date(new Date().setDate(new Date().getDate() - 2)), // 2 days ago
    new Date(new Date().setDate(new Date().getDate() - 1)) // 1 day ago
)
```

Returns `false`

---

**`monthString`** - Returns the Month in String.

2 parameters - `Date`, `boolean` for abbreviation (optional)

```
const month: string = monthString(new Date())
```

Returns 'January' || 'February' || etc.

```
const month: string = monthString(new Date(), true)
```

Returns 'Jan' || 'Feb' || etc.

---

**`suffixedDate`** - Returns the suffixed Date.

1 parameter - `Date`

```
const today: string = suffixedDate(new Date())
```

Returns `1st` || `2nd` || `3rd` || etc..

---

**`weekdayString`** - Returns the Weekday in String.

2 parameters - `Date`, `boolean` for abbreviation (optional).

```
const weekday: string = weekdayString(new Date())
```

Returns 'Sunday' || 'Monday' || etc.

```
const weekday: string = weekdayString(new Date(), true)
```

Returns 'Sun' || 'Mon' || etc.

---

### Strings - ph2

**`compareStrings`** - Checks if two strings contain the same characters.

2 parameters - `String`, `String`. Helpful for filtering search results.

```
const sameString: boolean = compareStrings('hello', 'hello')
const sameString: boolean = compareStrings('HELLO', ' hello ')
```

Returns `true`

```
const sameString: boolean = compareStrings('hello1', 'hello')
```

Returns `false`

---

**`stringIncludes`** - Checks if a string contains another.

2 parameters - `String` you are enquiring within, `String` you are enquiring with.

```
const validString: boolean = stringIncludes('hello', 'he')
const validString: boolean = stringIncludes('HELLO', ' he ')
```

Returns `true`

```
const validString: boolean = stringIncludes('he', 'hello')
const validString: boolean = stringIncludes('hello', 'hell1')
```

Returns `false`

### Numbers - ph3

**`evenNumbers`** - Returns even numbers in a range.

1 parameter - `Number`

```
const evenNumbers: number[] = evenNumbers(10)
```

Returns `[0, 2, 4, 6, 8, 10]`

---

**`oddNumbers`** - Returns odd numbers in a range.

1 parameter - `Number`

```
const oddNumbers: number[] = oddNumbers(10)
```

Returns `[1, 3, 5, 7, 9]`

---

**`square`** - Squares numbers.

1 parameter - `Number`

```
const square: number = square(2)
```

Returns `4`

### Arrays - ph4

**`zip`** - combines arrays. Shamelessly stolen from python.

2 parameters - `Array` `Array`

```
const zipped: object[] = zip(
    [{ name1: '1', age: 30 }, { name: "2", age: 20 }],
    [{ ownsDog: false, skier: false }, { ownsDog: true, skier: true }]
)
```

Returns

```
  [
    { name: "1", age: 30, ownsDog: false, skier: false },
    { name: "2", age: 20, ownsDog: true, skier: true }
  ]
```

---

### Objects - ph5

**`deepClone`** - Deep clones an object.

1 paramater - `Object`
