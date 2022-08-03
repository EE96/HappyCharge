"use strict";
exports.__esModule = true;
function parseChargeItem(chargeDevice) {
    var dynamoDevice = {
        ChargeDeviceId: { S: chargeDevice.ChargeDeviceId },
        ChargeDeviceName: { S: chargeDevice.ChargeDeviceName },
        ChargeDeviceCoordinates: {
            M: {
                Latitude: { N: chargeDevice.ChargeDeviceCoordinates.Latitude.toString() },
                Longitude: { N: chargeDevice.ChargeDeviceCoordinates.Longitude.toString() }
            }
        },
        Connectors: {
            L: chargeDevice.Connectors.map(parseConnector)
        },
        Charges: { N: "0" }
    };
    if (chargeDevice.ChargeDeviceShortDescription) {
        dynamoDevice.ChargeDeviceShortDescription = { S: chargeDevice.ChargeDeviceShortDescription };
    }
    return dynamoDevice;
}
exports["default"] = parseChargeItem;
function parseConnector(connector) {
    return {
        M: {
            ConnectorId: { S: "" + connector.ConnectorId },
            RatedOutputkW: { N: connector.RatedOutputkW.toString() },
            ChargePointStatus: { S: connector.ChargePointStatus }
        }
    };
}
