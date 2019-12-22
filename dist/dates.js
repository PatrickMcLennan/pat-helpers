"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var moment_1 = __importDefault(require("moment"));
exports.weekdays = [
    ["Sunday", "Sun"],
    ["Monday", "Mon"],
    ["Tuesday", "Tues"],
    ["Wednesday", "Wed"],
    ["Thursday", "Thurs"],
    ["Friday", "Fri"],
    ["Saturday", "Sat"]
];
exports.months = [
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
function datesAreEqual(firstDate, secondDate) {
    return ([
        firstDate.getFullYear(),
        firstDate.getMonth(),
        firstDate.getDate()
    ].toString() ===
        [
            secondDate.getFullYear(),
            secondDate.getMonth(),
            secondDate.getDate()
        ].toString());
}
exports.datesAreEqual = datesAreEqual;
function dateIsThisYear(date) {
    return date.getFullYear().toString() === new Date().getFullYear().toString();
}
exports.dateIsThisYear = dateIsThisYear;
function dateIsThisMonth(date) {
    var today = new Date();
    return ([date.getFullYear(), date.getMonth()].toString() ===
        [today.getFullYear(), today.getMonth()].toString());
}
exports.dateIsThisMonth = dateIsThisMonth;
function dateIsThisWeek(date) {
    var today = new Date();
    return ([date.getFullYear(), moment_1["default"](date).weeks()].toString() ===
        [today.getFullYear(), moment_1["default"](today).weeks()].toString());
}
exports.dateIsThisWeek = dateIsThisWeek;
function dateIsWithinRange(queriedDate, startOfRange, endOfRange) {
    return (Date.parse(queriedDate.toString()) > Date.parse(startOfRange.toString()) &&
        Date.parse(queriedDate.toString()) < Date.parse(endOfRange.toString()));
}
exports.dateIsWithinRange = dateIsWithinRange;
function monthString(date, abrv) {
    return exports.months[date.getMonth()][abrv ? 1 : 0];
}
exports.monthString = monthString;
function suffixedDate(date) {
    var dateNumber = date.getDate();
    if (dateNumber === 1 || dateNumber === 21 || dateNumber === 31) {
        return dateNumber + "st";
    }
    else if (dateNumber === 2 || dateNumber === 22) {
        return dateNumber + "nd";
    }
    else if (dateNumber === 3 || dateNumber === 23) {
        return dateNumber + "rd";
    }
    else {
        return dateNumber + "th";
    }
}
exports.suffixedDate = suffixedDate;
function weekdayString(date, abrv) {
    return exports.weekdays[date.getDay()][abrv ? 1 : 0];
}
exports.weekdayString = weekdayString;
