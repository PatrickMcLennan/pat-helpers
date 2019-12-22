"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
function zip(array1, array2) {
    return array1.length >= array2.length
        ? array1.map(function (item, i) {
            return __assign(__assign({}, item), array2[i]);
        })
        : array2.map(function (item, i) {
            return __assign(__assign({}, item), array1[i]);
        });
}
exports.zip = zip;
