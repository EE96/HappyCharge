"use strict";
exports.__esModule = true;
var fs = require("fs");
var data = JSON.parse(fs.readFileSync('./json/lowerCaseChargeDevice.json', 'utf8'));
var truncatedData = data.map(function (_a) {
    var chargeDeviceId = _a.chargeDeviceId, chargeDeviceCoordinates = _a.chargeDeviceCoordinates;
    return ({
        chargeDeviceId: chargeDeviceId,
        chargeDeviceCoordinates: chargeDeviceCoordinates
    });
});
fs.writeFile('./json/lowerCaseTruncatedChargeDevice.json', JSON.stringify(truncatedData, null, 2), function (err) {
    console.log(err);
});
