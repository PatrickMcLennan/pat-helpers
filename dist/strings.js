"use strict";
exports.__esModule = true;
function compareStrings(string1, string2) {
    return string1.toUpperCase().trim() === string2.toUpperCase().trim();
}
exports.compareStrings = compareStrings;
function stringIncludes(string1, string2) {
    return string1
        .toUpperCase()
        .trim()
        .includes(string2.toUpperCase().trim());
}
exports.stringIncludes = stringIncludes;
