"use strict";
exports.__esModule = true;
var fs = require("fs");
var data = JSON.parse(fs.readFileSync('NCR.json', 'utf8'));
var parseConnector = function (Connector) {
    var connectorData = {
        ConnectorId: Connector.ConnectorId,
        RatedOutputkW: parseInt(Connector.RatedOutputkW),
        ChargePointStatus: Connector.ChargePointStatus
    };
    return connectorData;
};
var parseChargeDevice = function (ChargeDevice) {
    var data = {
        ChargeDeviceId: ChargeDevice.ChargeDeviceId,
        ChargeDeviceName: ChargeDevice.ChargeDeviceName,
        ChargeDeviceCoordinates: {
            Latitude: parseFloat(ChargeDevice.ChargeDeviceLocation.Latitude),
            Longitude: parseFloat(ChargeDevice.ChargeDeviceLocation.Longitude)
        },
        ChargeDeviceShortDescription: ChargeDevice.ChargeDeviceLocation.LocationShortDescription,
        Connectors: ChargeDevice.Connector.map(function (x) { return parseConnector(x); })
    };
    return data;
};
// console.log(parseChargeDevice(data.ChargeDevice[1]))
var output = data.ChargeDevice.map(function (chargeDevice) { return parseChargeDevice(chargeDevice); });
fs.writeFile('output.json', JSON.stringify(output), function err() {
    if (err)
        throw err;
});
