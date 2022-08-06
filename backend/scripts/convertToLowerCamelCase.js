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
var fs = require("fs");
var data = JSON.parse(fs.readFileSync('./json/fullChargeDevice.json', 'utf8'));
var renameKeys = function (object) {
    if (Array.isArray(object)) {
        return object.map(function (obj) { return renameKeys(obj); });
    }
    else if (typeof object === "object" && object !== null) {
        return Object.entries(object).reduce(function (acc, _a) {
            var _b;
            var key = _a[0], value = _a[1];
            return (__assign(__assign({}, acc), (_b = {}, _b[uncapitalise(key)] = renameKeys(value), _b)));
        }, {});
    }
    else {
        return object;
    }
};
var uncapitalise = function (string) { return string[0].toLowerCase() + string.slice(1); };
var updatedData = renameKeys(data);
console.log(updatedData[0]);
fs.writeFile('./json/lowerCaseChargeDevice.json', JSON.stringify(updatedData, null, 2), function (err) {
    console.log(err);
    if (err)
        throw err;
});
