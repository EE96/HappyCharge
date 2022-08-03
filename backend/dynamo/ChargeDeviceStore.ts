import { GetItemCommand, GetItemCommandInput, PutItemCommand, PutItemCommandInput } from "@aws-sdk/client-dynamodb";

import { DynamoClient } from "../dynamo/DynamoClient.js";
import {
    ChargeDevice,
    Connector,
    ConnectorChargeStatus,
    DynamoChargeDevice,
    DynamoConnector
} from "../types/ChargeDevice";

export default {
    put: async (item: ChargeDevice) => {
        const params: PutItemCommandInput = {
            TableName: "ChargeDevices",
            Item: chargeDeviceToDynamo(item)
        };
        try {
            const data = await DynamoClient.send(new PutItemCommand(params));
            console.log(data);
            return data;
        } catch (err) {
            console.error(err);
        }
    },
    fetch: async (chargeDeviceId: string) => {
        const params: GetItemCommandInput = {
            TableName: "ChargeDevices",
            Key: { ChargeDeviceId: { S: chargeDeviceId } }
        };
        try {
            const data = await DynamoClient.send(new GetItemCommand(params));
            console.log(data);
            return data;
        } catch (err) {
            console.error(err);
        }
    },
}


export function chargeDeviceToDynamo(chargeDevice: ChargeDevice): DynamoChargeDevice {
    const dynamoDevice: DynamoChargeDevice = {
        ChargeDeviceId: { S: chargeDevice.ChargeDeviceId },
        ChargeDeviceName: { S: chargeDevice.ChargeDeviceName },

        ChargeDeviceCoordinates: {
            M:
            {
                Latitude: { N: chargeDevice.ChargeDeviceCoordinates.Latitude.toString() },
                Longitude: { N: chargeDevice.ChargeDeviceCoordinates.Longitude.toString() }
            }
        },
        Connectors: {
            L: chargeDevice.Connectors.map(connectorToDynamo)
        },
        Charges: { N: chargeDevice.Charges.toString() }
    };

    if (chargeDevice.ChargeDeviceShortDescription) {
        dynamoDevice.ChargeDeviceShortDescription = { S: chargeDevice.ChargeDeviceShortDescription };
    }

    return dynamoDevice;
}

export function dynamoToChargeDevice(dynamoChargeDevice: DynamoChargeDevice): ChargeDevice {
    return {
        ChargeDeviceId: dynamoChargeDevice.ChargeDeviceId.S,
        Charges: parseInt(dynamoChargeDevice.Charges.N),
        ChargeDeviceName: dynamoChargeDevice.ChargeDeviceName.S,
        ChargeDeviceShortDescription: dynamoChargeDevice.ChargeDeviceShortDescription?.S ?? null,
        ChargeDeviceCoordinates: { 
            Latitude: parseInt(dynamoChargeDevice.ChargeDeviceCoordinates.M.Latitude.N),
            Longitude: parseInt(dynamoChargeDevice.ChargeDeviceCoordinates.M.Longitude.N)
        },
        Connectors: dynamoChargeDevice.Connectors.L.map(dynamoChargeDevice => dynamoToConnector(dynamoChargeDevice))
    }
}


export function connectorToDynamo(connector: Connector): DynamoConnector {
    return {
        M: {
            ConnectorId: { S: `${connector.ConnectorId}` },
            RatedOutputkW: { N: connector.RatedOutputkW.toString() },
            ChargePointStatus: { S: connector.ChargePointStatus }
        }
    }
}

export function dynamoToConnector(dynamoConnector: DynamoConnector): Connector {
    return {
        ConnectorId: dynamoConnector.M.ConnectorId.S,
        RatedOutputkW: parseInt(dynamoConnector.M.RatedOutputkW.N),
        ChargePointStatus: dynamoConnector.M.ChargePointStatus.S as ConnectorChargeStatus
    }
}



