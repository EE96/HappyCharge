"use strict";
exports.__esModule = true;
function parseChargeItem(chargeDevice) {
    return {
        ChargeDeviceId: { S: chargeDevice.ChargeDeviceId },
        ChargeDeviceName: { S: chargeDevice.ChargeDeviceName },
        ChargeDeviceCoordinates: {
            M: {
                Latitude: { N: chargeDevice.ChargeDeviceCoordinates.Latitude.toString() },
                Longitude: { N: chargeDevice.ChargeDeviceCoordinates.Longitude.toString() }
            }
        },
        ChargeDeviceShortDescription: { S: chargeDevice.ChargeDeviceShortDescription },
        Connectors: {
            L: chargeDevice.Connectors.map(parseConnector)
        }
    };
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
