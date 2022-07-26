"use strict";
exports.__esModule = true;
var fs = require("fs");
var data = JSON.parse(fs.readFileSync('output.json', 'utf8'));
var parseConnector = function (Connector) {
    var connectorData = {
        ConnectorId: Connector.ConnectorId,
        RatedOutputkW: parseInt(Connector.RatedOutputkW),
        ChargePointStatus: Connector.ChargePointStatus
    };
    return connectorData;
};
var parseChargeDevice = function (c) {
    var data = {
        ChargeDeviceId: c.ChargeDeviceId,
        ChargeDeviceName: c.ChargeDeviceName,
        ChargeDeviceCoordinates: {
            Latitude: c.ChargeDeviceCoordinates.Latitude,
            Longitude: c.ChargeDeviceCoordinates.Longitude
        },
        ChargeDeviceShortDescription: c.ChargeDeviceShortDescription,
        Connectors: c.Connectors.map(function (x) { return parseConnector(x); })
    };
    return data;
};
var makeFullChargeDevice = function (c) {
    var data = {
        ChargeDeviceId: c.ChargeDeviceId,
        ChargeDeviceName: c.ChargeDeviceName,
        ChargeDeviceCoordinates: {
            Latitude: c.ChargeDeviceCoordinates.Latitude,
            Longitude: c.ChargeDeviceCoordinates.Longitude
        },
        ChargeDeviceShortDescription: c.ChargeDeviceShortDescription,
        Connectors: c.Connectors.map(function (x) { return parseConnector(x); }),
        Charges: 0
    };
    return data;
};
var makeChargeDeviceMarkerInfo = function (c) {
    var data = {
        ChargeDeviceId: c.ChargeDeviceId,
        ChargeDeviceCoordinates: {
            Latitude: c.ChargeDeviceCoordinates.Latitude,
            Longitude: c.ChargeDeviceCoordinates.Longitude
        }
    };
    return data;
};
// console.log(parseChargeDevice(data[1]))
// const output = data.map((chargeDevice: ChargeDevice) => parseChargeDevice(chargeDevice)) //normal
// const output = data.map((chargeDevice: ChargeDevice) => makeFullChargeDevice(chargeDevice)) //FullChargeDevices
var output = data.map(function (chargeDevice) { return makeChargeDeviceMarkerInfo(chargeDevice); }); //FullChargeDevices
// const output = (parseChargeDevice(data[1]))
fs.writeFile('truncated.json', JSON.stringify(output), function err() {
    if (err)
        throw err;
});
